import { Model } from './Model'
import { Events } from './Events'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

interface UserData {
  id?: number
  name?: string
  age?: number
}

const baseUrl = 'http://localhost:3000/users'

class User extends Model<UserData> {
  static buildUser(data: UserData) {
    return new Model(
      new Attributes<UserData>(data),
      new Events(),
      new Sync<UserData>(baseUrl),
    )
  }
}

export { User }
