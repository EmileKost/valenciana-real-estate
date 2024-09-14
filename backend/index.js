const express = require("express");
const fs = require("fs");

require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const PORT = 8000;

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.get("/properties", (req, res) => {
	res.send("Route to GET all properties");
});

app.post("/properties", (req, res) => {
	res.send("Adding a property to properties");
});

app.get("/property", (req, res) => {
	// Req needs to be the q
	res.send("Route to GET a specific property");
});

// Users route
app.get("/user", async (req, res) => {
	const result = async () => {
		try {
			const database = client.db("your-database-name"); // Replace with your database name
			const collection = database.collection("users");

			const response = await collection.find();
			console.log({ response });
		} catch (err) {
			console.log(err);
		}
	};

	result();
});

app.post("/users", (req, res) => {
	res.send("Route for creating an user");
});

// CONNECTING TO SERVER AND DATABASE
app.listen(PORT, async () => {
	const URI = process.env.DATABASE_URI;
	const client = new MongoClient(URI, {
		useNewUrlParser: true,
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	});

	const runDatabase = async () => {
		try {
			await client.connect();
			await client.db("admin").command({ ping: 1 });

			console.log(`DB connected and server listening on port ${PORT}`);

			const database = client.db("your-database-name"); // Replace with your database name
			const collection = database.collection("users"); // Replace 'users' with your collection name if different

			// Create a test user object
			// const testUser = {
			// 	name: "Test User",
			// 	email: "testuser@example.com",
			// 	password: "securepassword123", // You should hash passwords in production
			// 	createdAt: new Date(),
			// };

			// // Insert the test user into the collection
			// const result = await collection.insertOne(testUser);

			// console.log(`Test user added with id: ${result.insertedId}`);
		} catch (err) {
			console.log(err);
		} finally {
			await client.close();
		}
	};

	runDatabase();
});
