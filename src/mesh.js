import N from './N'
import G from './G'
import L from './L'
import R from './R'
import logger from "./logger";

class Mesh {
    constructor(config) {
        this.nodes = config.nodes || []
        this.links = config.links || []
        this.groups = config.groups || []
        this.refs = config.refs || []
        this.logger = logger
    }
    addNode (config) {
        this.nodes.push(new N(config))
    }
    addLink (config) {
        this.links.push(new L(config))
    }
    addGroup (config) {
        this.groups.push(new G(config))
    }
    addReference (config) {
        this.refs.push(new R(config))
    }
}

export default Mesh