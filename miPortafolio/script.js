/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('zuri sarahy sanchez rojas')
    .pauseFor(1500)
    .deleteAll()
    .typeString('fan de lana desde los 13')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante de programacion y robotica</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de lana del rey')
    .pauseFor(1500)
    
    .start();