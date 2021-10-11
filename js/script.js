

async function test() {
  var result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15').then(response => response.json())
  return result;
}

async function news_n(){
  let elem = await test();
 
  var news = document.getElementById("wrap");
for (let i = 0; i < elem.length; i++){
  let div = document.createElement('div');
  div.className = 'item';
  div.id = elem[i].id;
  news.appendChild(div);
 let subdiv = document.createElement('h3');
 subdiv.className = "title";
 div.appendChild(subdiv);
 let subdiv2 = document.createElement('div');
 subdiv2.className = "body";
 div.appendChild(subdiv2);
 subdiv.innerHTML = elem[i].title;
 subdiv2.innerHTML = elem[i].body;
    let but = document.createElement("button");
    div.appendChild(but);
    but.className = "btn";
    but.innerHTML= "X";
   
}
let objs = document.querySelectorAll('.item');
for(let item of objs) {
item.onclick = () => item.remove();
}

}
news_n();
let butCre = document.getElementsByClassName("btn-create");



function cre() {
  let news = document.getElementById("wrap")
 let divnew = document.createElement("div");
 divnew.className = "item";
news.appendChild(divnew);
let subdiv = document.createElement('h3');
 subdiv.className = "title";
 divnew.appendChild(subdiv);
 let subdiv2 = document.createElement('div');
 subdiv2.className = "body";
 divnew.appendChild(subdiv2);
 
 subdiv.innerHTML = document.getElementById("inputF").value;
 console.log(subdiv);
 subdiv2.innerHTML = document.getElementById("inputS").value;
    let but = document.createElement("button");
    divnew.appendChild(but);
    but.className = "btn";
    but.innerHTML= "X";
    let objs = document.querySelectorAll('.item');
for(let item of objs) {
item.onclick = () => item.remove();
let a = document.getElementById("inputF");
let b = document.getElementById("button");
if(a == ""){b = disable}
}
}
