import { CSVFileReader } from './CSVFileReader'
import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { AvgGoalsAnalyzer } from './analyzers/AvgGoalsAnalyzer'
// import { WinsAnalyzer } from './analyzers/WinsAnalyzer'
// import { HTMLReport } from './reportTargets/HTMLReport'

const csvReader = new CSVFileReader(__dirname + '/../football.csv')
const matchReader = new MatchReader(csvReader)
matchReader.load()

// const winsAnalyzer = new WinsAnalyzer('Chelsea')
// const htmlReport = new HTMLReport()
const avgGoalsAnalyzer = new AvgGoalsAnalyzer('Chelsea')
const consoleReport = new ConsoleReport()

const summary = new Summary(avgGoalsAnalyzer, consoleReport)

summary.build(matchReader.matches)
