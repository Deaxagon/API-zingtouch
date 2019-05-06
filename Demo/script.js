

var colorBlockTwo = ['blue', 'yellow','red','violet','orange','grey'];
var colorThree = ['Teal', 'Fuchsia','purple','green','Olive','grey'];
var colorSelect2=-1;
var colorSelect=-1;



var tapElementOne = document.getElementById('two'); 
var elementTwo=document.getElementById('one');
var elementThree=document.getElementById('three');
var elementFour=document.getElementById('four');
var topText=document.getElementById('lock');
var x=0;
var y=0;
var c;
var z;

var regionOne = new ZingTouch.Region(tapElementOne, true, false); //creates a gesture region where any of the gestures can be performed

var chainObject = regionOne.bind(tapElementOne);

chainObject
	.tap(function(e){
  colorSelect=0;
  tapElementOne.style.backgroundColor=colorBlockTwo[colorSelect];
  
	})
	.swipe(function(e){
		elementTwo.innerHTML = "tappable";
  elementTwo.classList.add('tappable');
   if(colorSelect<colorBlockTwo.length){
     tapElementOne.style.backgroundColor='grey';
    colorSelect++;
  tapElementOne.style.backgroundColor=colorBlockTwo[colorSelect+1];
  elementTwo.style.backgroundColor=colorBlockTwo[colorSelect];
    console.log(colorSelect+"colorselect");
     }
 
  
 if(colorSelect==4){
    regionOne.unregister('swipe');
   regionOne.unregister('tap');
   tapElementOne.innerHTML = ""; 
   tapElementOne.classList.remove('tappable');
  }
	}, true)


var regionTwo= new ZingTouch.Region(document.getElementById('one'));

var myTapGesture = new ZingTouch.Tap({ maxDelay : 200 });
regionTwo.register('customTap', myTapGesture);

var mySwipe=new ZingTouch.Swipe({maxRestTime: 200});
regionTwo.register('customSwipe', mySwipe);

var chainObject2 = regionTwo.bind(elementTwo);

chainObject2
	.customTap(function(e){
 elementFour.style.backgroundColor=colorBlockTwo[colorSelect]; 
 if(colorSelect==1){
 elementFour.classList.add('tappable');
 elementFour.innerHTML = "getting close";
 elementTwo.innerHTML="";
  }
	})
	.customSwipe(function(e){
     if(colorSelect<colorBlockTwo.length){
      y=colorSelect;
  //   tapElementOne.style.backgroundColor='grey';
    colorSelect++;
 // elementTwo.style.backgroundColor=colorBlockTwo[colorSelect-2];
 // tapElementOne.style.backgroundColor=colorBlockTwo[colorSelect-1];
    console.log(colorSelect);
     }
  if(colorSelect==3){
  // regionTwo.unregister('customSwipe'); // needs to be individual colorSelect that counts in different ways
  }
	}, true)


var regionThree= new ZingTouch.Region(document.getElementById('three'));

var threeTap= new ZingTouch.Tap({ maxDelay : 200, numInputs: 1  });
regionThree.register('Tap', threeTap);

var threeSwipe=new ZingTouch.Swipe({maxRestTime: 200});
regionThree.register('Swipe', threeSwipe);

var chainObject3 = regionThree.bind(elementThree);

chainObject3
	.Tap(function(e){
  colorSelect2=0;
  elementThree.style.backgroundColor=colorThree[colorSelect2];
  console.log(colorSelect2+" colorselect2");
  
//  elementThree.innerHTML="tapped";
	})
	.Swipe(function(e){
  	
  //elementFour.classList.add('tappable');
     if(colorSelect2<colorThree.length){
     elementThree.style.backgroundColor='grey';
    colorSelect2++;
  elementThree.style.backgroundColor=colorThree[colorSelect2+1];
  elementFour.style.backgroundColor=colorThree[colorSelect2];
    console.log(colorSelect2+" colorselect2");
     }
 
  if(colorSelect2==4){
   regionThree.unregister('Swipe');
    regionThree.unregister('Tap');
    elementThree.innerHTML = ""; 
    elementThree.classList.remove('tappable');
  }
	}, true)

var regionFour = new ZingTouch.Region(elementFour, true, false);
var fourTap= new ZingTouch.Tap({ maxDelay : 200, numInputs: 1  });

regionFour.bind(elementFour, fourTap, function(e){
  x=colorSelect2;
  elementTwo.style.backgroundColor=colorThree[colorSelect2];
  console.log(x+" x starts now");
  console.log(y+" y starts now");
console.log(colorSelect+"colorselect");
console.log(colorSelect2+" colorselect2");
  if(x==2&&y==0&&colorSelect==1&&colorSelect2==2){
  console.log("win");
topText.innerHTML="You made it!"; 
  document.body.style.backgroundColor = "#4A4A4A";
}
})






 










