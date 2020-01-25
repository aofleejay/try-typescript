import * as faker from 'faker'
import { Mappable } from './map'

class Company implements Mappable {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  getContent() {
    return 'Company name: ' + this.name
  }
}

export default Company
