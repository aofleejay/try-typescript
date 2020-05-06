import { User } from './User'

const user = new User({ id: 1, name: 'John', age: 20 })

const id = user.attributes.get('id')
console.log(id)
