//grunt-config-pug settings

module.exports = function(grunt){
  var devMode = true,
      pugs = {},
      globalData = grunt.file.readJSON('./app/public/data/globalData.json'),
      pages = grunt.file.readJSON('./app/public/data/pages.json'),
      aboutPageData = grunt.file.readJSON('./app/public/data/about.json');

  //Home/Index page
  pugs['home'] = {
    options: {
      data: {
        globalData: globalData,
        headerTagsData: pages[0],
        debug: false
      },
      pretty: devMode
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.views %>',
        src: ['index.pug'],
        dest: '<%= config.tmp %>',
        ext: '.html',
      }
    ]
  };

  //404 page
  pugs['404'] = {
    options: {
      data: {
        globalData: globalData,
        headerTagsData: pages[1],
        debug: false
      },
      pretty: devMode
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.views %>',
        src: ['404.pug'],
        dest: '<%= config.tmp %>',
        ext: '.html',
      }
    ]
  };

  //About page
  pugs['about'] = {
    options: {
      data: {
        globalData: globalData,
        headerTagsData: pages[2],
        items: aboutPageData,
      },
      pretty: devMode
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.views %>/pages',
        src: ['about/index.pug'],
        dest: '<%= config.tmp %>',
        ext: '.html',
      }
    ]
  };

  return pugs;

};