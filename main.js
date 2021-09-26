canvas = new fabric.Canvas('myCanvas');

b_img_h = 30;
b_img_w = 30; 

player_y = 10;
player_x = 10;

player_object ="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("3.png", function(Img){
    player_object =Img;
    player_object.scaleToWidth(50);
    player_object.scaleToHeight(150);
    player_object.set({
top:player_y,
left:player_x
    });
canvas.add(player_object); 

} );

}

function new_Img(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_img_object =Img;
    block_img_object.scaleToWidth(b_img_w);
    block_img_object.scaleToHeight(b_img_h);
    block_img_object.set({
top:player_y,
left:player_x
    });
canvas.add(block_img_object); 

} );

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed) ;
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("shift and p pressed together");
        b_img_w = b_img_w + 10;
        b_img_h = b_img_h + 10; 
        document.getElementById("Current_width").innerHTML = b_img_w;
        document.getElementById("Current_height").innerHTML = b_img_h;
        
            }
            if(e.shiftKey == true && keyPressed == '77'){
                console.log("shift and m pressed together");
                b_img_w = b_img_w - 10;
                b_img_h = b_img_h - 10; 
                document.getElementById("Current_width").innerHTML = b_img_w;
                document.getElementById("Current_height").innerHTML = b_img_h;
                
                    }
if(keyPressed == '37'){
    left();
    console.log("left");
}

if(keyPressed == '38'){
    up();
    console.log("up");
}

if(keyPressed =='39'){
    right();
    console.log("right");
}

if(keyPressed == '40'){
    down();
    console.log("down");
}

if(keyPressed == '87'){
    new_Img('wall.jpg');
    console.log("w");
}

if(keyPressed == '71'){
    new_Img('ground.png');
    console.log("g");
}

if(keyPressed == '84'){
    new_Img('trunk.jpg');
    console.log("t");
}

if(keyPressed == '89'){
    new_Img('yellow_wall.png');
    console.log("y");
}

if(keyPressed == '85'){
    new_Img('unique.png');
    console.log("u");
}

if(keyPressed == '76'){
    new_Img('light_green.png');
    console.log("l");
}

if(keyPressed == '82'){
    new_Img('roof.jpg');
    console.log("r");
}

if(keyPressed == '68'){
    new_Img('dark_green.png');
    console.log("d");
}

if(keyPressed == '67'){
    new_Img('cloud.jpg');
    console.log("c");
}
                }