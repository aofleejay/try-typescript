import { Callback } from './types'

class Events {
  private events: { [key: string]: Callback[] } = {}

  on = (eventName: string, callback: Callback) => {
    const events = this.events[eventName] || []
    events.push(callback)
    this.events[eventName] = events
  }

  trigger = (eventName: string) => {
    const callbacks = this.events[eventName]

    if (callbacks && callbacks.length !== 0) {
      callbacks.forEach((callback) => {
        callback()
      })
    }
  }
}

export { Events }
