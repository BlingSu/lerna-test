module.exports = options => {
  options.cache(true)

  const presets = [
    [
      '@babel/preset-env'
    ]
  ]

  if (!process.env['LOCAL_DEBUG']) {
    presets.push([
      'minify'
    ])
  }

  const plugins = []

  return {
    presets,
    plugins,
    ignore: ['node_modules']
  }
}
