const packages = {
  'core': {
    entry: ['./packages/core/theme/index.css', './packages/core/index.ts']
  },
  'bootstrap': {
    entry: ['./packages/bootstrap/index.ts']
  }
}

module.exports = {
  packages,
  packageNames: Object.keys(packages)
}