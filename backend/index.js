const express = require("express");
const fs = require("fs");

// Own modules
const connectToDatabase = require("./modules/db");

require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

// app.get("/properties", (req, res) => {
// 	res.send("Route to GET all properties");
// });

// app.post("/properties", (req, res) => {
// 	res.send("Adding a property to properties");
// });

// app.get("/property", (req, res) => {
// 	// Req needs to be the q
// 	res.send("Route to GET a specific property");
// });

// Users route
app.get("/user", async (req, res) => {
	const result = async () => {
		try {
			const db = await connectToDatabase();
			const collection = db.collection("users");
			const users = await collection.find().toArray();

			res.json(users);
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
	console.log(`The server is listening at PORT:${PORT}`);
});
