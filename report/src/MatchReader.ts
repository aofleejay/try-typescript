import { dateStringToDate } from './utils'
import { Match, MatchResult } from './types'

interface DataReader {
  data: string[][]
  read(): void
}

class MatchReader {
  private reader: DataReader
  public matches: Match[]

  constructor(reader: DataReader) {
    this.reader = reader
    this.matches = []
  }

  load() {
    this.reader.read()
    this.matches = this.reader.data.map(
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

export { MatchReader }
