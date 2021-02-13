import { v4 as uuid } from 'uuid'

// Node
class N {
  constructor (config) {
    this.id = uuid()
    this.type = 'node'
    this.inputs = config.inputs || []
    this.outputs = config.outputs || []
    this.process = config.process || function() { return false }
    this.callback = config.callback || function({err, data}) { console.log(err, data) }
  }
  get allInputsHaveValues () {
    const empty = this.inputs.filter(i => (i.value === undefined || i.value === null) && !i.isNullable)
    return empty.length === 0
  }
  getInput(name) {
    return this.inputs.find(i => i.name === name)
  }
  setInput(name, val, process = true) {
    const ind = this.inputs.findIndex(i => i.name === name)
    this.inputs[ind].value = val
    if (process) {
      this.doProcess()
    }
  }
  getOutput(name) {
    return this.outputs.find(o => o.name === name)
  }
  setOutput(name, val) {
    const ind = this.outputs.findIndex(o => o.name === name)
    this.outputs[ind].value = val
  }
  doProcess () {
    const args = {}
    this.inputs.map(i => {
      args[i.name] = i.value
    })
    this.process(args, this.callback)
  }
  callback({err, data}) {
    if (err === null) {
      Object.keys(data).forEach(key => {
        this.setOutput(key, data[key])
      })
    } else {
      if ($_MeshLogger) {
        $_MeshLogger.log({content: [`Mesh node process error: ${err.message}`, (err.meta ? JSON.stringify(err.meta, null, 2) : '  no meta received for error')], source: this, level: 'ALL'})
      } else {
        console.error(`Mesh node process error: ${err.message}`, (err.meta ? JSON.stringify(err.meta, null, 2) : '  no meta received for error'))
      }
    }
  }
}

export default N
