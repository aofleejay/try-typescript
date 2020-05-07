import { View } from './View'
import { User, UserData } from './User'

class UserDetail extends View<User, UserData> {
  template() {
    return `
      <div>
        <h1>User Detail</h1>
        <p>Name: ${this.model.get('name')}</p>
        <p>Age: ${this.model.get('age')}</p>
      </div>
    `
  }
}

export { UserDetail }
