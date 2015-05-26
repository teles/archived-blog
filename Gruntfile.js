module.exports = function(grunt) {
  'use strict';
 
  // configuração do projeto
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    
    // Webfont task 
    // Generates scss file and font files from glyphs
    webfont: {
      icons: {
        src: 'fonts/raicons/glifos/*.svg',
        dest: 'fonts',
        destCss : '_sass/helpers',
        options: {
          engine: 'node',
          font: 'raicons',
          hashes: false,
          htmlDemo: false,
          ligature: false,
          stylesheet: 'scss',
          template: 'fonts/raicons/templates/raicons-template.css',
          templateOptions: {
            classPrefix: 'raicon-',
            baseClass: 'raicon'
          }
        }
      }
    }//,

    // watch: {
    //   // sass: {
    //   //   files: 'scss/*.scss',
    //   //   tasks: ['clean:css','sass']
    //   // },
    //   fonts: {
    //     files: ['fonts/raicons/glifos/*.svg'],
    //     tasks: ['clean:fonts','webfont']
    //   }      
    // }    

  };
 
  grunt.initConfig(gruntConfig);
 
  // carregando plugins
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  // grunt.loadNpmTasks('grunt-contrib-sass');
 
  // tarefas
  grunt.registerTask('default', ['webfont']);
  grunt.registerTask('start', ['clean','webfont', 'sass']);
};