// Dead zone not functioning cos of my use of var

// onload the whole page before function kick in
window.onload = function () {
  // declaring all varible + innitialization + get element methods
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button_start');
    var buttonStop = document.getElementById('button_stop');
    var buttonReset = document.getElementById('button_reset');
    var Interval ;

    // onclick event
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
      //set interval function is called with set of parameters
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
        //interval innitialized variable is called(setInterval func)
         clearInterval(Interval);
    }
    
    //onclick event fired on Reset button
    buttonReset.onclick = function() {
       clearInterval(Interval);
       // new set of innitialization for js engine
       // innitialization possible cos of var declaration
      tens = "00";
        seconds = "00";
        // this will make buttonTens and second be set to 00
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
    // the if statements
     
    // start timer function Y=f(x)
    function startTimer () {
      // innitialize counting from 00++
      tens++; 
      //when tens counter get to 9 or less append current tens value
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      // else if tens greater than 9 show current tens value
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 

      // else if tens counter becomes greater than 99
      
      if (tens > 99) {
        // start seconds counting
        console.log("seconds");
        // iterate seconds
        seconds++;
        //show 0 plus second iterated vlaues
        appendSeconds.innerHTML = "0" + seconds;
        // set tens to 0. only available for this block
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      //else 
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }