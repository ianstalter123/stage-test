

<<<<<<< HEAD
var colors = [ 'green', 'blue', 'purple', 'red', 'orange', 'yellow' ];

var score = 0;
=======


var score = 0;
var soundEfx;
var soundEfx1;
var soundEfx2;
>>>>>>> gh-pages


//SETUP THE STAGE
Stage(function(stage) {
<<<<<<< HEAD
stage.viewbox(40, 40);
=======



soundEfx = document.getElementById("soundEfx");
soundEfx1 = document.getElementById("soundEfx1");
soundEfx2 = document.getElementById("soundEfx2");
stage.viewbox(25, 25);
>>>>>>> gh-pages
var width = 8, height = 8;
var ui = {};

ui.board = Stage.create().appendTo(stage).pin({
  width : width * 3,
  height : height * 3,
<<<<<<< HEAD
  align : 0.5
=======
  align : 0.55
>>>>>>> gh-pages
  });

function updateTiles()
{


<<<<<<< HEAD



=======
>>>>>>> gh-pages
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
  // for (var i = 0; i < 9; i++) {
  // for (var j = 0; j < 9; j++) {
  //   var a = getTile(i,j);
  //   var b = getTile(i+1,j);
  //   var c = getTile(i,j+1)
  //   var toptile = getTile(i,j-1)
  //   console.log(a.color + " " + b.color)
  //   if(a.color === b.color)
  //   {


  //    a.ui.remove();
    

    

  //   }
  //   if(a.color === c.color)
  //   {
  //  a.ui.remove();
  //   c.ui.remove();
  //   }  
  //   }
  //   }
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
  function reset()
  {
for(var i = 9; i > 0; i--)
{

var tile = getTile(0,i);
tile.j = i;

}
}
//Used to get tile coordinates;
function getTile(i, j) {
    return _map[i + ':' + j];
  }

    Click = function(tile) {
   //console.log(tile);
   tile.remove();
  };
//0 LOOP THROUGH AND START THE CHAIN OF CREATING AND APPENDING TILES
function start()
{
 _map = {}, _tiles = [];
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {

<<<<<<< HEAD


        var x =_map[0 + ':' + 0];
        console.log(_tiles[j]);
        // console.log(_map);
        new Tile((Math.floor(Math.random() * colors.length))).insert(i, j);


      }
    }
=======
        var x =_map[0 + ':' + 0];
        console.log(_tiles[j]);
        // console.log(_map);
       
      
       delete _map[4 + ':' + 4];
        new Tile((Math.floor(Math.random() * 5))).insert(i, j);
        

      }
    }
new Tile(6).insert(4, 4);
>>>>>>> gh-pages
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

<<<<<<< HEAD
=======

//5 bomb - blowup function
  function Bomb()
  {

    var rand = Math.floor(Math.random()*5);
    console.log(rand);
        for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {


        var target = getTile(i,j)
        if(target.color === rand)
        {
           
        target.ui.remove();
        
        }
        
         setTimeout(function () {
            
        }, 1);  

      }
    }
  }

>>>>>>> gh-pages
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

<<<<<<< HEAD
=======



>>>>>>> gh-pages
// store this in a variable for use on the box handlers
var box = this;
    this.ui.pin({
      offsetX : this.i * 2 + 1,
      offsetY : this.j * 2 + 1,
      handle : 0.5
    }).on(Stage.Mouse.CLICK,function(point){
      drag = true;
<<<<<<< HEAD
=======
console.log(point);

>>>>>>> gh-pages

 //console.log(box);
    //  delete _map[box.i + ':' + box.j];
    // _tiles.splice(_tiles.indexOf(box), 1);
    
    // console.log(stage);


<<<<<<< HEAD
   //box is the object
   //console.log(box);
   //console.log(box.ui);
   
    
=======
  //test for bomb click
    
    if(box.i === 4 && box.j === 4)
    {
      console.log("bomb");
      soundEfx1.play();
      Bomb();
    }
>>>>>>> gh-pages

var temp;
 
 var x = getTile(box.i,box.j);
 var y = getTile(box.i+1,box.j);
 var z = getTile(box.i+2,box.j);
<<<<<<< HEAD
 //console.log(x);
 x.ui.tween(200).ease('quad-out').clear().pin({
      offsetX : y.i * 2 + 1,
      offsetY : y.j * 2 + 1
    });

 y.ui.tween(200).ease('quad-out').clear().pin({
=======



//swap the two tiles

 x.ui.tween(200).ease('bounce').clear().pin({

      offsetX : y.i * 2 + 1,
      offsetY : y.j * 2 + 1,

    });

 y.ui.tween(200).ease('bounce').clear().pin({
>>>>>>> gh-pages
      offsetX : x.i * 2 + 1,
      offsetY : x.j * 2 + 1
    });
  temp = x.i;
 x.i = y.i;
 y.i = temp;


<<<<<<< HEAD

 _map[x.i + ':' + x.j] = x;
 _map[y.i + ':' + y.j] = y;

=======
//swap the tile position in the array
 _map[x.i + ':' + x.j] = x;
 _map[y.i + ':' + y.j] = y;

var first = getTile(box.i,box.j-1);
var second = getTile(box.i,box.j);
console.log(first);


//check if the swapped tiles match to remove
if(first.color === second.color)
{
  first.ui.remove();
  second.ui.remove();
  score += 1;
  document.querySelector('#score').innerHTML = "Score " + score;
  soundEfx.play();
}

var first = getTile(box.i,box.j+1);
var second = getTile(box.i,box.j);
console.log(first);

if(first && first.color === second.color)
{
  first.ui.remove();
  second.ui.remove();
  score += 1;
  document.querySelector('#score').innerHTML = "Score " + score;
  soundEfx.play();
}

var first = getTile(y.i,y.j+1);
var second = getTile(y.i,y.j);
console.log(first);

if(first && first.color === second.color)
{
  first.ui.remove();
  second.ui.remove();
  score += 1;
  document.querySelector('#score').innerHTML = "Score " + score;
  soundEfx.play();
}

 

var first = getTile(y.i,y.j-1);
var second = getTile(y.i,y.j);
console.log(first); 

if(first.color === second.color)
{
  first.ui.remove();
  second.ui.remove();
  score += 1;
  document.querySelector('#score').innerHTML = "Score " + score;
  soundEfx2.play();
}




>>>>>>> gh-pages

updateTiles();





    })
  } 

  



start();
<<<<<<< HEAD

=======
 
>>>>>>> gh-pages










 










  });