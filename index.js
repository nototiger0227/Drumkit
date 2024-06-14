
// function handleclick() {

//     var khatka = this.innerHTML;

//     makesound(khatka);
//     buttonAnimation(khatka);


// }


// //EVENT LISTENER FOR KEYBOARD COMMANDS 

// document.addEventListener("keydown", handlekeyboard);

// function handlekeyboard(event) {

//     khatka = event.key;
//     makesound(khatka);
//     buttonAnimation(khatka);
// };



//EVENT LISTENER FOR CLICK COMMANDS 
// var i = 0;
// var numofbuttons = document.querySelectorAll(".drum").length;


// for (i = 0; i < numofbuttons; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", handleclick);
// }



// function makesound(khatka) {
//     switch (khatka) {
//         case "w":
//             var audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();


//             //code to be executed 
//             break;
//         case "a":
//             var audio = new Audio("./sounds/tom-2.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         case "s":
//             var audio = new Audio("./sounds/tom-3.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         case "d":
//             var audio = new Audio("./sounds/tom-4.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         case "j":
//             var audio = new Audio("./sounds/crash.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         case "k":
//             var audio = new Audio("./sounds/crash.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         case "l":
//             var audio = new Audio("./sounds/kick-bass.mp3");
//             audio.play();

//             //code to be executed 
//             break;
//         default:
//             console.log("press the correct buttons bro ");
//             break;
//     }
// } 
// function buttonAnimation(khatka){

//     document.querySelector("."+ khatka).classList.toggle("pressed");

// }






//MY VERSION OF THE CODE 

var i = 0;
var numofbuttons = document.querySelectorAll(".drum").length;

//EVENT LISTENER FOR MOUSE HOVER COMMANDS ----------------------------------------------------------------------------------------------------------------------------------------------------


for (i = 0; i < numofbuttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", buttonAnimation);
}

for (i = 0; i < numofbuttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("mouseenter", buttonAnimation);
}

for (i = 0; i < numofbuttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("mouseleave", buttonAnimation);
}

function buttonAnimation() {
    var khatka = this.innerHTML;
    // alert(khatka);
    ab_bajega(khatka);

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //EVENT LISTENER FOR KEYBOARD COMMANDS -------------------------------------------------------------------------------------------------------------------------------------------------------


document.addEventListener("keydown", handlekeyboard);

function handlekeyboard(event) {

    khatka = event.key;
    ab_bajega(khatka);
};

// FINALLY AB_BAJEGA KHATKAAAAAAAAAAAAA-----------------------------------------------------------------------------------------------------------------------------------------------------------
function ab_bajega(khatka) {

    document.querySelector("." + khatka).classList.toggle("pressed");
    makesound(khatka);
}


function makesound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();


            //code to be executed 
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();

            //code to be executed 
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();

            //code to be executed 
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();

            //code to be executed 
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();

            //code to be executed 
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();

            //code to be executed 
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();

            //code to be executed 
            break;
        default:
            console.log("press the correct buttons bro ");
            break;
    }
} 
