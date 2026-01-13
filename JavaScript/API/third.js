let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
    try {
         let res = await axios.get(url); 
         return res.data.fact;   
 }  
 
    catch(err) {
        return "No fact found";
 }
 
 }