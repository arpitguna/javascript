let a = [1, 2, 3, 4, 5]
a.push(4)
console.log("push", a);
a.pop()
console.log("pop", a);
a.unshift(0)
console.log("unshift", a);
a.shift()
console.log("shift", a);


// map
let map = a.map(a => a + 2)
console.log("map", map)

// forEach
a.forEach(a => {
    if (a < 5) {
        console.log("forEach", a);
    }
});

// filter
let filter = a.filter(a => a % 2 === 0)
console.log("filter", filter);

// Splice
        //   0 1 2 3 4 5 6 7 8
let Splice =[1,2,3,4,5,6,7,8,9]
Splice.splice(2,3,"a","b")
console.log("splice",Splice);

// slice
let Slice =["apple","mango","banana","lemon"]
let newslice = Slice.slice(0,2);
console.log("slice",newslice);

// indexof
let name =["apple","mango","banana"]
let indexof = name.indexOf("mango");
console.log("indexof",indexof);

// findindex
let arr = [15,16,19,18,19]
let e = arr.findIndex(check);
function check(arrs){
    return arrs > 18;
}
console.log("findIndex",e);

// includes
e = name.includes("mango")
console.log("includes",e);
e = name.includes("mango",2)
console.log("includes with index",e);