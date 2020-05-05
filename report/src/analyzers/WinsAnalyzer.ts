import { Analyzer } from '../Summary'
import { Match, MatchResult } from '../types'

class WinsAnalyzer implements Analyzer {
  constructor(private team: string) {}

  run(matches: Match[]): string {
    let wins = 0

    matches.map((match: Match) => {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++
      }
    })

    return `Team ${this.team} won ${wins} time(s).`
  }
}

export { WinsAnalyzer }
