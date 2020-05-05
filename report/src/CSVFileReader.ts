import fs from 'fs'
import { dateStringToDate } from './utils'

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

type Match = [Date, string, string, number, number, MatchResult, string]

class CSVFileReader {
  private fileName: string
  public data: Match[]

  constructor(fileName: string) {
    this.fileName = fileName
    this.data = []
  }

  read() {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((line) => line.split(','))
      .map(
        (match): Match => {
          return [
            dateStringToDate(match[0]),
            match[1],
            match[2],
            parseInt(match[3]),
            parseInt(match[4]),
            match[5] as MatchResult,
            match[6],
          ]
        },
      )
  }
}

export { CSVFileReader }
