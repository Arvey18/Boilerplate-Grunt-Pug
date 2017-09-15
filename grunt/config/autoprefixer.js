// grunt-config-autoprefixer settings

module.exports = {
  options: {
    browsers: ['last 5 versions', 'ie 8', 'ie 9']
  },
  dev: {
    files:{
      '<%= config.tmp %>/css/app.min.css': '<%= config.tmp %>/css/app.min.css'
    }
  },
  build: {
    files:{
      '<%= config.build %>/css/app.min.css': '<%= config.build %>/css/app.min.css'
    }
  }
};
