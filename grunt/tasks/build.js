module.exports = function(grunt) {
  grunt.registerTask('build', ['copy:dev','sass:build','autoprefixer:build','pug','uglify:build','copy:build', 'htmlmin:build']);
};