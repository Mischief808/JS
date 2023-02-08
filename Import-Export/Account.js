class Account
{
 constructor(id,name)
{
this.Acc_id=id;
this.Acc_name=name
}
new_account()
{
console.log("New Account Opened Successfully");
let min_bal=()=>
{
console.log("Account holder must maintain a Minimum Balance is 500 Rupees");
}
min_bal();
}
 
}
module.exports=Account;
