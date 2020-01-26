import fs from 'fs'
import { dateStringToDate } from './utils'

const matches = fs
  .readFileSync(__dirname + '/../football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map(line => line.split(','))
  .map(match => {
    return [
      dateStringToDate(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5],
      match[6],
    ]
  })

console.log(matches)
