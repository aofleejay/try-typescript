class Sorter {
  public data: number[]

  constructor(data: number[]) {
    this.data = data
  }

  sort(): void {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length - i - 1; j++) {
        if (this.data[j] > this.data[j + 1]) {
          const temp = this.data[j + 1]
          this.data[j + 1] = this.data[j]
          this.data[j] = temp
        }
      }
    }
  }
}

export default Sorter
