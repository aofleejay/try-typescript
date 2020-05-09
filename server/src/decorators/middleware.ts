import { RequestHandler } from 'express'
import { MetadataKeys } from '../types'

function middleware(middleware: RequestHandler) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middlewares, target, key) || []

    Reflect.defineMetadata(
      MetadataKeys.middlewares,
      [...middlewares, middleware],
      target,
      key,
    )
  }
}

export { middleware }
