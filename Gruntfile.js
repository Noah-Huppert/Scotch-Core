//Setup namespace
var scotch = {};

scotch.build = {};


scotch.build.exports = function (grunt) {
    grunt.initConfig({
        jsdoc : {
            dist : {
                src: ["*.js"], 
                options: {
                    destination: "documentation",
                    theme: "amelia"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc");

    grunt.registerTask("genDocs", "jsdoc");
};

module.exports = scotch.build.exports;