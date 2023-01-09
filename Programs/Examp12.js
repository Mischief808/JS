console.log("12.Program to print givn three numbers in descending order");
var p=19;
var q=8;
var r=14;
if(p>q&&p>r)
{
  if(q>r)
    {
       console.log(p+","+q+","+r);
     }
   else
     {
        console.log(p+","+r+","+q);
      }
}
else if(q>p&&q>r)
{
   if(p>r) 
      {
            console.log(q+","+p+","+r);
       }
   else 
     {
           console.log(q+","+r+","+p);
     }
}
else if(r>p&&r>q)
{
    if(p>q)
    {
       console.log(r+","+p+","+q);
     }
    else 
     {
       console.log(r+","+q+","+p);
      }
}