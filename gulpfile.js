const gulp   = require('gulp');
const elixir = require('laravel-elixir');

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src/';
elixir.config.css.autoprefix.options.browsers = ['last 2 versions'];

elixir((mix) => {
  mix
    .copy('src/**/*.html', 'dist/')
    .copy('src/assets/', 'dist/')

    .scriptsIn('src/js/', 'dist/js/app.js')

    .sass('app.scss', 'dist/css/app.css', 'src/sass', { outputStyle: 'expanded' })
    .sass('app.scss', 'dist/css/app.min.css', 'src/sass', { outputStyle: 'compressed' })

    .browserSync({
      proxy: false,
      server: 'dist',
      files: [
        'dist/**/*'
      ]
    });
});
