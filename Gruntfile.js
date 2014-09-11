//Setup namespace
var scotch = {};

scotch.build = {};


scotch.build.exports = function (grunt) {
    grunt.initConfig({
        jsdoc : {
            dist : {
                src: ["src/*.js", "test/*.js"], 
                options: {
                    destination: "documentation",
                    template: "Amelia"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc");

    grunt.registerTask("docs", "jsdoc");
};

module.exports = scotch.build.exports;