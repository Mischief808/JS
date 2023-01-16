console.log("This is nesting function");
var i=1;
function nest()
{
console.log("Nesting Function",i);
i++;
nest();
}
nest(); 			 



