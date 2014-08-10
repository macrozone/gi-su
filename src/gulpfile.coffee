gulp = require 'gulp'
less = require "gulp-less"
coffee = require "gulp-coffee"
path = require "path"
watch = require 'gulp-watch'
livereload = require 'gulp-livereload'
concat = require 'gulp-continuous-concat'
uglify = require 'gulp-uglify'
gulpif = require 'gulp-if'

gutil = require 'gulp-util'
lessGlob = "./less/**/*.less"
build = "../build"

onError = (error) ->
	gutil.beep()
	console.log error


gulp.task "styles", ->
	gulp.src "less/style.less"
	.pipe less().on "error", onError
	.pipe gulp.dest build
	.on "error", onError


gulp.task "scripts", ->
	gulp.src './scripts/**'
	.pipe watch()
	.pipe gulpif /[.]coffee$/, coffee().on "error", onError
	.pipe concat "scripts.js"
	#.pipe uglify()
	.pipe gulp.dest build
	.pipe livereload()
	.on "error", onError


gulp.task 'default', ->
	gulp.run 'scripts'
	gulp.run 'styles'
	server = livereload()
	gulp.watch "less/**/*.less", ->
		gulp.run "styles"

	gulp.watch(build+"/*.*").on "change", (file) ->
		server.changed file.path