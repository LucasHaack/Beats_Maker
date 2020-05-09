//Right now numbers 1,2,3,4 are assigned to audioOne, audioTwo, etc. Change variable names at some point. Probably something like guitarTapOne

let audioOne = new Audio("./Audio_Assets/guitar_one.mp3");
let audioTwo = new Audio("./Audio_Assets/guitar_two.mp3");
let audioThree = new Audio("./Audio_Assets/guitar_three.mp3");
let audioFour = new Audio("./Audio_Assets/guitar_four.mp3");
//audioOne.play();

//Key Down
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {

//Green Buttons Key Down

      //case "Down": // IE/Edge specific value
      case "7":
        greenOne.style.background = "rgb(11, 255, 11)";
        greenOne.style.scale="1.125";
        greenOne.style.transitionDuration=".15s";
        
        break;
      //case "Up": // IE/Edge specific value
      case "8":
        greenTwo.style.background = "rgb(11, 255, 11)";
        greenTwo.style.scale="1.125";
        greenTwo.style.transitionDuration=".15s";
        this.console.log("8");
        break;

        //case "Up": // IE/Edge specific value
      case "9":
        greenThree.style.background = "rgb(11, 255, 11)";
        greenThree.style.scale="1.125";
        greenThree.style.transitionDuration=".15s";
        this.console.log("9");
        break;

//Blue Buttons Key Down
      case "4":
        blueOne.style.background = "rgb(0, 162, 255)";
        blueOne.style.scale="1.125";
        blueOne.style.transitionDuration=".15s";
        this.console.log("4");

        audioFour.play();
        break;

      case "5":
        blueTwo.style.background = "rgb(0, 162, 255)";
        blueTwo.style.scale="1.125";
        blueTwo.style.transitionDuration=".15s";
        this.console.log("5");

        audioFour.play();
        break;

      case "6":
        blueThree.style.background = "rgb(0, 162, 255)";
        blueThree.style.scale="1.125";
        blueThree.style.transitionDuration=".15s";
        this.console.log("6");
        break;

//Red Buttons Key Down
      case "1":
        redOne.style.background = "rgb(253, 8, 49)";
        redOne.style.scale="1.125";
        redOne.style.transitionDuration=".15s";
        this.console.log("1");

        audioOne.play();
        break;
  
      case "2":
        redTwo.style.background = "rgb(253, 8, 49)";
        redTwo.style.scale="1.125";
        redTwo.style.transitionDuration=".15s";
        this.console.log("2");

        audioTwo.play();
        break;
  
      case "3":
        redThree.style.background = "rgb(253, 8, 49)";
        redThree.style.scale="1.125";
        redThree.style.transitionDuration=".15s";
        this.console.log("3");

        audioThree.play();
        break;    

//Purple Buttons Key Down
      case "0":
        purpleOne.style.background = "rgb(206, 1, 206)";
        purpleOne.style.scale="1.125";
        purpleOne.style.transitionDuration=".15s";
        this.console.log("0");
        break;

      case ".":
        purpleTwo.style.background = "rgb(206, 1, 206)";
        purpleTwo.style.scale="1.125";
        purpleTwo.style.transitionDuration=".15s";
        this.console.log(".");
        break;

      case "Enter":
        purpleThree.style.background = "rgb(206, 1, 206)";
        purpleThree.style.scale="1.125";
        purpleThree.style.transitionDuration=".15s";
        this.console.log("Enter");
        break;        
}

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

  
  //Key Up
  window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {

//Green Buttons Key Up
      //case "7": // IE/Edge specific value
      case "7":
        greenOne.style.background = "#25d302";
        greenOne.style.scale="1"
        this.console.log("Numpad7 up")

        break;


      //case "7": // IE/Edge specific value
      case "8":
        greenTwo.style.background = "#25d302";
        greenTwo.style.scale="1"
        this.console.log("Numpad8 up")
        break;

      //case "7": // IE/Edge specific value
      case "9":
        greenThree.style.background = "#25d302";
        greenThree.style.scale="1"
        this.console.log("Numpad9 up")
        break;


//Blue Buttons Key Up
      case "4":
        blueOne.style.background = "#003afa";
        blueOne.style.scale="1"
        this.console.log("Numpad4 up")

        audioFour.pause();
        audioFour.currentTime = 0;
        break;
          
      case "5":
        blueTwo.style.background = "#003afa";
        blueTwo.style.scale="1"
        this.console.log("Numpad5 up")

        audioFour.pause();
        audioFour.currentTime = 0;
        break;

      case "6":
        blueThree.style.background = "#003afa";
        blueThree.style.scale="1"
        this.console.log("Numpad6 up")
        break;

//Red Buttons Key Up
      case "1":
        redOne.style.background = "#d30000";
        redOne.style.scale="1"
        this.console.log("Numpad1 up")

        audioOne.pause();
        audioOne.currentTime = 0;
        break;
          
      case "2":
        redTwo.style.background = "#d30000";
        redTwo.style.scale="1"
        this.console.log("Numpad2 up")

        audioTwo.pause();
        audioTwo.currentTime = 0;
        break;

      case "3":
        redThree.style.background = "#d30000";
        redThree.style.scale="1"
        this.console.log("Numpad3 up")

        audioThree.pause();
        audioThree.currentTime = 0;
        break;

//Purple Buttons Key Up
      case "0":
        purpleOne.style.background = "#640057";
        purpleOne.style.scale="1"
        this.console.log("Numpad0 up")
        break;
          
      case ".":
        purpleTwo.style.background = "#640057";
        purpleTwo.style.scale="1"
        this.console.log(". up")
        break;

      case "Enter":
        purpleThree.style.background = "#640057";
        purpleThree.style.scale="1"
        this.console.log("Enter up")
        break;
}

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);