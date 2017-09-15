// Gruntfile.js

module.exports = function(grunt) {
  var path = require('path'),
      config = {
        data: 'app/public/data',
        app: 'app',
        tmp: '.tmp',
        build: 'build',
        public: 'app/public',
        views: 'app/views',
        styles: 'app/styles',
        bower: 'bower_components',
        js: 'app/js'
      };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },
    data: {
      config: config // accessible with '<%= config.{type} %>'
    }
  });
};