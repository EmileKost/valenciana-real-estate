const express = require("express");
const fs = require("fs");

const jwt = require("jsonwebtoken");
// Own modules
const connectToDatabase = require("./modules/db");

require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

const authenticateJwtToken = (req, res, next) => {
	const token = req.header("Authorization");
	console.log(token);
	if (!token)
		res.status(401).json({
			message: "Unauthorized to perform this action, please specify a token",
		});

	jwt.verify(token.split(" ")[1], "test", (err, user) => {
		if (err) {
			console.log(err);
			return res.status(403).json({ message: "Forbidden" });
		}
		req.user = user;
		next();
	});
};

// app.get("/properties", (req, res) => {
// 	res.send("Route to GET all properties");
// });

// Users route
app.get("/user", authenticateJwtToken, async (req, res) => {
	const userEmail = req.body.email ? req.body.email : "testuser@example.com";

	const result = async () => {
		try {
			const db = await connectToDatabase();
			const collection = db.collection("users");
			const user = await collection.find({ email: userEmail }).toArray();

			if (!user || user.length === 0) {
				res.json(`There was no user found with the email: ${userEmail}`);
			}

			return res.json(user[0]);
		} catch (err) {
			console.log(err);
		}
	};

	result();
});

// NEXT STEPS:
// - Make routes secure
// - Make plan where to handle the logic
// - Code this logic
// - Go back to FE

app.post("/users", (req, res) => {
	res.send("Route for creating an user");
});

// CONNECTING TO SERVER AND DATABASE
app.listen(PORT, () => {
	const token = jwt.sign({ id: 123, email: "user@example.com" }, "test", {
		expiresIn: "5h", // Token will expire in 1 hour
	});
	console.log(
		`The server is listening at PORT:${PORT} and the token is: ${token}`
	);
});
