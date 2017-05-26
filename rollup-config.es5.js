import angularInline from 'rollup-plugin-angular-inline'

export default {
  entry: 'build/angular-component-library.js',
  dest: 'dist/angular-component-library.es5.js',
  format: 'es',
  globals: {
    '@angular/core': 'ng.core'
  },
  external: ['@angular/core'],
  plugins: [
    angularInline({ include: './build/components/**/*.js' })
  ]
}
