import { View } from './View'
import { User, UserData } from './User'

class UserForm extends View<User, UserData> {
  eventMap() {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
    }
  }

  onSetAgeClick = () => {
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector('input')

    this.model.set({ name: input.value })
  }

  template() {
    return `
      <div>
        <h1>User Form</h1>
        <p>Name: ${this.model.get('name')}</p>
        <p>Age: ${this.model.get('age')}</p>
        <input />
        <button id="set-name">Change Name</button>
        <button id="set-age">Random Age</button>
      </div>
    `
  }
}

export { UserForm }
