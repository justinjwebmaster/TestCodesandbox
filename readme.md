# Simple Gulp Workflow with Laravel Elixir.

## Install

- `npm install`

## Features

- Copy `src/*.html` to `dist` folder.
- Copy `src/assets/*/` to `dist/*/` folder (ie :  `src/assets/images/` to `dist/images/`).
- Compile SASS `src/styles/app.scss` to `dist/styles` folder (one `app.css` uncompressed version and one `app.min.css` minified version).
- Concatenate all JS files from `src/scripts/` to `dist/scripts/app.js` folder.
- Create sources maps.
- Run a dev web server with browsersync.
- Run linter on SCSS and JS files.

## Commands

- `npm run watch` : build on files changes, launch a dev server with browsersync.
- `npm run lint` : run a linter on scss and js files.
- `npm run build` : build the project.

## Linters

### Javascript

Use "JavaScript Standard Style" : [https://standardjs.com/rules.html](https://standardjs.com/rules.html)

Only customization: require a semicolon at the end of each line.

### Stylesheet

Use "stylelint-config-standard" : [https://github.com/stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
