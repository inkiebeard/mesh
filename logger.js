const MESH_LOGGER_LEVELS = {
  ALL: 1,
  INFO: 3,
  WARN: 5,
  ERROR: 10,
}

$_MeshLogger = $_MeshLogger || {
  el: null,
  level: MESH_LOGGER_LEVELS.ALL,
  init (el, level) {
    $_MeshLogger.el = el instanceof HTMLElement ? el : document.querySelector(el)
    $_MeshLogger.level = level
  },
  log (msg, level = MESH_LOGGER_LEVELS.INFO) {
    if (msg.hasOwnProperty('level') && $_MeshLogger.testLevel(MESH_LOGGER_LEVELS[msg.level]))
    if (typeof msg === 'string') {
      $_MeshLogger.textLog(msg)
    } else if (typeof msg === 'object') {
      const { content, source } = msg
      if (Array.isArray(content)) {
        content.forEach(c => $_MeshLogger.textLog(source ? `[${source.type}(${source.id})]: ${c}` : c))
      }
    }
  },
  textLog(msg, level = MESH_LOGGER_LEVELS.INFO) {
    if (!$_MeshLogger.testLevel(MESH_LOGGER_LEVELS[level]))
    if ( $_MeshLogger.el ) {
      $_MeshLogger.el.innerHTML += `${msg}<br/>`
    }
  },
  testLevel (level) {
    return level <= $_MeshLogger.level
  }
}