const Account=require('./Account')
class Savacc extends Account
{
constructor(id,name,amount)
{
super(id,name);
this.amount=amount;
}
deposit_amount(DeAmn)
{
this.amount=this.amount+DeAmn;
}
}
let s1=new Savacc('101',"George",500);
console.log(s1);
s1.new_account();
s1.deposit_amount(67000);
console.log(s1);