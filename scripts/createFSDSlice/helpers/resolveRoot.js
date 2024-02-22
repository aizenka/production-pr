const path = require('path')

module.exports = (...segments) => {
  return path.resolve(__dirname, '..', '..', '..', ...segments)
}