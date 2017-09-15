// grunt-config-sass settings

module.exports = {
  dev: {
	  options:{
	    style: 'expanded',
	    sourcemap: 'auto',
	    noCache: true
	  },
	  files: [{
	    expand: true,
	    cwd: '<%= config.app %>/styles',
	    src: ['*.{scss,sass}'],
	    dest: '<%= config.tmp %>/css',
	    ext: '.min.css'
	  }]
	},
	build: {
		options:{
	    style: 'compressed',
	    sourcemap: 'none',
	    noCache: true
	  },
	  files: [{
	    expand: true,
	    cwd: '<%= config.app %>/styles',
	    src: ['*.{scss,sass}'],
	    dest: '<%= config.build %>/css',
	    ext: '.min.css'
	  }]
	}
};