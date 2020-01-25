/* eslint-disable no-unused-vars */

function sing(lyrics: string): void {
  console.log(lyrics)
}

const add = (a: number, b: number): number => {
  return a + b
}

const options = ({ limit, sort }: { limit: number; sort: string }): void => {
  console.log(`
    Options is
    ---------------
    limit: ${limit}
    sort: ${sort}
  `)
}
