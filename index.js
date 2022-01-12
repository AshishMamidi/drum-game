// for detecting clicks
var i = 0;
while(i < 7)
{
document.querySelectorAll(".button")[i].addEventListener("click",function ()
{
  var innerhtml = this.innerHTML;
  makesound(innerhtml);
  makeanimation(innerhtml);
  
})
i++;
}

// page animation using gsap (javascript libaries)
const tl = gsap.timeline({defaults:{duration:0.5}})
tl.fromTo(".header-1",{opacity:0},{opacity:1,duration:1})
tl.fromTo(".button-1",{y:200,opacity:0},{y:0,opacity:1,duration:1})
tl.fromTo(".button-2",{y:-200,opacity:0},{y:0,opacity:1,duration:1},"<")


//for detecting keyboard presses
document.addEventListener("keypress",function(event)
{
  makesound(event.key);
  makeanimation(event.key);
})

// for making sounds
function makesound(keyvalue)
{
  switch(keyvalue) {
    case "w":
      var sound1 = new Audio("sounds/crash.mp3");
      sound1.play();
      break;
    case "a":
       var sound2 = new Audio("sounds/kick-bass.mp3");
       sound2.play();
       break;
    case "s":
       var sound3 = new Audio("sounds/snare.mp3");
       sound3.play();
       break;
    case "d":
       var sound4 = new Audio("sounds/tom-1.mp3");
       sound4.play();
       break;
    case "f":
       var sound5 = new Audio("sounds/tom-2.mp3");
       sound5.play();
       break;
    case "g":
       var sound6 = new Audio("sounds/tom-3.mp3");
       sound6.play();
       break;
    case "h":
       var sound7 = new Audio("sounds/tom-4.mp3");
       sound7.play();
       break;
  }
}

// for button animation
function makeanimation(currentkey)
{
  var animatekey = document.querySelector("." + currentkey);
  animatekey.classList.add("press");
  setTimeout(function()
{
  animatekey.classList.remove("press");
},200)
}
