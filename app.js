//https://hacks.mozilla.org/2016/04/record-almost-everything-in-the-browser-with-mediarecorder/
//add recording feature via link above


//fetch();

import * as Tone from "tone";

//Variable names

//Recording related variables
let recordBtn = document.getElementById("recordBtn");
let recordingTimeMS = 60000; //One minute of recording time

//Green variable names
let greenOne = document.getElementById("greenOne");
let greenTwo = document.getElementById("greenTwo");
let greenThree = document.getElementById("greenThree");

//Blue variable names
let blueOne = document.getElementById("blueOne");
let blueTwo = document.getElementById("blueTwo");
let blueThree = document.getElementById("blueThree");

//Red variable names
let redOne = document.getElementById("redOne");
let redTwo = document.getElementById("redTwo");
let redThree = document.getElementById("redThree");

//Purple variable names
let purpleOne = document.getElementById("purpleOne");
let purpleTwo = document.getElementById("purpleTwo");
let purpleThree = document.getElementById("purpleThree");


//Audio Variables
let audioOne = new Audio("./Audio_Assets/guitar_one.mp3");
let audioTwo = new Audio("./Audio_Assets/guitar_two.mp3");
let audioThree = new Audio("./Audio_Assets/guitar_three.mp3");
let audioFour = new Audio("./Audio_Assets/guitar_four.mp3");

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();



//Record Mousedown
recordBtn.addEventListener('mousedown', e => {
  console.log("RecordBtn Clicked!")
});

//Green mousedown/mouseup
greenOne.addEventListener('mousedown', e => {
  audioOne.play();
});

greenOne.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

greenTwo.addEventListener('mousedown', e => {
  audioOne.play();
});

greenTwo.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

greenThree.addEventListener('mousedown', e => {
  audioOne.play();
});

greenThree.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

//Blue mousedown/mouseup
blueOne.addEventListener('mousedown', e => {
  audioOne.play();
});

blueOne.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

blueTwo.addEventListener('mousedown', e => {
  audioOne.play();
});

blueTwo.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

blueThree.addEventListener('mousedown', e => {
  audioOne.play();
});

blueThree.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

//Red mousedown/mouseup
redOne.addEventListener('mousedown', e => {
  audioOne.play();
});

redOne.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

redTwo.addEventListener('mousedown', e => {
  audioOne.play();
});

redTwo.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

redThree.addEventListener('mousedown', e => {
  audioOne.play();
});

redThree.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});


//Purple mousedown/mouseup
purpleOne.addEventListener('mousedown', e => {
  audioOne.play();
});

purpleOne.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

purpleTwo.addEventListener('mousedown', e => {
  audioOne.play();
});

purpleTwo.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

purpleThree.addEventListener('mousedown', e => {
  audioOne.play();
});

purpleThree.addEventListener('mouseup', e => {
  audioOne.pause();
  audioOne.currentTime = 0;
});

//Key Down

document.addEventListener('keydown', function(event) {

  //Purple Buttons Key Down
  if (event.code == 'Numpad0') {
    purpleOne.style.background = "rgb(206, 1, 206)";
    purpleOne.style.scale="1.125";
    purpleOne.style.transitionDuration=".15s";
    console.log("0");

    //play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
  }

  if (event.code == 'NumpadDecimal') {
    purpleTwo.style.background = "rgb(206, 1, 206)";
    purpleTwo.style.scale="1.125";
    purpleTwo.style.transitionDuration=".15s";
    console.log(".");
  }
//this probably won't work
  if (event.key == 'Enter') {
    purpleThree.style.background = "rgb(206, 1, 206)";
    purpleThree.style.scale="1.125";
    purpleThree.style.transitionDuration=".15s";
    console.log("Enter");
  }


  //Red Buttons Key Down
  if (event.code == 'Numpad1') {

    redOne.style.background = "rgb(253, 8, 49)";
    redOne.style.scale="1.125";
    redOne.style.transitionDuration=".15s";
    console.log("1");

    audioOne.play();
  }

  if (event.code == 'Numpad2') {
    redTwo.style.background = "rgb(253, 8, 49)";
    redTwo.style.scale="1.125";
    redTwo.style.transitionDuration=".15s";
    console.log("2");

    audioTwo.play();
  }

  if (event.code == 'Numpad3') {
    redThree.style.background = "rgb(253, 8, 49)";
    redThree.style.scale="1.125";
    redThree.style.transitionDuration=".15s";
    console.log("3");

    audioThree.play();
  }


  //Blue Buttons Key Down
  if (event.code == 'Numpad4') {
    blueOne.style.background = "rgb(0, 162, 255)";
    blueOne.style.scale="1.125";
    blueOne.style.transitionDuration=".15s";
    console.log("4");

    audioFour.play();
  }

  if (event.code == 'Numpad5') {
    blueTwo.style.background = "rgb(0, 162, 255)";
    blueTwo.style.scale="1.125";
    blueTwo.style.transitionDuration=".15s";
    console.log("5");

    audioFour.play();
  }

  if (event.code == 'Numpad6') {
    blueThree.style.background = "rgb(0, 162, 255)";
    blueThree.style.scale="1.125";
    blueThree.style.transitionDuration=".15s";
    console.log("6");
  }

  //Green Buttons Key Down
  if (event.code == 'Numpad7') {
    greenOne.style.background = "rgb(11, 255, 11)";
    greenOne.style.scale="1.125";
    greenOne.style.transitionDuration=".15s";
    console.log("7");
  }
  
  if (event.code == 'Numpad8') {
    greenTwo.style.background = "rgb(11, 255, 11)";
    greenTwo.style.scale="1.125";
    greenTwo.style.transitionDuration=".15s";
    console.log("8");
  }
  if (event.code == 'Numpad9') {
    greenThree.style.background = "rgb(11, 255, 11)";
    greenThree.style.scale="1.125";
    greenThree.style.transitionDuration=".15s";
    console.log("9");
  }

});

//Key Up

document.addEventListener('keyup', function(event) {

  //Purple Buttons Key Up
  if (event.code == 'Numpad0') {
    purpleOne.style.background = "#640057";
    purpleOne.style.scale="1"
    console.log("Numpad0 up")
  }

  if (event.code == 'NumpadDecimal') {
    purpleTwo.style.background = "#640057";
    purpleTwo.style.scale="1"
    console.log(". up")
  }

  if (event.key == "Enter") {
    purpleThree.style.background = "#640057";
    purpleThree.style.scale="1"
    console.log("Enter up")
  }


  //Red Buttons Key Up
  if (event.code == 'Numpad1') {

    redOne.style.background = "#d30000";
    redOne.style.scale="1"
    console.log("Numpad1 up")

    audioOne.pause();
    audioOne.currentTime = 0;
  }

  if (event.code == 'Numpad2') {
    redTwo.style.background = "#d30000";
    redTwo.style.scale="1"
    console.log("Numpad2 up")

    audioTwo.pause();
    audioTwo.currentTime = 0;
  }

  if (event.code == 'Numpad3') {
    redThree.style.background = "#d30000";
    redThree.style.scale="1"
    console.log("Numpad3 up")

    audioThree.pause();
    audioThree.currentTime = 0;
  }


  //Blue Buttons Key Up
  if (event.code == 'Numpad4') {
    blueOne.style.background = "#003afa";
    blueOne.style.scale="1"
    console.log("Numpad4 up")

    audioFour.pause();
    audioFour.currentTime = 0;
  }

  if (event.code == 'Numpad5') {
    blueTwo.style.background = "#003afa";
    blueTwo.style.scale="1"
    console.log("Numpad5 up")

    audioFour.pause();
    audioFour.currentTime = 0;
  }

  if (event.code == 'Numpad6') {
    blueThree.style.background = "#003afa";
    blueThree.style.scale="1"
    console.log("Numpad6 up")
  }

  //Green Buttons Key Up
  if (event.code == 'Numpad7') {
    greenOne.style.background = "#25d302";
    greenOne.style.scale="1"
    console.log("Numpad7 up")
  }
  
  if (event.code == 'Numpad8') {
    greenTwo.style.background = "#25d302";
    greenTwo.style.scale="1"
    console.log("Numpad8 up")
  }
  if (event.code == 'Numpad9') {
    greenThree.style.background = "#25d302";
    greenThree.style.scale="1"
    console.log("Numpad9 up")
  }

});

// window.addEventListener("keydown", function (event) {
//     if (event.defaultPrevented) {
//       return; // Do nothing if the event was already processed
//     }

//     switch (event.key) {

// //Green Buttons Key Down

//       //case "Down": // IE/Edge specific value
//       case "7":
//         // greenOne.style.background = "rgb(11, 255, 11)";
//         // greenOne.style.scale="1.125";
//         // greenOne.style.transitionDuration=".15s";
        
//         break;
//       //case "Up": // IE/Edge specific value
//       case "8":
//         // greenTwo.style.background = "rgb(11, 255, 11)";
//         // greenTwo.style.scale="1.125";
//         // greenTwo.style.transitionDuration=".15s";
//         // this.console.log("8");
//         break;

//         //case "Up": // IE/Edge specific value
//       case "9":
//         // greenThree.style.background = "rgb(11, 255, 11)";
//         // greenThree.style.scale="1.125";
//         // greenThree.style.transitionDuration=".15s";
//         // this.console.log("9");
//         break;

// //Blue Buttons Key Down
//       case "4":
//         // blueOne.style.background = "rgb(0, 162, 255)";
//         // blueOne.style.scale="1.125";
//         // blueOne.style.transitionDuration=".15s";
//         // this.console.log("4");

//         // audioFour.play();
//         break;

//       case "5":
//         // blueTwo.style.background = "rgb(0, 162, 255)";
//         // blueTwo.style.scale="1.125";
//         // blueTwo.style.transitionDuration=".15s";
//         // this.console.log("5");

//         // audioFour.play();
//         break;

//       case "6":
//         // blueThree.style.background = "rgb(0, 162, 255)";
//         // blueThree.style.scale="1.125";
//         // blueThree.style.transitionDuration=".15s";
//         // this.console.log("6");
//         break;

// //Red Buttons Key Down
//       // case "1":
//       //   redOne.style.background = "rgb(253, 8, 49)";
//       //   redOne.style.scale="1.125";
//       //   redOne.style.transitionDuration=".15s";
//       //   this.console.log("1");

//       //   audioOne.play();
//       //   break;
  
//       case "2":
//         // redTwo.style.background = "rgb(253, 8, 49)";
//         // redTwo.style.scale="1.125";
//         // redTwo.style.transitionDuration=".15s";
//         // this.console.log("2");

//         // audioTwo.play();
//         break;
  
//       case "3":
//         // redThree.style.background = "rgb(253, 8, 49)";
//         // redThree.style.scale="1.125";
//         // redThree.style.transitionDuration=".15s";
//         // this.console.log("3");

//         // audioThree.play();
//         break;    

// //Purple Buttons Key Down
//       case "0":
//         // purpleOne.style.background = "rgb(206, 1, 206)";
//         // purpleOne.style.scale="1.125";
//         // purpleOne.style.transitionDuration=".15s";
//         // this.console.log("0");
//         break;

//       case ".":
//         // purpleTwo.style.background = "rgb(206, 1, 206)";
//         // purpleTwo.style.scale="1.125";
//         // purpleTwo.style.transitionDuration=".15s";
//         // this.console.log(".");
//         break;

//       case "Enter":
//         purpleThree.style.background = "rgb(206, 1, 206)";
//         purpleThree.style.scale="1.125";
//         purpleThree.style.transitionDuration=".15s";
//         this.console.log("Enter");
//         break;        
// }

//     // Cancel the default action to avoid it being handled twice
//     event.preventDefault();
//   }, true);

  
  //Key Up
  // window.addEventListener("keyup", function (event) {
  //   if (event.defaultPrevented) {
  //     return; // Do nothing if the event was already processed
  //   }

  //   switch (event.key) {

//Green Buttons Key Up
      //case "7": // IE/Edge specific value
      // case "7":
      //   greenOne.style.background = "#25d302";
      //   greenOne.style.scale="1"
      //   this.console.log("Numpad7 up")

      //   break;


      //case "7": // IE/Edge specific value
      // case "8":
      //   greenTwo.style.background = "#25d302";
      //   greenTwo.style.scale="1"
      //   this.console.log("Numpad8 up")
      //   break;

      //case "7": // IE/Edge specific value
      // case "9":
      //   greenThree.style.background = "#25d302";
      //   greenThree.style.scale="1"
      //   this.console.log("Numpad9 up")
      //   break;


//Blue Buttons Key Up
      // case "4":
      //   blueOne.style.background = "#003afa";
      //   blueOne.style.scale="1"
      //   this.console.log("Numpad4 up")

      //   audioFour.pause();
      //   audioFour.currentTime = 0;
      //   break;
          
      // case "5":
      //   blueTwo.style.background = "#003afa";
      //   blueTwo.style.scale="1"
      //   this.console.log("Numpad5 up")

      //   audioFour.pause();
      //   audioFour.currentTime = 0;
      //   break;

      // case "6":
      //   blueThree.style.background = "#003afa";
      //   blueThree.style.scale="1"
      //   this.console.log("Numpad6 up")
      //   break;

//Red Buttons Key Up
      // case "1":
      //   redOne.style.background = "#d30000";
      //   redOne.style.scale="1"
      //   this.console.log("Numpad1 up")

      //   audioOne.pause();
      //   audioOne.currentTime = 0;
      //   break;
          
      // case "2":
      //   redTwo.style.background = "#d30000";
      //   redTwo.style.scale="1"
      //   this.console.log("Numpad2 up")

      //   audioTwo.pause();
      //   audioTwo.currentTime = 0;
      //   break;

      // case "3":
      //   redThree.style.background = "#d30000";
      //   redThree.style.scale="1"
      //   this.console.log("Numpad3 up")

      //   audioThree.pause();
      //   audioThree.currentTime = 0;
      //   break;

//Purple Buttons Key Up
      // case "0":
      //   purpleOne.style.background = "#640057";
      //   purpleOne.style.scale="1"
      //   this.console.log("Numpad0 up")
      //   break;
          
      // case ".":
      //   purpleTwo.style.background = "#640057";
      //   purpleTwo.style.scale="1"
      //   this.console.log(". up")
      //   break;

//       case "Enter":
//         purpleThree.style.background = "#640057";
//         purpleThree.style.scale="1"
//         this.console.log("Enter up")
//         break;
// }

    // Cancel the default action to avoid it being handled twice
  //   event.preventDefault();
  // }, true);