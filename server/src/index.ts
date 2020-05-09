import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'
import './controllers/auth'
import './controllers/home'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['foo'] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})
