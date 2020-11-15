import mongoose from "mongoose";

class BaseService {
    constructor(model) {
        this.model = model;
        this.getFindAll = this.getFindAll.bind(this);
        this.create = this.create.bind(this);
        this.updateOne = this.updateOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
    }

    async getFindAll(query) {
        let {skip, limit} = query;
        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;
        delete query.skip;
        delete query.limit;
        if (query._id) {
            try {
                query._id = new mongoose.mongo.ObjectId(query._id);
            } catch (error) {
                console.log("not able to generate mongoose id with content", query._id);
            }
        }
        try {
            let items = await this.model
                .find(query)
                .skip(skip)
                .limit(limit);
            let total = await this.model.count();
            return {
                error: false,
                statusCode: 200,
                data: items,
                total
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 400,
                errors
            };
        }
    }

    async create(data) {
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    item
                };
        } catch (error) {
            return {
                error: true,
                statusCode: 400,
                message: error || "Not able to create item",
                errors: error.errors
            };
        }
    }

    async updateOne(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, {new: true});
            return {
                error: false,
                statusCode: 200,
                item
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 400,
                errors
            };
        }
    }

    async deleteOne(id) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item)
                return {
                    error: true,
                    statusCode: 400,
                    message: "item not found"
                };
            return {
                error: false,
                deleted: true,
                statusCode: 200,
                item
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 400,
                errors
            };
        }
    }
}

export default BaseService;
