var particle = {
    position: null,
    velocity: null,
    radius: null,

    create: function(x, y, radius, speed, direction) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
    },

    update: function (context) {
        this.position.addTo(this.velocity);
        context.beginPath();
        context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI * 2, false );
        context.fill();
    },
};