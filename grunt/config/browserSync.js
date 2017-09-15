//grunt-browsersync settings

module.exports = {
  options: {
    notify: false,
    background: true,
    watchOptions: {
      ignored: ''
    }
  },
  livereload: {
    options: {
      files: [
        '<%= config.tmp %>/**/*.html',
        '<%= config.tmp %>/css/**/*.css',
        '<%= config.tmp %>/js/**/*.js',
      ],
      port: 8080,
      server: {
        baseDir: ['<%= config.tmp %>','<%= config.app %>'],
        routes: {
          '/images': './app/public/images',
          '/fonts': './app/public/fonts',
          '/bootstrap': './app/public/bootstrap',
          '/jquery': './app/public/jquery',
          '/data': './app/public/data'
        }
      }
    }
  }
};
