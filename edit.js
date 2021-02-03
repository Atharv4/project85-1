canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var cars_width = 110 ;
var cars_height = 90 ;

cars_x = 10;
cars_y = 10;
cars_2x = 10;
cars_2y = 100;

background_image = "track.jpg";
car_image1 = "car1.png";
car_image2 = "car2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    imgcarTag1 = new Image();
    imgcarTag1.onload = uploadcar;
    imgcarTag1.src = car_image1;

    imgcarTag2 = new Image();
    imgcarTag2.onload = uploadcar2;
    imgcarTag2.src = car_image2;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function uploadcar() {
    ctx.drawImage(imgcarTag1, cars_x, cars_y, cars_width, cars_height);
}
function uploadcar2() {
    ctx.drawImage(imgcarTag2, cars_2x, cars_2y, cars_width, cars_height);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed=='38') {
        up1();
        console.log("up");
    }
    if (keypressed=='40') {
        down1();
        console.log("down");
    }
    if (keypressed=='37') {
        left1();
        console.log("left");
    }
    if (keypressed=='39') {
        right1();
        console.log("right");
    }


    if (keypressed=='87') {
        up2();
        console.log("up");
    }
    if (keypressed=='83') {
        down2();
        console.log("down");
    }
    if (keypressed=='65') {
        left2();
        console.log("left");
    }
    if (keypressed=='68') {
        right2();
        console.log("right");
    }
}
function up1() {
    if (cars_y > 0) {
        cars_y = cars_y-10;
        console.log("The blue cars X is = "+ cars_x +" and Y is = " + cars_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
function down1() {
    if (cars_y < 500) {
        cars_y = cars_y+10;
        console.log("The blue cars X is = "+ cars_x +" and Y is = " + cars_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
function left1() {
    if (cars_x > 0) {
        cars_x = cars_x-10;
        console.log("The blue cars X is = "+ cars_x +" and Y is = " + cars_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
function right1() {
    if (cars_x < 700) {
        cars_x = cars_x+10;
        console.log("The blue cars X is = "+ cars_x +" and Y is = " + cars_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}





function up2() {
    if (cars_2y > 0) {
        cars_2y = cars_2y-10;
        console.log("The yellow cars X is = "+ cars_2x +" and Y is = " + cars_2y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}
function down2() {
    if (cars_2y < 500) {
        cars_2y = cars_2y+10;
        console.log("The yellow cars X is = "+ cars_2x +" and Y is = " + cars_2y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}
function left2() {
    if (cars_2x > 0) {
        cars_2x = cars_2x-10;
        console.log("The yellow cars X is = "+ cars_2x +" and Y is = " + cars_2y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}
function right2() {
    if (cars_2x < 700) {
        cars_2x = cars_2x+10;
        console.log("The yellow cars X is = "+ cars_2x +" and Y is = " + cars_2y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}