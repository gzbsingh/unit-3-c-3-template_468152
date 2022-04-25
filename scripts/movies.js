// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount"))||0;
let showdiv=document.getElementById("movies");
let timerid; 
let movies=JSON.parse(localStorage.getItem("movie"))||[];
async function getData()
{
    var input= document.getElementById("search").value;
          
       var url=`https://www.omdbapi.com/?apikey=a9db94ce&s=${input}`;
       console.log(url);
        var data= await fetch(url);
        var res= await data.json();
         let arr_movie=res.Search;
         console.log(arr_movie);
      
         return arr_movie;
}

function appened(data)
{
    data.map(function(el)
        {
            let div=document.createElement("div");
            let p1= document.createElement("p");
            p1.innerText="Movie: "+el.Title;
                let year= document.createElement("p");
                 year.innerText="YEAR: "+el.Year;
                 let imd= document.createElement("p");
                 imd.innerText="IMDB: "+el.imdbID;
                let image= document.createElement("img");
                 image.src=el.Poster;
                 let book=document.createElement("button");
                 book.innerText="Book";
                 book.addEventListener("click",function()
                 {  movies.push(el);
                      localStorage.setItem("movie",JSON.stringify(movies));
                      window.location="./checkout.html";
                 })
                 div.append(image,p1,year,imd,book);
                 showdiv.append(div);
        
})
    
}
async function main()
{
    try {
    let data=await getData();
    if(data=="undefined")
    {
    showdiv.innerText="";
    return false;
    }
    appened(data);   
    } catch (error) {
        console.log(error);        
    }

}
function debounce(func,delay)
{
 if(timerid)
{
    clearTimeout(timerid);
}
showdiv.innerText="";
   timerid=setTimeout(function()
 {
        func();
 },delay)
}