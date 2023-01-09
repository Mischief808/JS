console.log("11.Program to print given 3 numbers in ascending orders");
var x=8;
var y=1;
var z=3;
if(x<y&&x<z)
{
  if(y<z)
       {
             console.log(x+","+y+","+z);
         }
    else 
       {
             console.log(x+","+z+","+y);
        }    
}
else if(y<x&&y<z)
{
   if(x<z)
      {
         console.log(y+","+x+","+z);
       }
     else
     {
        console.log(y+","+z+","+x);
        }
}
else if(z<y&&z<x)
{
    if(y<x)
      {
           console.log(z+","+y+","+x);
       }
      else 
         {
              console.log(z+","+x+","+y);
          }
}