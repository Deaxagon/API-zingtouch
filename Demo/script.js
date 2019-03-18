




// swipe, before it was one tap gesture. This is the first square counted from the left.
var tapElementOne = document.getElementById('insideone'); 

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
  var Element = document.getElementById('insideone');
  tapElementOne.style.visibility="hidden";
  
  

 /* (function(element){ 
    setTimeout(function(){ // this function sets a timer for the gesture to reset.
     Element.innerHTML = "Swipe";
      Element.style.backgroundColor='#5073b7';
    //  Element.style.backgroundImage = "url ('https://cdn.glitch.com/df4e1adc-c839-444a-8e43-2a6562c72f15%2F41kfpJIBwcL._SS500.jpg?1551097542303') ";
    }, 1000);
  })(Element); */
})


// Here I set the second square to be a clickable object, since Zingtouch doesn't seem to have an option for changing the number of inputs after you have set it.

document.getElementById("two").addEventListener("click", function(){
  document.getElementById("two").style.background='#ef5e04';
  document.getElementById("two").style.backgroundImage="url('IMG_02.PNG')";
  document.getElementById("two").innerHTML = "One finger";
  
});

// This is the second square counted from the left.
var tapElementTwo = document.getElementById('two');

var TwoFingerTap = new ZingTouch.Tap({ // Creates a new gesture, before it was meant to be a two fingertap but now three. Under this you can set different behavior of the tap gesture.
  numInputs: 3,
  maxDelay: 1000
});

var regionTwo = new ZingTouch.Region(tapElementTwo, true, false); // Gets the area where the gesture will take place 
regionTwo.bind(tapElementTwo, TwoFingerTap, function(e){ // creates the area and binds the gesture( three tap) to it.


  var textElement = document.getElementById('two'); // The function is called and then executes these things
  textElement.innerHTML = "three fingers";
  textElement.style.background='#af541c';
  textElement.style.backgroundImage="url('IMG_03.PNG')";
    
  
    
}) 



// this is the third square, using a pinch gesture.
var tapElementfour = document.getElementById('three');
var regionfour = new ZingTouch.Region(tapElementfour, true, false);
var pinch=new ZingTouch.Pinch({ 
	distance: 10
});

regionfour.bind(tapElementfour, pinch, function(e){
  var textElement = document.getElementById('three');
  textElement.innerHTML = "Good job ";
 // textElement.style.backgroundColor='#ed470b';
 // textElement.style.width="950px";
  textElement.style.fontSize="11px";
  


  (function(element){
    setTimeout(function(){

    element.innerHTML = "Pinch me";
      textElement.style.width="500px";
     // textElement.style.backgroundColor='#f29137';
      textElement.style.fontSize="80px";
    }, 1000);
  })(textElement);  
})



// dragged gesture. The last square counted from the left.
var tapElementfive = document.getElementById('five');
var regionfive = new ZingTouch.Region(tapElementfive, true, false);
var pan=new ZingTouch.Pan({
	threshold: 100
});


 function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left ,
    top: rect.top 
  };
}


regionfive.bind(tapElementfive, pan, function(e){
  var textElement = document.getElementById('five');
  textElement.innerHTML=" ";
 textElement.style.background='#e54237';

  textElement.style.left='-100px';
   

  (function(element){
    setTimeout(function(){
      
     // textElement.style.background='#d16c0e';
    }, 1000);
  })(textElement);   
})








