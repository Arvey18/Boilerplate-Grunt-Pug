// grunt-config-watch settings

module.exports = {
  watchDevPug: {
    files: ['<%= config.views %>/**/*.pug', '<%= config.data %>/**/*.json'],
    tasks: ['pug:*']
  },
  watchDevSass: {
  	files: ['<%= config.styles %>/**/*.scss'],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  watchDevJs:{
  	files: ['<%= config.js %>/**/*.js'],
    tasks: ['uglify:dev']
  }
};