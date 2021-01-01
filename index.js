let ul=document.querySelector("ul");
ul.addEventListener("click",()=>{
    if(event.target.className=="delete"){
        let removeBtn=event.target.parentNode;
        let ul=removeBtn.parentNode;
        ul.removeChild(removeBtn);
    }
})
let book=document.forms[1];
book.addEventListener("submit",()=>{
    event.preventDefault();
    let input=book.querySelector("input");
   let value=input.value;
    let li=document.createElement("li");
    let nameSpan=document.createElement("span");
    let deleteSpan=document.createElement("span");
    nameSpan.textContent=value;
    deleteSpan.textContent="delete";
    deleteSpan.setAttribute("class","delete");
    li.appendChild(nameSpan);
    li.appendChild(deleteSpan);
    ul.appendChild(li);
})