module.exports = function(grunt) {
  grunt.registerTask('serve', ['pug', 'copy:dev', 'sass:dev', 'uglify:dev', 'autoprefixer:dev', 'browserSync', 'watch']);
};