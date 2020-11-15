class BaseController {

    constructor(service) {
        this.service = service;
        this.getFindAll = this.getFindAll.bind(this);
        this.create = this.create.bind(this);
        this.updateOne = this.updateOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
    }

    async getFindAll(req, res) {
        return res.status(200).send(await this.service.getFindAll(req.query));
    }

    async create(req, res) {
        let response = await this.service.create(req.body);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(201).send(response);
    }

    async updateOne(req, res) {
        const { id } = req.params;

        let response = await this.service.updateOne(id, req.body);

        return res.status(response.statusCode).send(response);
    }

    async deleteOne(req, res) {

        const { id } = req.params;

        let response = await this.service.deleteOne(id);

        return res.status(response.statusCode).send(response);
    }

}

export default BaseController;
