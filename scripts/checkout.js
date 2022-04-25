// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount"))||[];
let container=document.getElementById("movie");
let data=JSON.parse(localStorage.getItem("movie"))||[];
let amount=JSON.parse(localStorage.getItem("amount"))||0;
data.map(function(el)
{
   let img=document.createElement("img");
   img.src=el.Poster;
   let h2=document.createElement("h2");
   h2.innerText=el.Title;
   container.append(img,h2);
})
document.getElementById("confirm").addEventListener("click",function()
{
   if(amount<100)
   {
       alert("Insufficient Balance !");
   }
   else
   {
       amount=amount-100;
       localStorage.setItem("amount",JSON.stringify(amount));
       alert("Booking Successful!");
   }
})