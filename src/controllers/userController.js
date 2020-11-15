import BaseController from  './BaseController';
import User from "../models/user";
import UserService from "../service/UserService";
const userService = new UserService(
    new User().getInstance()
);

class UserController extends BaseController {

    constructor(service) {
        super(service);
    }

}

export default new UserController(userService);
