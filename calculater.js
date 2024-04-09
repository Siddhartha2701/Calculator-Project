
let buttons= document.getElementsByClassName('button');

let displayScren=document.getElementById('display');

let opperator1 = null;
let opperator2 = null;
let result=null;
let sign;
displayScren.textContent='0';
// ===================================================Buttons accessing==========================================================
for(i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click', function(){

        let value =this.getAttribute('data-value');
       
        

        //=============================================== Clear Screen===========================================================================
        
          if (value =='AC') {
            displayScren.textContent='0';
            opperator1=null;
            opperator2=null;
            result=null;
            sign=undefine;
            
        }


        // ================================================Delete==============================================================================
        
        
        else if(value=='del'){

            if (displayScren.textContent.length == 1) {
                displayScren.textContent = '0';
            } 

            else{
            displayScren.textContent = displayScren.textContent.slice(0, -1);
            }
            
        }


        // ================================================Addition=======================================================================
         
        else if(opperator1 != null && opperator2 == null && value=='+' && result==null){

            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent=" ";

            result= opperator1 + opperator2;

            opperator2=null;

            displayScren.textContent=result;

    
        }



        else if (value=='+') {

            sign=value; 

            opperator1 = parseFloat(displayScren.textContent);

            displayScren.textContent='';

            result=null;

            
        }


           

        // ======================================================Subtraction===============================================================
        
        
        
        else if(opperator1 != null && opperator2 == null && value=='-' && result==null){

            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent=" ";

            result= opperator1 - opperator2;

            opperator2=null;

            displayScren.textContent=result;

        

        }

        else if (value=='-') {


            sign=value; 
            
            opperator1 = parseFloat(displayScren.textContent);

            displayScren.textContent='';


            result=null;

        }

        // =============================================================Division=============================================================

       
       
        else if(opperator1 != null && opperator2 == null && value=='/' && result==null){

            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent=" ";

            result= opperator1 / opperator2;

            opperator2=null;

            displayScren.textContent=result;

        }
        
        
        
        
        else if (value=='/') {


            sign=value; 
            
            opperator1 = parseFloat(displayScren.textContent);

            displayScren.textContent='';

            result=null;

        }

        // ==============================================================Multiplication=======================================================

        else if(opperator1 != null && opperator2 == null && value=='*' && result==null){

            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent=" ";

            result= opperator1 * opperator2;

            opperator2=null;

            displayScren.textContent=result;

        }
        
        
        
        else if (value=='*') {

            sign=value; 
            
            opperator1 = parseFloat(displayScren.textContent);

            displayScren.textContent='';


            result=null;

        }


        // ==================================================================Percentile===========================================================

        else if(opperator1 != null && opperator2 == null && value=='%' && result==null){

            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent=" ";

            result= opperator1 % opperator2;

            opperator2=null;

            displayScren.textContent=result;

        

        }
        
        
        
        else if (value=='%') {

            sign=value; 
            
            opperator1 = parseFloat(displayScren.textContent);

            displayScren.textContent='';

            result=null;

        }


        // ====================================================================EqualTo============================================================

        else if( value== '=' ){



            opperator2 = parseFloat(displayScren.textContent);

            displayScren.textContent='';
    
            result= eval(opperator1 +sign+ opperator2);
        
            displayScren.textContent=result;  


        }


        // ==========================================================Default====================================================================
        else {
    // Check if there's already a result
              if (result !== null) {
                 displayScren.textContent = value; // Set the display to the pressed number
                result = null; // Reset the result
                opperator1 = parseFloat(displayScren.textContent); // Set the pressed number as operand 1
            }
             else {
                if (displayScren.textContent=='0') {
                    displayScren.textContent='';
                    displayScren.textContent +=value;
                    
                }
                else{
                 displayScren.textContent += value; // Append the pressed number to the display
                }
               }
        }

    });
}



// need to modify the code

             
//             opperator1=result;
//             opperator2=null;
//             result=null

//             console.log(opperator1, opperator2, result);

//             need to write a if statement and the statement will be if the number is pressed then the result value should me removed but if the 
//              opperator is pressed then it should perform the approprate oppetarion 

//              to continue the calculator operation the result should be opperator1 and opperator2 should be null after calculating.


// 
 


// let value='opperator';

// if (value==sign(value))
//  {
//     console.log(sign(value));
// }


// function sign(opp){

//     let opperator =['+', '-','*','/','%'];


//     for(let i=0;i<opperator.length;i++){
//         if(opp==opperator[i]){
//            return opperator[i];
//            console.log(opperator[i]);
//         }
        

//     }

// }






