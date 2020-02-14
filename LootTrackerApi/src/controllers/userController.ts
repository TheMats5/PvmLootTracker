import {sequelize} from "../database"
import {CreateAndUpdateUserJoiType} from "../models/types/userTypes"
import User from "../models/user.model"
import CreateUserService from "../services/user/createUserService"

export default class UserController {
    public static async create(req): Promise<User> {
            return CreateAndUpdateUserJoiType.validateAsync(req)
                .then(() => this.createUser(req))
        }

    public static createUser(req: any) {
        return sequelize.transaction((t) => {
            const UserService = new CreateUserService(req, t)
            return UserService.execute()
        })
    }
}
