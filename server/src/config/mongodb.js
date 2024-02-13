import 'dotenv/config';
import { MongoClient } from 'mongodb';

const DB = process.env.MONGO_DB_NAME;
const URI = process.env.MONGO_DB_URI;

class Database {
	constructor() {
		this.uri = URI;
		this.client = new MongoClient(this.uri);
		this.db = null;
	}

	async connectToDatabase() {
		try {
			await this.client.connect();

			this.usersCollection = this.client.db(DB).collection('users');
			this.songsCollection = this.client.db(DB).collection('songs');
			this.donationsCollection = this.client.db(DB).collection('donations');
			this.collaborationsCollection = this.client.db(DB).collection('collaborations');
			console.log('Connected to the database');
		} catch (error) {
			console.error(error);
		}
	}

	async disconnect() {
		await this.client.close();
		console.log('Disconnected from database');
	}
}

export default Database;
