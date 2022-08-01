



console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 0)

console.log('d')










// let a=11
// function add(){

//     function add1(){
//         console.log(a)
//     }
// return add1()
// }

// add()
// /////

// a=34   

// add()


















// class Student{
//     static count=0
//     static arr=[]
//     constructor(name,age,phone,bordmarks){
//         this.name=name 
//         this.age=age 
//         this.phone=phone 
//         this.bordmarks=bordmarks
//         Student.count++
//         Student.arr.push(this)
//     }

//     eligible(){
//         let minimum=40
//         if(this.bordmarks>=minimum){
//             console.log(`${this.name} is Eligible`)
//         }
//         else{
//             console.log(`${this.name} is not Eligible`)
//         }
//     }

//     eligibleforplacement(m){
        
//           return  (ag)=>{  //whenever we have to pass arugment we have to use anonmouse function
 
//             if(this.bordmarks>=m &&this.age>=ag) { 
//                 console.log(`${this.name} is eligible`)
//             }
    
//         }
        

//     }
// }

// let student1=new Student("mayank1","31","3433242331",45)
// let student2=new Student("mayank2","32","3433242332",33)
// let student3=new Student("mayank3","33","3433242333",44)
// let student4=new Student("mayank4","34","3433242334",32)
// let student5=new Student("mayank5","35","3433242335",55)

// student1.eligible()
// student2.eligible()
//  //student1.eligibleforplacement(40)(18)
//  //whenever we have to pass arugment we have to use anonmouse function
 
//  let a=Student.arr
//  for(let i=0;i<a.length;i++){
//     a[i].eligibleforplacement(40)(18)
    
//  }

// console.log(Student.count)







// function y(){



//     setTimeout(() => console.log(a), 0)
    
//     console.log('Done Coding')
    
    
    
//     }
    
//     y();

















// function a(){
//     for(var i=1;i<=5;i++){
//         function closer(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000)
//         }
//         closer(i);
//     }
//     console.log("mayank")
// }
// a()






















// let multiply=function(x,y){
//     console.log(x*y)
// }

// let multiplyby2=multiply.bind(this,2)
// multiplyby2(4)

// let multiplyby3=multiply.bind(this,3)
// multiplyby3(3)




// using clouser

// let multiply1=function (x){
//     return function mul(y){
//         console.log( x*y)
//     }
// }

// let a= multiply1(2)
//    a(8)

//    let b= multiply1(3)
//    b(8)
//  //multiply1(1,2)




// add.apply(obj ,["india ", "1997"])

// let copy=add.bind(obj2 ,"india","1997")

// //console.log(copy)


// copy();



// class Array {
  
// mymap(calback){
//       let arr=[]
//       for(let i=0;i<this.length;i++){
//         arr.push(calback(this[i]))
//       }
//       return arr;
//     }
//   }
//     let array=  new Array(1,2,3)
    

// let a=array.mymap(function(x){
//     return x*6
// })


// console.log(a)