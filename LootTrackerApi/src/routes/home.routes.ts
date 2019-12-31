import {NextFunction, Request, Response, Router} from "express"

const router = Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => {
// render the index template
    res.send( "hello world test" )
})
export default router
