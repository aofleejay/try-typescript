import { Router } from 'express'

class AppRouter {
  private static router: Router

  static getInstance(): Router {
    if (!AppRouter.router) {
      AppRouter.router = Router()
    }

    return AppRouter.router
  }
}

export { AppRouter }
