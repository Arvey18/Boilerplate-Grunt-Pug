module.exports = {
	build: {
	 	options: {                                 // Target options
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
    	expand: true,
    	cwd: '<%= config.build %>',
    	src: ['{,*/}**/*.html'],
      dest: '<%= config.build %>'
    }]
	}
};