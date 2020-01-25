import User from './user'
import Company from './company'
import Map from './map'

const user = new User()
const company = new Company()

const map = new Map()
map.addMarker(user)
map.addMarker(company)
