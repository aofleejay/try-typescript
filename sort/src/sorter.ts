interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

class Sorter {
  public collection: Sortable

  constructor(collection: Sortable) {
    this.collection = collection
  }

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}

export default Sorter
