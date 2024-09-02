
var randomNumber2 =  Math.floor(Math.random()*6)+1;
var randomNumber1 = Math.floor(Math.random()*6)+1;
let randomImage = "dice"+ randomNumber1 + ".png";
let randomImage2 = "dice"+ randomNumber2 + ".png";
let randomSource = "images/" + randomImage;
let randomSource2 = "images/" + randomImage2;
console.log(randomNumber1);
 var i1 = document.querySelectorAll("img")[0];
 var i2= document.querySelectorAll("img")[1];

i1.setAttribute("src",randomSource);
i2.setAttribute("src",randomSource2);




if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is winner";
}else{
    document.querySelector("h1").innerHTML= "Player 2 is winner";
};