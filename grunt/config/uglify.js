//grunt-contrib-uglify settings

module.exports = {
	dev: {
		options: {
			sourceMap: true,
			beautify: true,
			mangle: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= config.app %>/js/',
			src: ['**/*.js'],
			dest: '<%= config.tmp %>/js',
			ext: '.min.js'
		}]
	},
	build: {
		options: {
			sourceMap: false,
			beautify: false,
			mangle: true,
			compress: true
		},
		files: [{
			expand: true,
			cwd: '<%= config.app %>/js/',
			src: ['**/*.js'],
			dest: '<%= config.build %>/js',
			ext: '.min.js'
		}]
	}
}