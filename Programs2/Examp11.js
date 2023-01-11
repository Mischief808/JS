console.log("11.Program to print reverse of digit of numbers");
var  n=675,reverse=0,remainder;
while(n>0)
{
remainder=n%10;
reverse=reverse*10+remainder;
n=n/10;
}
console.log("reversed number is :",reverse);

