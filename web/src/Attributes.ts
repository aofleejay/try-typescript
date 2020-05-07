class Attributes<T> {
  constructor(private attributes: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.attributes[key]
  }

  getAll = (): T => {
    return this.attributes
  }

  set = (values: T) => {
    Object.assign(this.attributes, values)
  }
}

export { Attributes }
