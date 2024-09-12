

Hello("arpit", "babalu")


// function  block of code that perform particulrar task

function Hello(name) {
    console.log('hello', name)
}

// Hello("bhavesh")

// ES 6 
let arrowFun = () => {
    console.log("hello i am an arrow function")
}
arrowFun()



// closures when a child function can access the lexicalscope/ sorrounding scope of its parent function , even when the parent function has finished the execution 

// function outerFun() {
//     let outerVar = "Hello i am outer variable"
//     function innerFun() {
//         let innerVar = "hello i am inner variable"
//        return outerVar
//     }
//     console.log(innerVar)
//     return innerFun();
// }
// let ans = outerFun()
// console.log(ans)


// recursion a funciton calling itself multiple times;
// factoral 5  = 5*4*3*2*1
function recursion(a) {
    // base case
    if (a === 0 || a === 1) {
        return a
    }
    return a * recursion(a - 1)
}
let answer = recursion(1)
console.log(answer);

// fibonacci series 1 2 3 4 5 6 7 8 9 10
function fibonacci(a) {
    // base case 
    if (a == 0 || a === 1) {
        return a
    }
    return fibonacci(a - 1) + fibonacci(a - 2) // 10+9+8+7
}
//classical
// arrow
// anonymus
// iife
// callback fun

let aw = fibonacci(11)
console.log(aw)

// function switchcase() {
//     switch () {
//         case 


//         case
//         default: return
//     }

// }
// switchcase()
