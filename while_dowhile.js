// while loop
console.log("-*-*-*-*-*-*-* while 1 -*-*-*-*-*-*-*");
let i = 1;
while (i <= 10) {
    console.log(i)
    i++;
}

console.log("-*-*-*-*-*-*-* while 2 -*-*-*-*-*-*-*");
i = 1;
let n = 5;
let sum = 0;
while (i <= n) {
    sum = sum + i;
    i++;
}
console.log("sum is", sum)

console.log("-*-*-*-*-*-*-* while 3 -*-*-*-*-*-*-*");
let factorial = 1;
console.log(n)
while (n > 0) {
    factorial = factorial * n;
    n--;
}
console.log("factorial is", factorial);

console.log("-*-*-*-*-*-*-* while 4 -*-*-*-*-*-*-*");
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++;
}


// do while
// do {
    //     n=1;
    //     // console.log("enter positive number")
    // } while (n <= 0);
    
console.log("-*-*-*-*-*-*-* do while 3 -*-*-*-*-*-*-*");
let no = 123;
let sumofdigit = 0;
do {
    sumofdigit = sumofdigit + (no % 10);
    // no = no / 10;
    no=Math.floor(no/10)
} while (no !== 0);
console.log("sum of all digits",sumofdigit)

console.log("-*-*-*-*-*-*-* do while 4 -*-*-*-*-*-*-*");
table = 3;
i=0;
do {
    console.log(table, " * ",i, " = ",table*i)
    i++;
} while (i<=10);

