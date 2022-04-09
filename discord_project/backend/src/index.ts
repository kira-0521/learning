import express, { Application, Request, Response } from 'express'
import config from 'config'

const initializeServer = async() => {
const app: Application = express()
const PORT = config.get('PORT') as string

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
    return res.status(200).send({
        message: 'Hello World!',
    })
})

try {
    app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`)
    })
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message)
    }
}
}

(async () => {
    await initializeServer()
})()