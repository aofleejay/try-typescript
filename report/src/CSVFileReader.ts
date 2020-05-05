import fs from 'fs'

class CSVFileReader {
  private fileName: string
  public data: string[][]

  constructor(fileName: string) {
    this.fileName = fileName
    this.data = []
  }

  read() {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((line) => line.split(','))
  }
}

export { CSVFileReader }
