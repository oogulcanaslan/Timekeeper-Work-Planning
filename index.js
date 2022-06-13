

/*

function anim() {
    let id = null;
    const elem = document.getElementById("animElement");   

  
   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

 function frame() {
    //   if (pos == 200) {
    //     clearInterval(id);
    //   } 
      
      if(keyboardController.right) {
        pos++; 
        elem.style.left = pos + "px"; 
      }
      if(keyboardController.left) {
        pos--; 
        elem.style.left = pos + "px"; 
      }
    }
    
    
  }




const keyboardController = (() => {
    document.addEventListener("keydown", inputEvent);
    document.addEventListener("keyup", inputEvent);
    const keyboardController = {
      right: false,
      left: false,
      up: false,
      any : false,
    };
  
  function inputEvent(event) {
  const status = event.type === "keydown"
      if (event.keyCode == 39) // up controller
      {
        keyboardController.right = status;
      } else if (event.keyCode == 37) { // right controller
        keyboardController.left = status;
      } else if (event.keyCode == 38) { //left controller
        keyboardController.up = status;
        event.preventDefault(); // to prevent the default functionality of event
      }
      if(status) { keyboardController.any = true } // must reset when used
    }
    return keyboardController;
  })();

*/

time=0
timerCount=0

statuss=""

function startTimer(){
    statuss="start"
      var wrongText=document.getElementById("wrongText")
    wrongText.style.color="red";
    wrongText.style.visibility="hidden";

   
}

function stopTimer(){
    statuss="stop"
}

function saveTimer(){
  if(statuss=="start" || statuss=="stop"){
    timerCount++;
    const node3 = document.createElement("h3");
    const textnode3 = document.createTextNode(timerCount);
    node3.appendChild(textnode3);
    document.getElementById("item"+timerCount).appendChild(node3);


    const node = document.createElement("p");
    const textnode = document.createTextNode(writeFormatEdit(time));
    node.appendChild(textnode);
    document.getElementById("item"+timerCount).appendChild(node);

   let note=document.getElementById("noteText").value;
    const node2 = document.createElement("label");
    const textnode2 = document.createTextNode(note);
    node2.appendChild(textnode2);
    document.getElementById("item"+timerCount).appendChild(node2);
    statuss="save"
    time=0
     document.getElementById("runningTime").innerHTML=writeFormatEdit(time)
  }
  else{
    var wrongText=document.getElementById("wrongText")
    wrongText.style.color="red";
    wrongText.style.visibility="visible";
  }
    
    
   
}



function write(){

   if(statuss=="start"){
          time++;
        //  document.getElementById("timeTextContainer").value=time
        document.getElementById("runningTime").innerHTML=writeFormatEdit(time)
         
    startTimer()
   }
  
//    
}


 hour=0;
    minute=0;
function writeFormatEdit(second){


    return    new Date(second * 1000).toISOString().slice(11, 19)
}




function main(){
    var textTimer;
    var wrongText=document.getElementById("wrongText")
    wrongText.style.color="red";
    wrongText.style.visibility="hidden";
  
    // document.getElementById("timeText").style.color="blue";


    let id=null
     id=setInterval(write,10)



   
    
    
    


//  console.log(keyboardController.up)

    
}






window.addEventListener("DOMContentLoaded",()=>main())