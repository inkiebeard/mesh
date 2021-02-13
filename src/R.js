import { v4 as uuid } from 'uuid'

// Reference
class R {
  constructor (config) {
    this.id = uuid();
    this.type = 'reference'
    // todo work out mapping
  }

  // todo update reference node/input/output based on type
}

export default R