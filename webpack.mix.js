const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {
  mix.version()
}

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .extract(['vue', 'axios', 'jquery', 'lodash', 'vue-router'])

mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    host: '192.168.68.71',
    open: 'external',
    browser: [],
    reloadDelay: 2000,
    injectChanges: false, // Don't try to inject, just do a page refresh
    ghostMode: true,
    notify: false,
})
