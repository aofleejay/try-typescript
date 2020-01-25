class numbersCollection {
  data: number[]

  constructor(numbers: number[]) {
    this.data = numbers
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = temp
  }
}

export default numbersCollection
