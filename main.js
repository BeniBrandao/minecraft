var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageImegeWidth = 30;
blockImageImegeHeight = 30;

var playerObject =" ";
var blockImageObject =" ";

function playerUpdate(){
    fabric.Image.fromURL("assets/player.png" , function(Img){
        playerObject = Img;
        playerObject.scaleToWidth (150);
        playerObject.scaleToHeight (140);
        playerObject.set({
            top:playerY,
            left:playerX,
        });
        canvas.add(playerObject);
    }
)
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageImegeWidth);
        blockImageObject.scaleToHeight(blockImageImegeHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX,
        });
        canvas.add(blockImageObject);
    });       
};


window.addEventListener("keydown" ,myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38"){
        console.log("cima")
up();
    }
    if (keyPressed == "40"){
        console.log("baixo")
        down();
    }
    if (keyPressed == "39"){
        console.log("direita")
        left();
    }
    if (keyPressed == "37"){
        console.log("baixo")
        right();

    }
    if (keyPressed == "70"){
        console.log("F")
        newImage (" assent/clound.jpg")
    }
    if (keyPressed == "71"){
        console.log("g")
        newImage (" assent/dark_green.png")
    } if (keyPressed == "72"){
        console.log("h")
        newImage (" assent/ground.png")
    } if (keyPressed == "73"){
        console.log("j")
        newImage (" assent/light_green.png")
    }
    if (keyPressed == "74"){
        console.log("k")
        newImage (" assent/roof.jpg")
    }
    if (keyPressed == "75"){
        console.log("l")
        newImage (" assent/trunk.jpg")
    }
    if (keyPressed == "76"){
        console.log("z")
        newImage (" assent/unique.png")
    }
    if (keyPressed == "77"){
        console.log("x")
        newImage (" assent/wall.jpg")
    }
    if (keyPressed == "78"){
        console.log("c")
        newImage (" assent/yollow_wall.png")
    }


}

function up(){
    if (playerY >= 0){
        playerY = playerY -blockImageImegeHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}


function down(){
    if (playerY <=500){
        playerY = playerY + blockImageImegeHeight;
        canvas.remove(playerObject);
        playerUpdate();

    }
}
function left(){
    if (playerX >0) {
        playerX = playerX - blockImageImegeWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if (playerX <=850) {
        playerX = playerX + blockImageImegeWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

if (e.shiftKay == true && keyPressed == "80"){
    console.log("p e shift precionadas juntas");
     blockImageImegeWidth = blockImageImegeWidth + 10;
    blockImageImegeWidth = blockImageImegeWidth + 10;
    document.getElementById("currentWidth"). innerHTML = blockImageImegeWidth;
    document.getElementById("currentHeigth"). innerHTML = blockImageImegeHeight;
}

if (e.shiftKay == true && keyPressed == "80"){
    console.log("m e shift precionadas juntas");
     blockImageImegeWidth = blockImageImegeWidth - 10;
    blockImageImegeWidth = blockImageImegeWidth - 10;
    document.getElementById("currentWidth"). innerHTML = blockImageImegeWidth;
    document.getElementById("currentHeigth"). innerHTML = blockImageImegeHeight;
}