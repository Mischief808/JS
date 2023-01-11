console.log("13.Program to print fibonacci series upto given number");
var a=0,b=1,i=0,c;
console.log("Fibonacci series is:");
console.log(a);
console.log(b);
while(i<=20)
{
c=a+b;
console.log(c);
a=b;
b=c;
i++;
}