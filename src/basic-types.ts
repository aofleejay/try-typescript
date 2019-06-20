// String
const fullname: string = 'John Doe'
const greeting: string = `Hello ${fullname}`
const paragraph: string = `lorem ipsum
  dolor sit amet
`

// Number
const age: number = 26
const price: number = 9.99
const temperature: number = -10

// Boolean
const isMarried: boolean = false

// Array
const skills: string[] = ['JavaScript', 'TypeScript']

// Tuple
const product: [number, string, number] = [1, 'Pencil', 15.0]

// Object
const student: {
  id: number
  firstname: string
  lastname: string
  getFullname(): string
} = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  getFullname() {
    return `${this.firstname} ${this.lastname}`
  },
}
