module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      target: ['Gruntfile.js', 'server.js']
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });


  grunt.registerTask('default', ['startServer']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('startServer', 'Log some stuff.', function () {
    grunt.log.write('Starting server ...').ok();
    grunt.task.run('nodemon');
  });



};