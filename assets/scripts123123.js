
    // _map = {}, _tiles = [];
    // for (var i = 0; i < 6; i++) {
    //   for (var j = 0; j < 6; j++) {
    //     new Tile((Math.random() * colors + 1 | 0)).insert(i, j);
    //   }
    // }
 












Stage(function(stage) {

  stage.viewbox(150, 150);

 var width = 8, height = 8;

   var ui = {};

  ui.board = Stage.create().appendTo(stage).pin({
    width : width * 2,
    height : height * 2,
    align : 0.5
  });

  var prev_sx;
  var last = null;
  var colors = [ 'green', 'blue', 'purple', 'red', 'orange', 'yellow' ];

  function shuffle ()
  {
  	var rand = Math.floor(Math.random()*colors.length);
  	return rand;

  }
  shuffle();

var j = 0, i = 0;
var column = Stage.column().appendTo(stage).pin('align', 0.5).spacing(1);
  for (j = 0; j < colors.length; j++) {
  var row = Stage.row().appendTo(column).spacing(5);
    for (var i = 0; i < colors.length; i++) {
    var cell = Stage.image(colors[shuffle()]).appendTo(row).on('click', function(point) {
    // ...tween scale values of this node
    
 console.log('rm');
    this.tween(200).ease('quad-out').clear().pin({
      alpha : 0
    }).then(function() {
      this.remove();
    });
  });
  
  }
}
});

