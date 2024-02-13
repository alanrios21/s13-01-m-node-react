/* eslint-disable prettier/prettier */
import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import UserModel from '../models/userModel.js';

class UsersManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createUser(data) {
		const {
			namesUser,
			nickName,
			password,
			email,
			instruments,
			genres,
			influences,
			songs,
		} = data;

		const user = UserModel({
			namesUser,
			nickName,
			password,
			email,
			instruments,
			genres,
			influences,
			songs,
		});

		await this.createDocument('usersCollection', user);
	}

	async getOneUser(query) {
		try {
			const user = await this.getOneDocument('usersCollection', query);
			return user;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async getAllUsers(query) {
		try {
			const users = await this.getAllDocuments('usersCollection', query);
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async updateUser(filter, dataUpdate) {
		try {
			const users = await this.updateDocument('usersCollection', filter, dataUpdate);
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar el usuario: ${error.message}`);
		}
	}

	async deleteUser(filter) {
		try {
			const userDelete = await this.deleteDocument('usersCollection', filter);
			return userDelete;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al intentar eliminar el usuario: ${error.message}`);
		}
	}
}

export default UsersManager;
