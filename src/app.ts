import express from 'express'
import cors from 'cors'
import { userRoute } from './app/modules/user/user.routes'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRoute)

app.get('/', (req, res) => {
  res.send('assignment tow server running!')
})

export default app
