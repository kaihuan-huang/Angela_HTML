//Dice 1
var randomNumber1 = Math.floor(Math.random( )*6) +1 ;         //生成1-6随机整数
var  randonDiceImage ="dice" + randomNumber1 + ".png";      //dice1.png--dice6.png
//把生成的随机数与对应图像联系
var randomImageSource = "images/" + randonDiceImage;  // images/dice1.png -- inages/dice6.png
//ready to change the src attribute of our image element
//select the element . select all
var image1 = document.querySelectorAll("img")[0];
//the first one we wanna change is the attribute called src; the second input we wanna change is randomInageSource
image1.setAttribute("src", randomImageSource);

//Dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randonImageSource2= "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randonImageSource2);

//Changing the TItle depends on what is the result
//if the player1 win:
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Palyer2 WIns!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
