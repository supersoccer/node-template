const path = require('@supersoccer/path')

class Template {
  load (template) {
    template = `${template.replace(/\.marko$/, '')}.marko`
    return require(path.basepath.containers(template))
  }
}

module.exports = new Template()
