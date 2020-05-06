import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}

class Sync<T extends HasId> {
  constructor(private baseUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    try {
      return axios.get(`${this.baseUrl}/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data

    try {
      if (id) {
        return axios.put(`${this.baseUrl}/${id}`, data)
      } else {
        return axios.post(`${this.baseUrl}`, data)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export { Sync }
