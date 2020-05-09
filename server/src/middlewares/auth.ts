import { Request, Response, NextFunction } from 'express'

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.isLoggedIn) {
    next()
  } else {
    res.status(403).send(`
      <div>
        <h1>Not permitted</h1>
      </div>
    `)
  }
}

export { requireAuth }
