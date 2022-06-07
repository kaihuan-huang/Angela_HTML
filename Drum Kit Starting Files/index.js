// for loop to loop through all the buttons and add event listeners
// 0-鼓的数量之内的都会进行for loop, increment i by 1 each time 1++
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i < numberOfDrumButtons; 1++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML =this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Press
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event,key);

    });

    function makeSound(key){
        switch (key) {
            case"w":
                var tom1 = new Audio("sounds/tom1.mp3");
                tom1.play();
                break;

            case"a":
                var tom2 = new Audio("sounds/tom2.mp3");
                tom2.play();
                break;
            
            case"s":
                var tom3 = new Audio("sounds/tom3.mp3");
                tom3.play();
                breaak;

            case"d":
                var tom4 = new Audio("sounds/tom4.mp3");
                tom4.play();
                break;

            case"j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case"k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case"l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            default:console.log(key);
        }

    }


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);

}


/*//all the selector that have the class drum, then selecting each individual element from this array to add an event lisenter.
var audio = new Audio("sounds/tom-1.mp3");
audio.play();     */