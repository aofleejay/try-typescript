import { CSVFileReader } from './CSVFileReader'

const reader = new CSVFileReader(__dirname + '/../football.csv')
reader.read()

console.log(reader.data)
