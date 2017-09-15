//grunt-config-copy settings

module.exports = {
  dev: {
  	files: [
  		//bootstrap
  		{
  			expand: true,
        cwd: '<%= config.bower %>/bootstrap/dist',
        src: ['{,*/}**/*.*'],
        dest: '<%= config.public %>/bootstrap'
  		},
  		//jquery
  		{
  			expand: true,
  			cwd: '<%= config.bower %>/jquery/dist/',
        src: ['jquery.min.js'],
        dest: '<%= config.public %>/jquery'
  		}
  	]
  },
  build: {
    files: [
      //public files
      {
        expand: true,
        cwd: '<%= config.public %>/',
        src: ['{,*/}**/*.*', '!data/*.json'],
        dest: '<%= config.build %>/public/'
      },
      //html files
      {
        expand: true,
        cwd: '<%= config.tmp %>/',
        src: ['{,*/}**/*.html'],
        dest: '<%= config.build %>/'
      }
    ]
  }
}