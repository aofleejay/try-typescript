import { AppRouter } from '../AppRouter'
import { HttpMethods, MetadataKeys } from '../types'

function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance()

    for (const key in target.prototype) {
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
      const method: HttpMethods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key,
      )
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middlewares, target.prototype, key) ||
        []

      router[method](routePrefix + path, ...middlewares, target.prototype[key])
    }
  }
}

export { controller }
