import { Callback } from './types'
import { Model } from './Model'

abstract class View<T extends Model<K>, K> {
  protected regions: { [key: string]: Element } = {}

  constructor(protected parent: Element, protected model: T) {
    this.bindModel()
  }

  abstract template(): string

  eventMap(): { [key: string]: Callback } {
    return {}
  }

  regionsMap(): { [key: string]: string } {
    return {}
  }

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

  mapRegions = (fragment: DocumentFragment) => {
    const regionsMap = this.regionsMap()

    for (const key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)

      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender() {}

  render() {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.onRender()

    this.parent.appendChild(templateElement.content)
  }
}

export { View }
