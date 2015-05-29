function Game(width, height) {
  var _map = {}, _tiles = [];

  this.start = function(colors) {
    colors = colors || 4;
    while (_tiles.length) {
      _tiles[0].remove();
    }
    _map = {}, _tiles = [];
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        new Tile((Math.random() * colors + 1 | 0)).insert(i, j);
      }
    }
  };

    this.click = function(tile) {
   console.log(tile);
   remove(tile);
  };

 function remove(tile) {
    // var matched = [];
    // tile.match(matched);
    // if (matched.length <= 1) {
    //   return false;
    // }
    // for (var i = 0; i < matched.length; i++) {
    //   matched[i].remove();
    // }
    // return true;
    // tile.remove()
  }

   function setTile(i, j, tile) {
    if (_map[i + ':' + j]) {
      throw 'Location unavailable: ' + i + ':' + j;
    }
    _map[i + ':' + j] = tile;
  }

  function Tile(color) {
    this.color = color;
  }

  function getTile(i, j) {
    return _map[i + ':' + j];
  }

  Tile.prototype.insert = function(i, j) {
    setTile(i, j, this);
    this.i = i;
    this.j = j;
    _tiles.push(this);
    this.uiInsert();
  };

  this.Tile = Tile;
  }



// Stage(function(stage) {

//   stage.viewbox(400, 100);

//   var prev_sx;
//   var last = null;
//   var colors = [ 'green', 'blue', 'purple', 'red', 'orange', 'yellow' ];

//   function shuffle ()
//   {
//   	var rand = Math.floor(Math.random()*colors.length);
//   	return rand;

//   }
//   shuffle();

// var j = 0, i = 0;
// var column = Stage.column().appendTo(stage).pin('align', 0.5).spacing(1);
//   for (j = 0; j < colors.length; j++) {
//   var row = Stage.row().appendTo(column).spacing(5);
//     for (var i = 0; i < colors.length; i++) {
//     var cell = Stage.image(colors[shuffle()]).appendTo(row).on('click', function(point) {
//     // ...tween scale values of this node
//     if(prev_sx === this._image._sx)
//     {
//     	console.log("match");
//     }

//     console.log(prev_sx)
//     console.log(this._image._sx)
//     prev_sx = this._image._sx;
//     this.remove();
//   });
  
//   }
// }
// });

Stage(function(stage) {

  stage.viewbox(24, 24);

  var width = 4, height = 8;

  var ui = {};

  ui.board = Stage.create().appendTo(stage).pin({
    width : width * 2,
    height : height * 2,
    align : 0.5
  });

    var game = new Game(width, height);

  game.Tile.prototype.uiInsert = function() {
    var self = this;
    this.ui = Stage.image('tile-' + this.color).appendTo(ui.board);
    this.ui.pin({
      offsetX : this.i * 2 + 1,
      offsetY : this.j * 2 + 1,
      handle : 0.5
    }).on(Stage.Mouse.CLICK, function(point) {
      game.click(self);
    });
  };

  game.start();
});

