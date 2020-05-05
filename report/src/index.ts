import { CSVFileReader } from './CSVFileReader'
import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { WinsAnalyzer } from './analyzers/WinsAnalyzer'
import { ConsoleReport } from './reportTargets/ConsoleReport'

const csvReader = new CSVFileReader(__dirname + '/../football.csv')
const matchReader = new MatchReader(csvReader)
matchReader.load()

const winsAnalyzer = new WinsAnalyzer('Chelsea')
const consoleReport = new ConsoleReport()
const summary = new Summary(winsAnalyzer, consoleReport)

summary.build(matchReader.matches)
