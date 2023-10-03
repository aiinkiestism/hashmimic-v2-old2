import { PluginBuilder, plugin } from 'bun'

plugin({
  name: 'extentions',
  async setup(build: PluginBuilder) {
    const { load } = await import('esm-loader-css')
    const { readFileSync } = await import('fs')

    build.onLoad({ filter: /\.css$/ }, (args) => {
      const text = readFileSync(args.path, 'utf8')
      const exports = load(text) as Record<string, any>

      return {
        exports,
        loader: 'object'
      }
    })
  }
});