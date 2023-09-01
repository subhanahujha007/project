const name=document.getElementById("name")
console.log(name.value);
const container=document.querySelector(".tags");
const create=()=>{
const tag=document.createElement("div");
tag.setAttribute("class","tag");
tag.innerText = `Hey, I am ${name.value}`;
container.append(tag);
}
