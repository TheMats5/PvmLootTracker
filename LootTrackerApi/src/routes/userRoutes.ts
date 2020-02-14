import {NextFunction, Request, Response, Router} from "express"
import UserController from "../controllers/userController"

const router = Router()

router.post("/user", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await UserController.create(req.body)
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
})

export default router
