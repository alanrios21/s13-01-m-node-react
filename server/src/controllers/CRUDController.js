/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
/* eslint-disable prettier/prettier */
import UsersManager from '../dao/managerUsers.js';

class CRUDController {
  constructor(manager, messages) {
    this.manager = manager;
    this.messages = messages;
    this.entity = null;
    this.entityUp = null;
  }

  /* CREATE: Método generico para crear una entidad */
  create = async (req, res) => {
    const data = req.body;
    try {
      if (this.manager instanceof UsersManager) {
        this.entity = await this.manager.createUser(data);
      } 
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.messages.success.create,
      });
    } catch (error) {
      return res.status(400).json({
        data: null,
        status: 1,
        message: this.messages.error.create,
        error: error.message,
      });
    }
  }

  /* GET ONE: Método generico para devolver una entidad */
  getOne = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      if (this.manager instanceof UsersManager) {
        this.entity = await this.manager.getOneUser(query);
      }
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.messages.success.getOne,
      });
    } catch (error) {
      return res.status(400).json({
        data: null,
        status: 1,
        message: this.messages.error.getOne,
        error: error.message,
      });
    }
  }

  /* GET ALL: Método generico para devolver varias entidades */
  getAll = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      if (this.manager instanceof UsersManager) {
        this.entity = await this.manager.getAllUsers(query);
      } 
      if (!this.entity) {
        throw new Error('No hay registros para mostrar.');
      }
      return res.status(200).json({
        data: this.entity,
        status: 0,
        message: this.messages.success.getAll,
      });
    } catch (error) {
      return res.status(400).json({
        data: null,
        status: 1,
        message: this.messages.error.getAll,
        error: error.message,
      });
    }
  }

  /* UPDATE: Método generico para actualizar una entidad */
  update = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    const data = req.body;
    try {
      if (Object.keys(query).length > 0) {
        if (this.manager instanceof UsersManager) {
          this.entity = await this.manager.updateUser(query);
          if (this.entity.matchedCount > 0) {
            this.entityUp = await this.manager.getOneUser(query);
          }
        } 
        if (this.entity.matchedCount > 0) {
          return res.status(200).json({
            data: this.entityUp,
            status: 0,
            message: this.messages.success.update,
          });
        }
      } else {
        throw new Error('Falta el criterio de búsqueda para actualizar.');
      }
    } catch (error) {
      return res.status(400).json({
        data: null,
        status: 1,
        message: this.messages.error.update,
        error: error.message,
      });
    }
  }

  /* DELETE: Método generico para actualizar una entidad */
  delete = async (req, res) => {
    const query = req.parsedQuery || {}; // middleware buildQuery
    try {
      if (Object.keys(query).length > 0) {
       if (this.manager instanceof UsersManager) {
          this.entity = await this.manager.deleteUser(query);
        } 
        if (this.entity.deletedCount > 0) {
          return res.status(200).json({
            data: {},
            status: 0,
            message: this.messages.success.delete,
          });
        }
      } else {
        throw new Error('Falta el criterio de búsqueda para eliminar.');
      }
    } catch (error) {
      return res.status(400).json({
        data: null,
        status: 1,
        message: this.messages.error.delete,
        error: error.message,
      });
    }
  }
}

export default CRUDController;
