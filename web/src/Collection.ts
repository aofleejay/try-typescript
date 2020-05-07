import axios, { AxiosResponse } from 'axios'
import { Events } from './Events'

class Collection<T, K> {
  private models: T[] = []
  public events = new Events()

  constructor(private baseUrl: string, private deserialize: (json: K) => T) {}

  on = this.events.on
  trigger = this.events.trigger

  fetch = () => {
    axios
      .get(this.baseUrl)
      .then((response: AxiosResponse<K[]>) => {
        response.data.forEach((user) => {
          this.models.push(this.deserialize(user))
        })

        this.events.trigger('change')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export { Collection }
