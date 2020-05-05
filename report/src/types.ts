enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

type Match = [Date, string, string, number, number, MatchResult, string]

export { MatchResult, Match }
