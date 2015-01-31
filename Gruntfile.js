module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/style.css' : 'assets/stylesheets/style.scss'
				}
			}
		},
        coffee: {
			dist: {
				files: {
					'assets/js/main.js' : 'assets/js/*.coffee'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
            js: {
				files: '**/*.coffee',
				tasks: ['coffee']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}    