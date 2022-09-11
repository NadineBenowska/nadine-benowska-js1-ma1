//question1
var outOfStock=true;
if(outOfStock===true){
    console.log ("Out of Stock");
}
//

//question2
for(var i=15; i<=25; i++){
    if(i===17 || i===20){
        console.log (i);
    }
}
//

//question3
var games = [
    {
     title: "Grand Theft Auto",
     rating: 4.48,
    },
    {
     title: "Portal 2",
     rating: 3.5,
    },
    {
     title: "Team Fortress",
     rating: null,
    },
    {
     title: "The Witcher",
     rating: 3.0,
    },
    {
     title: "The Elder Scrolls",
     rating: 2.9,
    },  
   ];

   games.filter(element=> element.rating).filter(element=> element.rating <3.5) .forEach (element => console.log(element))

   games.filter(element => element.rating && element.rating < 3.5) .forEach(element => {
    var gameslist = document.getElementById ("games") 
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element.title + ": " + element.rating));
    gameslist.appendChild(li);
  })
  //

//question4
function whatIDontlike(typeofanimal) {
    console.log("I dont like" + typeofanimal);
}

whatIDontlike("sharks");
//

//question5
function subtracktTwoNumbers (number1,number2){
    var sum=number1-number2;
    console.log (sum);
}
subtracktTwoNumbers (11,5);

//

//question6

//changing the title of the page 
var button =document.querySelector("button");

function updateTitle(){
    var heading= document.querySelector ("h1");
    heading.innerHTML = "Updated tiltle";
};

//changing the backgroung color

function changeColourBody(){
    var body = document.querySelector("body");
    body.style.backgroundColor="yellow";
}

function changeColourHeading(){
    var heading = document.querySelector("h1");
    heading.style.color="green";
}

function changeFontHeading(){
    var heading = document.querySelector("h1");
    heading.style.fontFamily="impact";
}

function makeHeadingLink(){
    var heading = document.querySelector("h1");
    var a = document.createElement("a");
    a.innerHTML= heading.innerHTML;
    

}

button.onclick=function() {

    changeColourHeading();

    updateTitle();

    changeColourBody();

    changeFontHeading();

}

//question7

var buttonPrice=document.querySelector (".price");

var toys = [
    {
     name: "Lego",
     price: 15.6,
    },
    {
     name: "Master of the Universe",
     price: "28.3",
    },
    {
     name: "Barbie",
     price: null,
    },
    {
     name: "Mr Potato Head",
     price: 89.99,
    },
   ];