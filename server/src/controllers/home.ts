import { Request, Response } from 'express'
import { controller, get, middleware } from '../decorators'
import { requireAuth } from '../middlewares/auth'

@controller('')
class HomeController {
  @get('/')
  getHome(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      res.send(`
        <div>
          <h1>Logged In</h1>
          <a href="/auth/logout">Log out</a>
        </div>
      `)
    } else {
      res.send(`
        <div>
          <h1>Welcome</h1>
          <a href="/auth/login">Log in</a>
        </div>
      `)
    }
  }

  @get('/protected')
  @middleware(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
      <div>
        <h1>Protected resource</h1>
      </div>
    `)
  }
}

export { HomeController }
