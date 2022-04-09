import { RequestHandler} from "express";

export const registerDiscordChannel: RequestHandler = async (req, res, next) => {
    return res.status(200).json({message: 'post request success'})
}