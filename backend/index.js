const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const PORT = 8000;

app.use(bodyParser);

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
app.get("/user", (req, res) => {
	res.send("list to find users");
});

app.post("/users", (req, res) => {
	res.send("Route for creating an user");
});

// CONNECTING TO SERVER AND DATABASE
app.listen(PORT, async () => {
	const URI = process.env.DATABASE_URI;
	const client = new MongoClient(URI, {
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
		} catch (err) {
			console.log(err);
		} finally {
			await client.close();
		}
	};

	runDatabase();
});
