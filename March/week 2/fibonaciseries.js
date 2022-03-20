/*Assignment 3
****print fibonacci series
*/
function fibonacci(num){
  let n1=0,n2=1,n3,i    
   console.log("Fibonnacci:")        
   console.log(n1,n2) //printing 0 and 1    
   for(i=2;i<num;++i) //loop starts from 2 because 0 and 1 are already printed    
   {    
    n3=n1+n2;    
    console.log(n3)    
    n1=n2;    
    n2=n3;    
   }    
  }
    fibonacci(10); //calling of fibonnacci