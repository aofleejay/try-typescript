import { RequestHandler } from 'express'
import { HttpMethods, MetadataKeys } from '../types'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function buildRouter(httpMethod: HttpMethods) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      descriptor: RouteHandlerDescriptor,
    ) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, httpMethod, target, key)
    }
  }
}

const get = buildRouter(HttpMethods.get)
const post = buildRouter(HttpMethods.post)

export { get, post }
