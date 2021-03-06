import { Model } from './Model'
import { Collection } from './Collection'
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
    return new User(
      new Attributes<UserData>(data),
      new Events(),
      new Sync<UserData>(baseUrl),
    )
  }

  static buildUserCollection() {
    return new Collection<User, UserData>(baseUrl, (json: UserData) =>
      User.buildUser(json),
    )
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}

export { User, UserData }
