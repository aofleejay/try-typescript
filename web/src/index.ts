import { UserPage } from './UserPage'
import { User } from './User'

const user = User.buildUser({ name: 'June', age: 23 })
const root = document.querySelector('#root')
const userPage = new UserPage(root, user)
userPage.render()
console.log(userPage)
