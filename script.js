const killers=["Nurse","Blight","Spirit","Wesker","Huntress","Legion","Wraith","Doctor","Trickster"];
const maps=["RPD","Midwich","Garden of Joy","Eyrie of Crows","Coldwind Farm"];

function renderList(list,id){
 const container=document.getElementById(id);
 list.forEach(item=>{
  let btn=document.createElement("button");
  btn.innerText=item;
  btn.onclick=function(){
   btn.classList.toggle("selected");
   updateResult();
  }
  container.appendChild(btn);
 });
}

function updateResult(){
 let result=document.getElementById("result");
 let selected=document.querySelectorAll(".selected");
 result.innerHTML="";
 selected.forEach(x=>{
  result.innerHTML+=x.innerText+"<br>";
 });
}

function resetAll(){ location.reload(); }

renderList(killers,"killer-list");
renderList(maps,"map-list");
