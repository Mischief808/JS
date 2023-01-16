function outer()
{
      console.log("This is outside function");
 
    function inner()
       {
            console.log("This is inner function");
          function toinner()
       {
            console.log("This is inside inner function");
        }
       toinner();
        }
        inner();
}
outer();

 

