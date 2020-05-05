import { Report } from '../Summary'

class ConsoleReport implements Report {
  print(output: string) {
    console.log(output)
  }
}

export { ConsoleReport }
