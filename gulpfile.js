
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

/**
 * Tarea default, ejecuta browser y min solo escribiendo gulp en consola
 */
gulp.task("default", ['browser', 'min']);

/**
 * Task de minificar
 */
gulp.task("min",()=>{
    return gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/main.min.js'));
});

/**
 * Task servidor web
 */
gulp.task("browser", ()=>{
    browserSync.init({
        server: {
            baseDir:"./"
        }
    });
});

/**
 * Minifica tras cambios
 */
gulp.watch("js/main.js").on("change", ()=>{
    return gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/main.min.js'));
});

/**
 * Actualiza navegador tras cambios
 */
gulp.watch(['index.html', 'js/main.js']).on('change', ()=>{
    browserSync.reload();
});