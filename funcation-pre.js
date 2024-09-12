// function day(a){
//     switch(a){
//         case 1: 
//             console.log("monday")
//             break
//         case 2: 
//             console.log("tuesday")
//             break
//         case 3: 
//             console.log("friday")
//             break
//         case 4:
//             console.log("sunday")
//             break
//         default:
//             console.log("enter 1 to 4 no.")
//     }
// }
// day(7)

// function calcy(op,a,b){
//     switch(op){
//         case "add":
//             return a+b;
//         case "sub":
//             return a-b;
//         case "malti":
//             return a*b;
//         case "div" :
//             return a/b;
//         default :
//             return "undefined" 
//     }
// }
// let cal = calcy("di",8,9)
// console.log("..........",cal,".........")

// function fact(b){
//     if(b===0||b===1){
//         return b;
//     }
//     return fact(b-1)*b
// }
// let ans =fact(5)
// console.log(ans)

// let arrow = (a) => {
//     // switch()
//     console.log(a)
// }
// arrow(8)

// function out(){
//     let a = 10;
//     function in(){
//         console.log(a)
//         return out
//     }
//     return in()
// }
// out()

// function outerFun() {
//     let outerVar = "Hello i am outer variable"
//     function innerFun() {
//         let innerVar = "hello i am inner variable"
//        return outerFun()
//     }
//     console.log(innerVar)
//     return innerFun();
// }
// let ans = outerFun()
// console.log(ans)

// function out(){
//     let a = "hii"
//     function inner(){
//         // console.log(a)
//         // let b = "hello"
//         return a;
//     }
//     return inner()
// }
// console.log(out())

function adding(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let c =adding (1)(2)(3);
console.log(c)

let add =(function () {
    let a = 10
    let b = 20


    console.log(a + b)
})();
