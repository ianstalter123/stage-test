var V = function(x, y) {
  return new SAT.Vector(x, y);
};

Stage(function(stage) {

  stage.viewbox(640, 640).pin('handle', -0.5);

  var world = new SAT.World({
    loopCount : 5
  });
  for (var i = -4; i < 5; i++) {
    for (var j = -4; j < 5; j++) {
      world.addBody(new SAT.Body(new SAT.Circle(
          V((40 * i) + 20, (40 * j) + 20), 18), {
        solid : true
      }));
    }
  }

  new Stage.SAT(world).appendTo(stage);
});