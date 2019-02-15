window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var transX = width/2,
        transY = height/2;
    context.translate(transX, transY);
    context.scale(1, -1);

    var part = particle.create(0, 0, 100, 0, 30);

    render();

    function render() {

        context.clearRect(-transX, -transY, width, height);

        context.beginPath();
        context.arc(part.position.getX(), part.position.getY(), part.radius, 0, Math.PI * 2, false);
        context.fill();

        part.update();

        requestAnimationFrame(render);
    }
};