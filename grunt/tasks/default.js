module.exports = function(grunt) {
  grunt.registerTask('default', ['pug', 'copy:dev', 'sass:dev', 'uglify:dev', 'autoprefixer:dev', 'browserSync', 'watch']);
};