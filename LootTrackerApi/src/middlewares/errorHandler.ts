import {NextFunction, Request, Response} from "express"
import {ErrorTypes} from "../lib/errors"

interface ResponseError extends Error {
    status?: number,
    response?: {
        status: number,
        statusText: string
    }
}

export default (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    if (err.name === ErrorTypes.UnauthorizedError) {
        res.status(401).send({message: err.message})
        return
    }

    if (err.name === ErrorTypes.NotFoundError) {
        res.status(404).send({message: err.message})
        return
    }

    if (err.name === ErrorTypes.ValidationError) {
        res.status(404).send({message: err.message})
        return
    }

    res.status(500).send({message: err.message})
    return
}
