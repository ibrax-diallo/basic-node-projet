import UserController from '../controllers/userController'
const users = "/api/V1/users"
export default (server) => {
    server.get(users + `/`, UserController.getFindAll);
    server.post(users + `/`, UserController.create)
    server.put(users+ `/:id`, UserController.updateOne);
    server.delete(users+ `/:id`, UserController.deleteOne);

}
