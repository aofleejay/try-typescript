import { View } from './View'
import { User, UserData } from './User'
import { UserDetail } from './UserDetail'
import { UserForm } from './UserForm'

class UserPage extends View<User, UserData> {
  regionsMap(): { [key: string]: string } {
    return {
      userDetail: '.user-detail',
      userForm: '.user-form',
    }
  }

  onRender() {
    new UserDetail(this.regions.userDetail, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }

  template() {
    return `
      <div>
        <div class="user-detail"></div>
        <div class="user-form"></div>
      </div>
    `
  }
}

export { UserPage }
