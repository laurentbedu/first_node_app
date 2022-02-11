// const BaseService = require("../services/base.service");
const services = require('../services');

class BaseController{

    constructor(){
        
        this.name = this.constructor.name.replace(`Controller`,``);
        this.table = this.name.toLowerCase();
        this.service = new services[this.table]();

    }

    getAll = async () => {
        // const service = new BaseService();
        // service.test();
        const result = await this.service.getAll();
        return result;
    }

    getOne = async (id) => {
        // const service = new BaseService();
        // service.test();
        const result = await this.service.getOne(id);
        return result;
    }
}

module.exports = BaseController;