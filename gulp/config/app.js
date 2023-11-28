const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  imagemin: {
    progressive: true,
    scgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 3 // 0 to 7
  },

  autoprefixer: {
    grid: true,
    overrideBrowserslist: ["last 3 versions"],
    cascade: true
  },

  favicons: {
    icons: {
      favicons: [
        "favicon.ico"
      ],
      appleIcon: [
        "apple-touch-icon.png"
      ],
      android: [
        "android-chrome-512x512.png",
        "android-chrome-192x192.png",
        "android-chrome-96x96.png",
        "android-chrome-48x48.png"        
      ],
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
    path: 'assets/favicon'
  }


}