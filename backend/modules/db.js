const { MongoClient, ServerApiVersion } = require("mongodb");

let client;
let db;

const connectToDatabase = async () => {
	if (!client) {
		const URI = process.env.DATABASE_URI;
		client = new MongoClient(URI, {
			useNewUrlParser: true,
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});

		try {
			await client.connect();
			db = client.db("your-database-name"); // Replace with your database name
			console.log("Connected to database");
		} catch (err) {
			console.error("Failed to connect to database", err);
			throw err;
		}
	}

	return db;
};

module.exports = connectToDatabase;
