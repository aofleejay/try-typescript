import { CSVFileReader } from './CSVFileReader'
import { MatchReader } from './MatchReader'

const csvReader = new CSVFileReader(__dirname + '/../football.csv')
const matchReader = new MatchReader(csvReader)
matchReader.load()

console.log(matchReader.matches)
