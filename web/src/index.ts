import { UserForm } from './UserForm'
import { User } from './User'

const user = User.buildUser({ name: 'June', age: 23 })
const root = document.querySelector('#root')
const userForm = new UserForm(root, user)
userForm.render()
