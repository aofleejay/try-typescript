import { Request, Response, RequestHandler } from 'express'
import 'reflect-metadata'
import { controller, get, post } from '../decorators'

@controller('/auth')
class AuthController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <div>
        <h1>Log In</h1>
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log in</button>
        </form>
      </div>
    `)
  }

  @post('/login')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body

    if (
      email &&
      password &&
      email === 'hello@world.com' &&
      password === 'password'
    ) {
      if (req.session) req.session = { isLoggedIn: true }
      res.redirect('/')
    } else {
      res.send(`
        <div>
          <h1>Wrong email or password</h1>
        </div>
      `)
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
