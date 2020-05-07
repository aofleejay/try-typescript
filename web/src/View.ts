import { Callback } from './types'
import { Model } from './Model'

abstract class View<T extends Model<K>, K> {
  constructor(protected parent: Element, protected model: T) {
    this.bindModel()
  }

  abstract eventMap(): { [key: string]: Callback }
  abstract template(): string

  bindModel() {
    this.model.on('change', () => {
      this.render()
    })
  }

  bindEvents = (fragment: DocumentFragment) => {
    const eventMap = this.eventMap()

    for (const eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventMap[eventKey])
      })
    }
  }

  render() {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.appendChild(templateElement.content)
  }
}

export { View }
