let greeting;
const button=document.querySelector('button')



  function checkTime(){
      const clock=prompt(`what is the time now?`)
      if (clock ==="" || clock===null) {
        greeting = "Please Input time";
      } else if (clock < 10) {
        greeting = "Good Morning";
      } else if(clock<18){
        greeting = "Good Afternoon";
      }
      else if(clock<22){
          greeting="Good Evening"
      }
      else if(clock<23 || clock==23){
          greeting="Good Night"
      }
      
      else {
          greeting="Please Input correct Time"
      }
      
      

      
      alert(`Hey ${greeting}`)
  }
button.addEventListener('click', checkTime)

