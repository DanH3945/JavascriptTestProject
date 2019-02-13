window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var transX = width/2,
        transY = height/2;
    context.translate(transX, transY);
    context.scale(1, -1);

    render();

    function render() {

        context.clearRect(-transX, -transY, width, height);

        var part = particle.create(0, 0, 100, 5, 30);
        part.update(context); // Why does this function call cause the entire process to fail to draw?

        context.beginPath();
        context.arc(0, 0, 100, 0, Math.PI * 2, false);
        context.fill();


        requestAnimationFrame(render);
    }
};