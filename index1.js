
let form=document.querySelector('.form')
let ex=document.querySelector('#expense')
let cd=document.querySelector('#ChoosesDescription')
let cc=document.querySelector('#Choosecetagory')
form.addEventListener("submit",add)

function add(e){
    e.preventDefault() 
   let a= JSON.stringify({"expense":ex.value ,"cd":cd.value, "cc":cc.value})
   localStorage.setItem(ex.value,a)
   //let b=JSON.parse(a)
    let node=document.createTextNode(`${ex.value} ${cd.value} ${cc.value}`)         //`${ex.value} ${cd.value} ${cc.value}`
    let newli=document.createElement("li")
    let delet=document.createElement("button")
    let edit=document.createElement("button")
    delet.innerText="Delete"
    edit.innerText="Edit"
    delet.className="det"
    edit.className="edt"
    newli.id=ex.value
    newli.appendChild(node)
    newli.appendChild(delet)
    newli.appendChild(edit)
    let ul=document.querySelector("#ul")
    ul.appendChild(newli)

}

document.addEventListener("DOMContentLoaded",relode)
function relode(e){
//console.log(h)

let valuearr=Object.values(localStorage)

for (let i=0;i<valuearr.length;i++){
let li =document.createElement("li")
let node =document.createTextNode(JSON.parse(valuearr[i]).expense+" "+JSON.parse(valuearr[i]).cd+" "+JSON.parse(valuearr[i]).cc)
li.appendChild(node)
let submit=document.querySelector("#ul")
let delet=document.createElement("button")
let edit=document.createElement("button")
delet.innerText="Delete"
edit.innerText="Edit"
delet.className="det"
edit.className="edt"
li.id= JSON.parse(valuearr[i]).expense
li.appendChild(delet)
li.appendChild(edit)
submit.appendChild(li)
// console.log(li)

}
}

let ul=document.querySelector("#ul")

ul.addEventListener("click",delete1)

function delete1(e){
   
   if(e.target.classList.contains("det")){
    let ul=document.querySelector("#ul")
    let a= e.target.parentElement
    ul.removeChild(a)
   let b=a.id
   localStorage.removeItem(b)
   }
}


ul.addEventListener("click",edi)
// edit
function edi(e){
    e.preventDefault()
    // console.log(e.path[5])
    if(e.target.classList.contains("edt")){
    
    let s=localStorage.getItem( e.target.parentElement.id)
    let obj = JSON.parse(s)
    
    ex.value=obj.expense
    cd.value=obj.cd
   cc.value=obj.cc
     let a= e.target.parentElement
    // console.log(a.id)
     localStorage.removeItem(a.id)
        ul.removeChild(a)
    }
    }
    
    
    
    
    
    
    