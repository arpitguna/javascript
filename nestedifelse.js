// 1 . . . 
let weather = "rainy";
let temp = 35;

if (weather == "sunny") {
    if (temp > 30) {
        console.log("Go to the beach")
    }
    else {
        console.log("Go for a walk")
    }
} else if (weather == "rainy") {
    if (temp > 20) {
        console.log("Read a book indoors")
    }
    else {
        console.log("Watch a movie")
    }
} else if (weather == "snowy") {
    if (temp <= 0) {
        console.log("Build a snowman")
    }
    else {
        console.log("Go skiing")
    }
} else {
    console.log("plase enter an corrat input")
}

// 2. . .
let kg = 90;
let height = 1.6;

let bmi = kg / (height * height)

if (bmi < 18.5) {
    if (bmi < 16) {
        console.log("Severely underweight")
    }
    else {
        console.log("Underweight")
    }
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight")
} else if (bmi >= 25 && bmi < 29.9) {
    if (bmi > 27.5) {
        console.log("Moderately overweight")
    }
    else {
        console.log("Overweight")
    }
} else if (bmi >= 30) {
    if (bmi >= 35) {
        console.log("Severely obese")
    }
    else {
        console.log("Obese")
    }
}

// 3 . . . 
let maths = 60;
let sci = 80;
let eng = 70;

if (maths >= 70 && sci >= 65 && eng >= 60) {
    console.log("Eligible for admission")
} else {
    if (maths < 70) {
        console.log("Not eligible due to Math score")
    } else if (sci < 65) {
        console.log("Not eligible due to Science score")
    } else if (eng < 60) {
        console.log("Not eligible due to English score")
    }
}

// 4 . . . 
let age = 23;
let lic = 2;

if (age >= 25) {
    if (lic >= 5) {
        console.log("Eligible for rental")
    } else {
        console.log("Not eligible due to driving experience")
    }
} else if (age >= 21 && age < 25) {
    if (lic >= 3) {
        console.log("Eligible for rental with young driver fee")
    } else {
        console.log("Not eligible due to driving experience")
    }
} else {
    console.log("Not eligible due to age")
}


// swapping program 
let a = 100;
let b = 200;

a=a+b;
b=a-b;
a=a-b;
console.log("a is =",a,"b is =",b)