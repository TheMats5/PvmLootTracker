export enum ErrorTypes {
    UnauthorizedError = "UnauthorizedError",
    ValidationError = "ValidationError",
    NotFoundError = "NotFoundError"
}

export class UnauthorizedError extends Error {
    constructor(message: string) {
        super(message)
        this.name = ErrorTypes.UnauthorizedError
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message)
        this.name = ErrorTypes.NotFoundError
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = ErrorTypes.ValidationError
    }
}
