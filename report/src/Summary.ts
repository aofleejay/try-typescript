import { Match } from './types'

interface Analyzer {
  run(matches: Match[]): string
}

interface Report {
  print(output: string): void
}

class Summary {
  constructor(private analyzer: Analyzer, private report: Report) {}

  build(matches: Match[]) {
    const output = this.analyzer.run(matches)
    this.report.print(output)
  }
}

export { Summary, Analyzer, Report }
