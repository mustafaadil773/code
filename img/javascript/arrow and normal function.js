//ARROW FUNCTION VS NORMAL FUNCTION
// NORMAL FUNCTION SYNTAX
function a(a,b){
    console.log(a+b) 
}
a(37,35)

 //ARROW FUNCTION SYNTAX    
 const a=(a,b)=>{
    console.log(a+b)        
 }
 a(37,35)

 // agar arrow function ki body sirf ek expression ho,to return statement likhene ki zaroorat nahi hai

 //return
 function a (a,b){
    return a+b
 }
 console.log(a(37,35))

 //arrow
 const a=(a,b)=> a+b
 console.log(a(37,35))