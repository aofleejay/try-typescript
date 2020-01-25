class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }

  public say(): void {
    console.log('Meow.')
  }
}

const cat: Animal = new Animal('Nuan')
console.log(cat.getName())

class Pokemon {
  // Shorthand class property assignment
  constructor(private name: string) {}

  public getName(): string {
    return this.name
  }
}

const pikachu: Pokemon = new Pokemon('Pikachu')
console.log(pikachu.getName())
