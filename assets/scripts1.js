

var colors = [ 'green', 'blue', 'purple', 'red', 'orange', 'yellow' ];

var score = 0;


//SETUP THE STAGE
Stage(function(stage) {
stage.viewbox(40, 40);
var width = 8, height = 8;
var ui = {};

ui.board = Stage.create().appendTo(stage).pin({
  width : width * 3,
  height : height * 3,
  align : 0.5
  });

function updateTiles()
{





// test2 = getTile(0,9);
// test2.ui.remove();
// console.log("removing " + test2.j)



// dropTiles(9,9);
// reset();
// console.log('set 2')
// test2 = getTile(0,5);
// test2.ui.remove();
// dropTiles(5,4);
// reset();






   



// console.log('next sweep');
// var x = 6;
// var y = 5;


//   bottom = getTile(0,x);
//   top = getTile(0,y);

//    top.ui.tween(200).pin({
//       offsetX : bottom.i * 2 + 1,
//       offsetY : bottom.j * 2 + 1
//     });
//    console.log("copying " + top.j + " to " + bottom.j)
  
//     x -= 1;
//     y -= 1;
 
  

  
 // }





 // }
  for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    var a = getTile(i,j);
    var b = getTile(i+1,j);
    var c = getTile(i,j+1)
    var toptile = getTile(i,j-1)
    console.log(a.color + " " + b.color)
    if(a.color === b.color)
    {


     a.ui.remove();
    

    

    }
    if(a.color === c.color)
    {
   a.ui.remove();
    c.ui.remove();
    }  
    }
    }
  //   console.log(_map)
}

function dropTiles(x,y) 
{

for(var i = 0; i < y; i++)
{

var bottom = (_map[0 + ':' + x]);
var top = (_map[0 + ':' + (x-1)]);
  console.log(top);

   top.ui.tween(200).pin({
      offsetX : bottom.i * 2 + 1,
      offsetY : bottom.j * 2 + 1
    });
   
   console.log("copying " + top.j + " to " + bottom.j)
  
  console.log("changing " + top.j + " to " + bottom.j)
  // top.j = bottom.j
  console.log("now " + top.j + " is " + bottom.j)
    x -= 1;
    // y -= 1;
   
  _map[0 + ':' + bottom.j] = top;
    
  }
}

function collapseDown() {
    do { // collapse down
      moved = false;
      for (var i = 0; i < _tiles.length; i++) {
        var tile = _tiles[i];
        if (tile.j + 1 < height && tile.move(tile.i, tile.j + 1)) {
          moved = true;
        }
      }
    } while (moved);
    updateTiles();
  }

   function remove(tile) {
    var matched = [];
    tile.match(matched);
    if (matched.length <= 1) {
      return false;
    }
    for (var i = 0; i < matched.length; i++) {
      matched[i].remove();
    }
    return true;
  }

  Tile.prototype.match = function(list, search, color) {
    search = search || +new Date();
    if (search == this.search) {
      return;
    }
    this.search = search;
    color = color || this.color;
    if (color != this.color) {
      return;
    }
    list.push(this);
    if (next = getTile(this.i + 1, this.j)) {
      next.match(list, search, color);
    }
    if (next = getTile(this.i - 1, this.j)) {
      next.match(list, search, color);
    }
    if (next = getTile(this.i, this.j + 1)) {
      next.match(list, search, color);
    }
    if (next = getTile(this.i, this.j - 1)) {
      next.match(list, search, color);
    }
  };

  function collapseLeft() {
    do { // collapse left
      moved = false;
      for (var i = 0; i < width - 1; i++) {
        var empty = true;
        for (var j = 0; j < height && empty; j++) {
          empty = !getTile(i, j);
        }
        if (!empty) {
          continue;
        }
        for (var j = 0; j < height; j++) {
          var tile = getTile(i + 1, j);
          if (tile) {
            tile.move(i, j);
            moved = true;
          }
        }
      }
    } while (moved);
    updateTiles();
  }
  function reset()
  {
for(var i = 9; i > 0; i--)
{

var tile = getTile(0,i);
tile.j = i;

}
}
  function updateTiles() {
    for (var i = 0, n = _tiles.length; i < n; i++) {
      var tile = _tiles[i];
      if (tile.dirty) {
        tile.uiUpdate();
        tile.dirty = false;
      }
    }
  }

  Tile.prototype.move = function(i, j) {
    if (getTile(i, j)) {
      return false;
    }
    unsetTile(this.i, this.j, this);
    setTile(this.i = i, this.j = j, this);
    this.dirty = true;
    return true;
  };

   Tile.prototype.uiRemove = function() {
    console.log('rm');
    this.ui.tween(150).clear().pin({
      alpha : 0
    }).then(function() {
      this.remove();
    });
  };

  function unsetTile(i, j, tile) {
    if (_map[i + ':' + j] !== tile) {
      throw 'Invalid location: ' + i + ':' + j;
    }
    delete _map[i + ':' + j];
  }

  Tile.prototype.remove = function() {
    unsetTile(this.i, this.j, this);
    _tiles.splice(_tiles.indexOf(this), 1);
    this.uiRemove();
  };
//Used to get tile coordinates;
function getTile(i, j) {
    return _map[i + ':' + j];
  }

   Click = function(tile) {
    if (remove(tile)) {
      collapseDown();
      setTimeout(function() {
        collapseLeft();
      }, 200);
    }
  };
//0 LOOP THROUGH AND START THE CHAIN OF CREATING AND APPENDING TILES
function start()
{
 _map = {}, _tiles = [];
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {



        var x =_map[0 + ':' + 0];
        console.log(_tiles[j]);
        // console.log(_map);
        new Tile((Math.floor(Math.random() * colors.length))).insert(i, j);


      }
    }
  }

//1 DEFINITION OF THE "TILE" OBJECT
function Tile(color) {
    this.color = color;
  }

  //2 INSERT A 'TILE' OBJECT AT EACH COORDINATE, add to MAP[] and TILES AND PUSH IT INTO THE UI
Tile.prototype.insert = function(i, j) {
    setTile(i, j, this);
    this.i = i;
    this.j = j;
    _tiles.push(this);
    // console.log(this);
    this.uiInsert(this);
    //console.log(_map);
  };

  //3 ADD THE TILE OBJECT FOR EACH COORD TO THE MAP
  function setTile(i, j, tile) {
    if (_map[i + ':' + j]) {
      throw 'Location unavailable: ' + i + ':' + j;
    }
    _map[i + ':' + j] = tile;
  }

this.Tile = Tile;

//4 INSERT THE TILES ON THE UI
Tile.prototype.uiInsert = function() {    
this.ui = Stage.image('tile-' + (this.color + 1)).appendTo(ui.board);

// store this in a variable for use on the box handlers
var box = this;
    this.ui.pin({
      offsetX : this.i * 2 + 1,
      offsetY : this.j * 2 + 1,
      handle : 0.5
    }).on(Stage.Mouse.CLICK,function(point){
       Click(box);

 //console.log(box);
    //  delete _map[box.i + ':' + box.j];
    // _tiles.splice(_tiles.indexOf(box), 1);
    
    // console.log(stage);


   //box is the object
   //console.log(box);
   //console.log(box.ui);
   
    

// var temp;
 
//  var x = getTile(box.i,box.j);
//  var y = getTile(box.i+1,box.j);
//  var z = getTile(box.i+2,box.j);
//  //console.log(x);
//  x.ui.tween(200).ease('quad-out').clear().pin({
//       offsetX : y.i * 2 + 1,
//       offsetY : y.j * 2 + 1
//     });

//  y.ui.tween(200).ease('quad-out').clear().pin({
//       offsetX : x.i * 2 + 1,
//       offsetY : x.j * 2 + 1
//     });
//   temp = x.i;
//  x.i = y.i;
//  y.i = temp;



//  _map[x.i + ':' + x.j] = x;
//  _map[y.i + ':' + y.j] = y;


// updateTiles();





    })
  } 

  



start();











 










  });