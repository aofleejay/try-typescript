import { Analyzer } from '../Summary'
import { Match } from '../types'

class AvgGoalsAnalyzer implements Analyzer {
  constructor(private team: string) {}

  run(matches: Match[]) {
    let totalMatches = 0
    const totalGoals = matches.reduce((avg, match) => {
      if (match[1] === this.team) {
        totalMatches++
        return avg + match[3]
      } else if (match[2] === this.team) {
        totalMatches++
        return avg + match[4]
      }

      return avg
    }, 0)
    const avgGoals = totalGoals / totalMatches

    return `Average goals of team ${this.team} is ${avgGoals} per game.`
  }
}

export { AvgGoalsAnalyzer }
