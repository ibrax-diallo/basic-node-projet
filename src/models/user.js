import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


class User {

    initSchema() {
        const schema = new Schema({
            username: {
                type: String,
                required: true,
                unique: true
            },
            firstName: {
                type: String,
                required: false,
            },
            lastName: {
                type: String,
                required: true,
            }
        }, { timestamps: true });
        schema.plugin(uniqueValidator);
        mongoose.model("users", schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("users");
    }
}

export default User;


