import {Transaction} from "sequelize"
import user from "../../models/user.model"

export default class CreateUserService {
    // TODO: remove any type
    private readonly req: any
    private readonly transaction: Transaction

    constructor(req, transaction) {
        this.req = req
        this.transaction = transaction
    }

    public execute(): Promise<user> {
        return user.create(this.req, {transaction: this.transaction})
    }
}
