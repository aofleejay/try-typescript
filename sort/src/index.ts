import Sorter from './sorter'
import NumbersCollection from './numbersCollection'
import CharactersCollection from './charactersCollection'

const numbersCollection = new NumbersCollection([9, 5, 7, 3, 2])
let sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('deQavCOdKEl')
sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
