import Joi from "@hapi/joi"

export const CreateAndUpdateUserJoiType = Joi.object().keys({
    userName: Joi.string().min(3).max(20).required()
})
