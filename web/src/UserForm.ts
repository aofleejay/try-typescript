import { View } from './View'
import { User, UserData } from './User'

class UserForm extends View<User, UserData> {
  eventMap() {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#save': this.onSaveClick,
    }
  }

  onSetAgeClick = () => {
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector('input')

    this.model.set({ name: input.value })
  }

  onSaveClick = () => {
    this.model.save()
  }

  template() {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button id="set-name">Change Name</button>
        <button id="set-age">Random Age</button>
        <button id="save">Save</button>
      </div>
    `
  }
}

export { UserForm }
