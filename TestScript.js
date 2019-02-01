window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var transX = width/2,
        transY = height/2;
    context.translate(transX, transY);
    context.scale(1, -1);

    for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
        var x = (angle * 200) - transX,
            y = Math.sin(angle) * 200;

        context.fillRect(x, y, 5, 5);
    }
};