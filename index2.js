let form=document.querySelector('.form')
let ex=document.querySelector('#expense')
let cd=document.querySelector('#ChoosesDescription')
let cc=document.querySelector('#Choosecetagory')
form.addEventListener("submit",add)

 async function add  (e){
    e.preventDefault() 
   let a= JSON.stringify({"expense":ex.value ,"cd":cd.value, "cc":cc.value})
   
   let b=JSON.parse(a)
   localStorage.setItem(b.expense,a)
   let reponse1= await axios.post("https://crudcrud.com/api/8a22f49da6b54d2a9731d8f0943ef8fb/adduser",b)
   .then((response)=>showonscreen(response.data))      //IMMO     // the response from promise is only is only use in .then
   //console.log("reponse1")   // this line only run when promise retutn
   
    

}


function showonscreen(obj){
    console.log(obj)
    let node=document.createTextNode(`${obj.expense} ${obj.cd} ${obj.cc}`)         //`${ex.value} ${cd.value} ${cc.value}`
    let newli=document.createElement("li")
    let delet=document.createElement("button")
    let edit=document.createElement("button")
    delet.innerText="Delete"
    edit.innerText="Edit"
    delet.className="det"
    edit.className="edt"
    newli.id=obj._id            //// immportent
    newli.appendChild(node)
    newli.appendChild(delet)
    newli.appendChild(edit)
    let ul=document.querySelector("#ul")
    ul.appendChild(newli)

}

document.addEventListener("DOMContentLoaded",relode)
function relode(e){
    axios.get("https://crudcrud.com/api/8a22f49da6b54d2a9731d8f0943ef8fb/adduser").then((r)=>{
        let arr=r.data
    for (let i=0;i<arr.length;i++){
            // let a=JSON.parse(valuearr[i])
            showonscreen(arr[i])
            console.log(arr[i])
        }
    })
    

}

// let valuearr=Object.values(localStorage)

// for (let i=0;i<valuearr.length;i++){
//     let a=JSON.parse(valuearr[i])
//     showonscreen(a)
// }


let ul=document.querySelector("#ul")

ul.addEventListener("click",delete1)

function delete1(e){
   
   if(e.target.classList.contains("det")){
    let ul=document.querySelector("#ul")
    let a= e.target.parentElement
     console.log(a)
    ul.removeChild(a)

   
    axios.delete(`https://crudcrud.com/api/8a22f49da6b54d2a9731d8f0943ef8fb/adduser/${a.id}`)
    .then((r)=>console.log(r))
  // localStorage.removeItem(b)
   
   
   }
}


ul.addEventListener("click",edi)
function edi(e){
    e.preventDefault()
    if(e.target.classList.contains("edt")){
    console.log("h")
let a= e.target.parentElement
    axios.get(`https://crudcrud.com/api/8a22f49da6b54d2a9731d8f0943ef8fb/adduser/${a.id}`)
    .then((reponse)=>)
//     let s=localStorage.getItem( e.target.parentElement.id)
//     console.log("f")
//     let obj = JSON.parse(s)
    
//     ex.value=obj.expense
//     cd.value=obj.cd
//    cc.value=obj.cc
   

//    let a= e.target.parentElement
//    // console.log(a.id)
//     localStorage.removeItem(a.id)
//        ul.removeChild(a)
   
     
     }
    }
    
    