import uuid from './libs/uuid'

// Link
class L {
  constructor (config) {
    this.id = uuid
    this.type = 'link'
    this._source = config.source || null
    this._target = config.target || null
  }

  set source(ref) {
    this._source = ref
    if (this.fullConnection) {
      // todo send the value to the target
    }
  }

  get source() {
    return this._source
  }

  set target(ref) {
    this._target = ref
    if (this.fullConnection) {
      // todo get value from source
    }
  }

  get target() {
    return this._target
  }

  get fullConnection() {
    return this._source !== null && this._target !== null
  }
}