import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

interface UserData {
  id?: number
  name?: string
  age?: number
}

class User {
  public events = new Eventing()
  public sync = new Sync<UserData>('http://localhost:3000/users')
  public attributes: Attributes<UserData>

  constructor(data: UserData = {}) {
    this.attributes = new Attributes<UserData>(data)
  }
}

export { User }
