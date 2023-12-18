const buildFolder = `./docs`; 
const srcFolder = `./src`;

module.exports = {
  buildFolder: buildFolder,
  srcFolder: srcFolder,

  styles: {
    src: `${srcFolder}/styles/main.scss`,
    build: `${buildFolder}/assets/css/`,
    watch: [`${srcFolder}/**/*.scss`, `!${srcFolder}/assets/lib/**/*.scss`]
  },
  
  html: {
    src: `${srcFolder}/pages/**/*.html`,
    build: `${buildFolder}/`,
    watch: `${srcFolder}/**/*.html`
  },

  scripts: {
    src: `${srcFolder}/js/scripts.js`,
    build: `${buildFolder}/assets/js/`,
    watch: [`${srcFolder}/**/*.js`, `!${srcFolder}/assets/lib/**/*.js`]
  },

  imgOptimize: {
    src: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
    build: `${buildFolder}/assets/img/`,
    watch: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`
  },

  icons: {
    src: `${srcFolder}/assets/icons/*.{png,svg}`,
    build: `${buildFolder}/assets/img/icons/`,
    watch: `${srcFolder}/assets/icons/*.{png,svg}`
  },

  spriteSvg: {
    src: `${srcFolder}/assets/sprite/*.svg`,
    build: `${buildFolder}/assets/img/svg-sprite/`,
    watch: `${srcFolder}/assets/sprite/*.svg`
  },

  fonts: {
    src: `${srcFolder}/assets/fonts/**/*.{eot,ttf,otf,woff,woff2}`,
    build: `${buildFolder}/assets/fonts/`,
    watch: `${srcFolder}/assets/fonts/*.{eot,ttf,otf,woff,woff2}`
  },

  libJs: {
    src: `${srcFolder}/assets/lib/**/*.js`,
    build: `${buildFolder}/assets/lib/`,
    watch: `${srcFolder}/assets/lib/**/*.js`
  },

  libScss: {
    src: `${srcFolder}/assets/lib/**/*.scss`,
    build: `${buildFolder}/assets/lib/`,
    watch: `${srcFolder}/assets/lib/**/*.scss`
  },

  favicon: {
    src: `${srcFolder}/assets/favicon/favicon.ico`,
    build: `${buildFolder}/`,
    watch: `${srcFolder}/assets/favicon/favicon.ico`
  }
}