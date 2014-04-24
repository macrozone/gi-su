gulp = require 'gulp'
less = require "gulp-less"
coffee = require "gulp-coffee"
path = require "path"
watch = require 'gulp-watch'
livereload = require 'gulp-livereload'
concat = require 'gulp-continuous-concat'
uglify = require 'gulp-uglify'
gulpif = require 'gulp-if'

lessGlob = "./less/**/*.less"
build = "../build"
gulp.task "less", ->
	gulp.src lessGlob
	.pipe watch()
	.pipe gulpif /[.]less$/, less()
	.pipe concat "style.css"
	.pipe gulp.dest build
	.pipe livereload()

gulp.task "scripts", ->
	gulp.src './scripts/**'
	.pipe watch()
	.pipe gulpif /[.]coffee$/, coffee()
	.pipe concat "scripts.js"
	.pipe uglify()
	.pipe gulp.dest build
	.pipe livereload()



gulp.task 'default', ->
	gulp.run 'scripts'
	gulp.run 'less'