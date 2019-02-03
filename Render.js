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



        requestAnimationFrame(render);
    }
};