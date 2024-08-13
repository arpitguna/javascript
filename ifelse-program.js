// 1
let mark = 90;

if (mark >= 90) {
    console.log("grade is A+")
}
else if (mark >= 80 && mark < 90) {
    console.log("grade is A")
}
else if (mark >= 70 && mark < 80) {
    console.log("grade is B")
}
else if (mark >= 60 && mark < 70) {
    console.log("grade is C")
}
else if (mark >= 50 && mark < 60) {
    console.log("grade is D")
}
else {
    console.log("fail")
}

//2

let number = 43

if (number % 2 == 0) {
    console.log("number is even")
}
else {
    console.log("number is odd")
}

//3
let age3 = 45;

if (age3 < 13) {
    console.log("Child")
} else if (age3 >= 13 && age3 < 20) {
    console.log("Teenager")
} else if (age3 >= 20 && age3 < 60) {
    console.log("Adult")
} else {
    console.log("Senior")
}

//4
let number4 = -5
if (number4 == 0) {
    console.log("number is zero")
} else if (number4 > 0) {
    console.log("number is Positive")
} else if (number4 < 0) {
    console.log("number is Negative")
}

//5
let year = 2020
if (year % 4 == 0) {
    console.log("Leap Year")
} else {
    console.log("not Leap Year")
}

//6
let num1 = 10;
let num2 = 5;
let operator = '+'

if (operator == '+') {
    console.log("num1 + num2 =", num1 + num2)
} else if (operator == '-') {
    console.log("num1 - num2 =", num1 - num2)
} else if (operator == '*') {
    console.log("num1 * num2 =", num1 * num2)
} else if (operator == '/') {
    console.log("num1 / num2 =", num1 / num2)
} else {
    console.log("plase chack in operaator")
}

//7
let char7 = 'b'
if (char7 == 'a' || char7 == 'e' || char7 == 'i' || char7 == 'o' || char7 == 'u') {
    console.log("Vowel")
} else {
    console.log("consonant")
}

//8
let mark8 = 35
if (mark8 >= 40) {
    console.log("PASS")
} else {
    console.log("Fail")
}

//9
let color = "green"
if (color == "red") {
    console.log("plase stop")
} else if (color == "yellow") {
    console.log("get ready")
} else if (color == "green") {
    console.log("go go go .....")
} else {
    console.log("undifine color")
}

//10
let day = "sunday"
if (day == "sunday") {
    console.log("Weekend")
} else {
    console.log("Weekday")
}