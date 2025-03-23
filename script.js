
let systemNuber=10;

let text=document.getElementById("text");

function m(){  
        let gessValue=document.getElementById("number").value;
        let gess=parseInt(gessValue);
        document.getElementById("number").value=""; 
        
            if(gess>systemNuber){            
                text.innerText="too high.. gess again";
            }else if(gess<systemNuber){        
                text.innerText="too low.. gess again";
            }else if(gess===10){
            text.innerText="congratulation..you are a winner";
            }else{
                text.innerText="invalid input";
            }              
    }        

    
    
