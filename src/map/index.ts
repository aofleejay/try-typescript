import User from './user'
import Company from './company'

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: { lat: 0, lng: 0 },
})
