module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            options: {

            },
            target: {
                files: {
                    'build/grunt/src.css': 'src.css'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
};