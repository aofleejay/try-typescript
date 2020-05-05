import fs from 'fs'
import { Report } from '../Summary'

class HTMLReport implements Report {
  print(output: string) {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Report</title>
    </head>
    <body>
      <h1>Report</h1>
      <p>${output}</p>
    </body>
    </html>
    `

    fs.writeFileSync('report.html', html)
  }
}

export { HTMLReport }
