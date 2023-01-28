function twodimension(a,b)
{
let arr=[];
for(i=0;i<a;i++)
{
for(j=0;j<b;j++)
{
arr[i]=[];
}
}
for(i=0;i<a;i++)
{
for(j=0;j<b;j++)
{
arr[i][j]=j;
}
}
return arr;
}
let a=3;
let b=4;
let result=twodimension(a,b);
console.log(result);