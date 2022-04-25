// Store the wallet amount to your local storage with key "amount"
let amount=[];
let totalwallet;
let wallet=document.getElementById("wallet");
document.getElementById("add_to_wallet").addEventListener("click",function()
{
    var money=document.getElementById("amount").value;
    amount.push(money);
     totalwallet=amount.reduce(function(c,v)
{
    return c+Number(v);
},0)
console.log(totalwallet)

     localStorage.setItem("amount",JSON.stringify(totalwallet));
     wallet.innerText=JSON.parse(localStorage.getItem("amount"))||0;
});
wallet.innerText=JSON.parse(localStorage.getItem("amount"))||0;
