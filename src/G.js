import { v4 as uuid } from 'uuid'

// Group
class G {
  constructor (config) {
    this.id = uuid();
    this.type = 'group'
    this.nodes = config.nodes || []
    this.links = config.links || []
    this.inputs = config.inputs || []
    this.outputs = config.outputs || []
  }

  addNode (node) {
    this.nodes.push(node)
  }

  addLink (link) {
    this.links.push(link)
  }
  setInput(name, val, process = true) {
    const ind = this.inputs.findIndex(i => i.name === name)
    this.inputs[ind].value = val
    if (process) {
      this.doProcess()
    }
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
}

export default G