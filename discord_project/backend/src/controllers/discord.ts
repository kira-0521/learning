import { RequestHandler} from "express";

export const registerDiscordChannel: RequestHandler = (req, res, next) => {
    console.log((req.body as { content: string }).content)
    return res.status(200).json({message: 'post request success'})
}