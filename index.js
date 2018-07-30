const Misty = require('@supersoccer/misty')
const { basepath } = Misty.Path

class Template {
  load (template) {
    template = `${template.replace(/\.marko$/, '')}.marko`
    return require(basepath.containers(template))
  }
}

module.exports = new Template()