let runtimeOptions = {
  polyfill: false,
  useBuiltIns: true,
  useESModules: true,
};

let envOptions = {
  modules: false,
  shippedProposals: true,
  targets: {
    node: '6.0',
  },
};

const config = {
  plugins: [
    ['@babel/transform-runtime', runtimeOptions],
  ],
  presets: [
    ['@babel/env', envOptions],
  ],
}

module.exports = config
