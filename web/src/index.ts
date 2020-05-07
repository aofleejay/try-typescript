import { User } from './User'

const user = User.buildUser({ name: 'James', age: 20 })

user.save()
setTimeout(() => {
  console.log(user)
}, 5000)
