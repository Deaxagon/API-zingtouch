
var unlocked = document.getElementById('lock');
unlocked = "Locked";
document.getElementById("lock").innerHTML = unlocked;

var x;
var y;
var c;
var a;


// swipe, before it was one tap gesture. This is the first circle counted from the left.
var tapElementOne = document.getElementById('one'); 
var regionOne = new ZingTouch.Region(tapElementOne, true, false); //creates a gesture area/ region where any of the gestures can be performed
var longTap = new ZingTouch.Tap({ // this is where you specify what gesture you want in the region.
maxDelay: 1000
})
var swipe=new ZingTouch.Swipe({
numInputs: 1,
maxRestTime: 100,
escapeVelocity: 0.2
});

regionOne.bind(tapElementOne, swipe, function(e){
var textElement = document.getElementById('one');
textElement.innerHTML = "Swiped!";
tapElementOne.style.backgroundColor='black';
x=1;
console.log("swipe");
gtag('event', 'action', {
  event_category: 'buttons',
  event_label: 'Test button clicked'
});

/*
(function(element){ 
  setTimeout(function(){ // this function sets a timer for the gesture to reset but isn't working at the moment and that's why I removed it.

  }, 1000);
})(textElement); */
})

// This used to be the code for two finger tap but only uses one input now. This is the second circle counted from the left.
var tapElementTwo = document.getElementById('two');
var TwoFingerTap = new ZingTouch.Tap({ // The gesture is tap.
numInputs: 1,
maxDelay: 1000
});

var regionTwo = new ZingTouch.Region(tapElementTwo, true, false);
regionTwo.bind(tapElementTwo, TwoFingerTap, function(e){


var textElement = document.getElementById('two');
textElement.innerHTML = "Tapped!";
  y=1;
/* (function(element){
  setTimeout(function(){

//    element.innerHTML = "two Finger Tap";
  }, 1000);
})(textElement); */
})


// this is the third circle, using the oinch gesture
var tapElementfour = document.getElementById('three');
var regionfour = new ZingTouch.Region(tapElementfour, true, false);
var pinch=new ZingTouch.Pinch({ 
distance: 10
});

regionfour.bind(tapElementfour, pinch, function(e){
var textElement = document.getElementById('three');
textElement.innerHTML = "Pinched";
a=1;

/*
(function(element){
  setTimeout(function(){
  }, 1000);
})(textElement); */
})

// dragged gesture. The last circle counted from the left.
var tapElementfive = document.getElementById('five');
var regionfive = new ZingTouch.Region(tapElementfive, true, false);
var pan=new ZingTouch.Pan({
threshold: 100
});

regionfive.bind(tapElementfive, pan, function(e){
var textElement = document.getElementById('five');
textElement.innerHTML = "dragged";
tapElementfive.style.background="black";
 c=1;
if (x==1&&y==1&&c==1&&a==1){
    unlocked= "Good job it's Unlocked";
    document.getElementById("lock").innerHTML = unlocked;
} 

/*
(function(element){
  setTimeout(function(){
  //  element.innerHTML =  "pinched";
  //  tapElementfour.style.backgroundColor='lightgreen';
  }, 1000);
})(textElement); */
})

//Get random number. In this case it is used when switching colors at the top of the page. The colors doesn't have a purpose yet.
function getRandNum(min, max, decimals) {
decimals = (decimals) ? decimals : 0;
return parseFloat((Math.random() * (max - min + 1) + min).toFixed(decimals));
}

