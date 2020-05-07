import { AxiosResponse, AxiosPromise } from 'axios'
import { Callback } from './types'

interface Attributes<T> {
  get<K extends keyof T>(key: K): T[K]
  getAll(): T
  set(values: T)
}

interface Events {
  on(eventName: string, callback: Callback): void
  trigger(eventName: string): void
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(values: T): AxiosPromise
}

interface HasId {
  id?: number
}

class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private events: Events,
    private sync: Sync<T>,
  ) {}

  get get() {
    return this.attributes.get
  }

  set(values: T) {
    this.attributes.set(values)
    this.events.trigger('change')
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch() {
    const id = this.attributes.get('id')

    if (id) {
      this.sync
        .fetch(this.attributes.get('id'))
        .then((response: AxiosResponse<T>): void => {
          this.set(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then(() => {
        this.events.trigger('save')
      })
      .catch((error) => {
        console.error(error)
        this.events.trigger('error')
      })
  }
}

export { Model }
