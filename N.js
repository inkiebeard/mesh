class MshNode {
  constructor (opts) {
    this.inputs = opts.inputs
    this.outputs = opts.outputs
    this.process = opts.process
  }
  get input(name) {
    return this.inputs.find(i => i.name === name)
  }
  set input(name, val, process = true) {
    const ind = this.inputs.findIndex(i => i.name === name)
    this.inputs[ind].value = val
    If (process) {
      this.doProcess()
    }
  }
  get output(name) {
    return this.outputs.find(o => o.name === name)
  }
  set output(name, val) {
    const ind = this.outputs.findIndex(o => o.name === name)
    this.outputs[ind].value = val
  }
  doProcess () {
    const arguments = {}
    this.inputs.map(i => {
      arguments[i.name] = i.value
    }
    this.process(arguments, this.callback)
  }
  callback(result) {
     Object.keys(result).forEach(key => {
       this.output(key, result[key]
     }
  }
}
