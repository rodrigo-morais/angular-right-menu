module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                strict: false,
                node: true,
                esnext: true,
                globals: {
                    angular: true,
                    window: true
                }
            },
            all: ['component/**/*.js', 'tests/unit/**/*.js']
        },
        'babel': {
            options: {
                sourceMap: false,
                modules: 'ignore'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['**/*.js'],
                    dest: 'dist',
                    ext: '.js'
                }]
            }
        },
        ngtemplates:  {
            options: {
                module: 'rmRightMenu'
            },
            app:  {
                src:      'component/templates/**.html',
                dest:     'component/templates/templates.js'
            }
        },
        concat: {
            component: {
                src: [  'component/angular-right-menu.js',
                        '<%= ngtemplates.app.dest %>',
                        'component/*.js',
                        'component/providers/*.js',
                        'component/controllers/*.js',
                        'component/directives/*.js'
                    ],
                dest: 'dist/angular-right-menu.js',
            }
        },
        uglify: {
          my_target: {
            options: {
              mangle: true,
              compress: true
            },
            files: {
                'dist/angular-right-menu.min.js': ['dist/angular-right-menu.js']
            }
          }
        },
        copy: {
          main: {
            cwd: './',
            src: 'component/templates/[name].html',
            dest: 'dist/templates/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          css: {
            cwd: './',
            src: 'component/assets/*',
            dest: 'dist/assets/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          fontawesomeFonts: {
            cwd: './',
            src: 'vendor/fontawesome/fonts/*',
            dest: 'dist/fonts/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          fontawesomeCss: {
            cwd: './',
            src: 'vendor/fontawesome/css/*',
            dest: 'dist/assets/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          },
          dummy: {
            cwd: './dist/',
            src: '**',
            dest: 'tests/dummy/vendor-test/angular-right-menu/dist',
            expand: true
          }
        },
        karma: {
          unit: {
            configFile: 'tests/karma.config.js',
            background: true,
            port: 9999,
            runnerPort: 9999
          }
        },
        watch: {
            files: [
                'component/angular-right-menu.js',
                'component/controllers/**/*.js',
                'component/directives/**/*.js',
                'component/providers/**/*.js',
                'component/**/*.html',
                'component/assets/**/*.css',
                'tests/unit/**/*.js'
            ],
            tasks: [
                'jshint',
                'ngtemplates',
                'concat:component',
                'babel',
                'karma:unit:run',
                'uglify',
                'copy:main',
                'copy:css',
                'copy:fontawesomeFonts',
                'copy:fontawesomeCss',
                'copy:dummy'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default', 'watch');
    grunt.registerTask('all', ['concat']);
    grunt.registerTask('ci',
        [
            'jshint',
            'ngtemplates',
            'concat:component',
            'babel',
            'uglify',
            'copy:main',
            'copy:css',
            'copy:fontawesomeFonts',
            'copy:fontawesomeCss',
            'copy:dummy'
        ]
    );
};