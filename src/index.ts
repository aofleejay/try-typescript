const hello: string = 'world'

const age: number = 20

const fruits: string[] = ['apple', 'orange', 'pineapple']

const student: { name: string; age: number } = {
  name: 'John',
  age: 13,
}

class Book {}
const book: Book = new Book()

const add = (a: number, b: number): number => {
  return a + b
}

const options = ({
  limit = 20,
  sort = 'desc',
}: {
  limit: number
  sort: string
}): void => {}
