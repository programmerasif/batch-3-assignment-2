import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { studentRoutes } from './app/modules/student/student.rout'

// parsors
app.use(express.json())
app.use(cors())


app.use('/api/v1/students',studentRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
