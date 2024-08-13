// 1 . . . 
let age = 64;

if (age <= 12) {
    console.log("Child")
} else if (age >= 13 && age <= 19) {
    console.log("Teenager")
} else if (age >= 20 && age <= 64) {
    console.log("Adult")
} else if (age > 64) {
    console.log("Senior")
}

// 2 . . .
let mark = 90;

if (mark >= 90 && mark <= 100) {
    console.log("grade A")
} else if (mark >= 80 && mark <= 89) {
    console.log("grade B")
} else if (mark >= 70 && mark <= 79) {
    console.log("grade C")
} else if (mark >= 60 && mark <= 69) {
    console.log("grade D")
} else {
    console.log("grade F")
}

// 3 . . .
let day = 8;

if (day == 1) {
    console.log("Monday")
} else if (day == 2) {
    console.log("tuesday")
} else if (day == 3) {
    console.log("Wednesday")
} else if (day == 4) {
    console.log("Thursday")
} else if (day == 5) {
    console.log("Friday")
} else if (day == 6) {
    console.log("Saturday")
} else if (day == 7) {
    console.log("Sunday")
} else {
    console.log("invaild number")
}

// 4 . . .
let temp = 76;

if (temp <= 32) {
    console.log("Freezing")
} else if (temp > 32 && temp <= 50) {
    console.log("Cold")
} else if (temp >= 51 && temp <= 75) {
    console.log("Moderate")
} else {
    console.log("Hot")
}

// 5 . . .
let unit = 350;
let price;
if (unit <= 100) {
    price = unit * 0.50;
    console.log("Electricity Bill is $", price)
} else if (unit >= 101 && unit <= 200) {
    unit = unit - 100;
    unit = unit * 0.75;
    price = unit + (100 * 0.50)
    console.log("Electricity Bill is $", price)
} else if (unit >= 201 && unit <= 300) {
    unit = unit - 200;
    unit = unit * 1.00;
    price = unit + (100 * 0.50) + (100 * 0.75)
    console.log("Electricity Bill is $", price)
} else {
    unit = unit - 300;
    unit = unit * 1.50;
    price = unit + (100 * 0.50) + (100 * 0.75) + 100
    console.log("Electricity Bill is $", price)
}

// 6 . . . 
let username = "admin"
let password ="1234"

if(username == "admin" && password == "1234"){
    console.log("log in successful")
}else if(username == "user" && password == "password"){
    console.log("log in successful")
}else if(username == "guest" && password == "guest"){
    console.log("log in successful")
}else{
    console.log("password is incorrect")
}

// 7 . . .
let hour = 61;
let salary;
if (hour <= 40) {
    console.log("Your Salary is = $", hour * 15)
} else if (hour >= 41 && hour <= 60) {
    hour = hour - 40;
    salary = (hour*20)+(40*15)
    console.log("Your Salary is = $", salary)
} else {
    hour = hour-60;
    salary = (hour*25)+(40*15)+(20*20)
    console.log("Your Salary is = $", salary)
}

// 8 . . .
let side1 = 89;
let side2 = 87;
let side3 = 85;

if (side1 == side2 && side1 == side3) {
    console.log("Equilateral")
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("Isosceles")
} else {
    console.log("Scalene")
}

// 9 . . .
let amount = 501;

if (amount <= 100) {
    console.log("No discount")
} else if (amount >= 101 && amount <= 500) {
    console.log("discount is 10%")
} else {
    console.log("discount is 20%")
}