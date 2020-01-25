import Sorter from './sorter'

const numbers = [9, 5, 7, 3, 2, 1, 6, 5, 4, 8, 6]
const sorter = new Sorter(numbers)
sorter.sort()
console.log(sorter.data)
