async  function add(){
    console.log("a")
    console.log("b")
   await setTimeout(()=>{
        console.log("c")
    },1000)
  await  setTimeout(()=>{
        console.log("d")
    },500)
    console.log("e")
}
console.log("dd")
add()