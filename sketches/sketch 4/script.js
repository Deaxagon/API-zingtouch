
var unlocked = document.getElementById('lock');
  unlocked = "Locked";
  document.getElementById("lock").innerHTML = unlocked;

var x;
var y;
var z;
var c;
var a;


// swipe, before it was one tap gesture. This is the first square counted from the left.
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
  //textElement.innerHTML = "Swiped!";
 // textElement.style.backgroundImage = "url ('https://cdn.glitch.com/df4e1adc-c839-444a-8e43-2a6562c72f15%2F5c78d207a37843b4a8e4be21ca024966.png?1550516692293') ";
  tapElementOne.style.backgroundColor='#ffad0a';
  //tapElementOne.style.backgroundImage = "url ('https://cdn.glitch.com/df4e1adc-c839-444a-8e43-2a6562c72f15%2F5c78d207a37843b4a8e4be21ca024966.png?1550516692293') ";
  x=1;
  
/*
  (function(element){ 
    setTimeout(function(){ // this function sets a timer for the gesture to reset but isn't working at the moment and that's why I removed it.

    }, 1000);
  })(textElement); */
})


document.getElementById("two").addEventListener("click", function(){
  document.getElementById("two").style.background='#ef5e04';
  document.getElementById("two").innerHTML = "One finger";
  z=1;
});

// This is the second square counted from the left.
var tapElementTwo = document.getElementById('two');
var x=0;
var TwoFingerTap = new ZingTouch.Tap({ // The gesture is tap.
  numInputs: 3,
  maxDelay: 1000
});

var regionTwo = new ZingTouch.Region(tapElementTwo, true, false);
regionTwo.bind(tapElementTwo, TwoFingerTap, function(e){


  var textElement = document.getElementById('two');
  textElement.innerHTML = "three fingers";
  textElement.style.background='#af541c';
    y=1;
  
 /* (function(element){
    setTimeout(function(){

    element.innerHTML = "Use two fingers";
    }, 1000);
  })(textElement);  */
}) 



// this is the third square, using a pinch gesture.
var tapElementfour = document.getElementById('three');
var regionfour = new ZingTouch.Region(tapElementfour, true, false);
var pinch=new ZingTouch.Pinch({ 
	distance: 10
});

regionfour.bind(tapElementfour, pinch, function(e){
  var textElement = document.getElementById('three');
  textElement.innerHTML = "Pinched";
  textElement.style.backgroundColor='#ed470b';
  textElement.style.height="550px";
  a=1;


  (function(element){
    setTimeout(function(){

    element.innerHTML = "Pinch";
      textElement.style.height="400px";
      textElement.style.backgroundColor='#f29137';
    }, 1000);
  })(textElement);  
})


// dragged gesture. The last square counted from the left.
var tapElementfive = document.getElementById('five');
var regionfive = new ZingTouch.Region(tapElementfive, true, false);
var pan=new ZingTouch.Pan({
	threshold: 100
});

regionfive.bind(tapElementfive, pan, function(e){
  var textElement = document.getElementById('five');
  textElement.innerHTML = "dragged";
 tapElementfive.style.background='#e54237';
   c=1;
  console.log("working");
  if (x==1&&y==1&&z==1&&c==1&&a==1){
      unlocked= "Good job it's unlocked";
      document.getElementById("lock").innerHTML = unlocked;
  } 

})

//Get random number. In this case it is used when switching colors at the top of the page. The colors doesn't have a purpose yet.
function getRandNum(min, max, decimals) {
  decimals = (decimals) ? decimals : 0;
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(decimals));
}
 
/*function setOutput(data){
  console.log('here');
  
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++){
    outputStr += data[i][0] + ": " + data[i][1] + ((i===data.length-1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}  */


