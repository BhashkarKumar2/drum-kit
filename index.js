var i=0;
var lim=document.querySelectorAll(".drum").length;
while(i<7){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//if handleclick() is used the alert appears even if we do not click the button 
    // i.e. as soon as site opens
    i++;
}
function handleclick(){
    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);
    
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonanimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
        
        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
        
        case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        
        case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "l":
         var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
         break;

         default:alert("not correct choice");    
    }

}  
function buttonanimation(currkey){
     var activebutton=document.querySelector("."+currkey);
     activebutton.classList.add("pressed");
      setTimeout(function () {
        activebutton.classList.remove("pressed");},100);
      }