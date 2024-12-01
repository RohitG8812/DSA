//* 1.Sum of a & b
// function sumOfAAndB() {
//     let a = 12
//     let b = 5
//     console.log(a + b)
//     return a + b;
// }
// sumOfAAndB()

//* 2.Sum of a & b via Input from User
// function sumOfAAndB() {
//     let a = Number(prompt("Enter a value of a")) //! Convert to number because prompt returns String
//     let b = Number(prompt("Enter a value of b"))
//     console.log(a + b)
//     return a + b;
// }
// sumOfAAndB()

//* 3.Product of a & b
// function productOfAAndB() {
//     let a = 2
//     let b = 3
//     console.log(a * b)
// }
// productOfAAndB()

//* 4.Product of a & b via Input from User
// function productOfAAndB() {
//     let a = Number(prompt("Enter a value of a")) //! Convert to number because prompt returns String
//     let b = Number(prompt("Enter a value of b"))
//     console.log(a * b)
// }
// productOfAAndB()

//* 5.Area of Circle
// function areaOfCircle() {
//     let pi = Math.PI
//     let radius = 5
//     // let areaOfCircle = pi * radius * radius
//     let areaOfCircle = pi * Math.pow(radius, 2)
//     console.log(areaOfCircle)
// }
// areaOfCircle()

//* 6.Average of 3 numbers
// function averageOf3Numbers(){
//     let a = 4
//     let b = 6
//     let c = 8
//     let average =( a + b + c) / 3
//     console.log(average)
// }
// averageOf3Numbers()

//* 7. Area of Square
// function areaOfSquare() {
//     let area = 12.5
//     let areaOfSquare = Math.pow(area, 2)
//     console.log(areaOfSquare)
// }
// areaOfSquare()

//* 8.Enter cost of 3 items from the user (using float data type) - a pencil, a pen and an eraser. You have to output the total cost of the items back to the user as their bill. (Add on : You can also try adding 18% gst tax to the items in the bill as an advanced problem)
// function billDetails() {
//     let priceOfPen = 12
//     let priceOfPencil = 6
//     let priceOfEraser = 4
//     let totalAmountOfBill = priceOfPen + priceOfPencil + priceOfEraser
//     let totalAmountOfBillWithGST = totalAmountOfBill + (totalAmountOfBill * 0.18)
//     console.log("Total Bill Amount without GST: " + totalAmountOfBill)
//     console.log("Total Bill Amount with GST: " + totalAmountOfBillWithGST)
// }
// billDetails()

//* 9. What is the Output
// let x = 2
// let y = 5
// let exp1 = (x * y / x) //? returns 5
// let exp2 = (x * (y / x))  //? returns 5
// console.log(exp1, exp2)

//* 10. What is the Output
// let x = 200, y = 50, z = 100;
// if (x > y && y > z) {
//     console.log("Hello")
// } else if (z > y && z < x) {
//     console.log("JS")
// } else if ((y + 200) < x && (y + 150) < z) {
//     console.log('Hello JS')
// }

//* 11. What is the Output
// let x = y = z = 2
// z = 4
// console.log(x)
// console.log(y)
// console.log(z)

//* 12. Print the Largest of 2
// function printLargest() {
//     let a = 1
//     let b = 3
//     let largest = a == b ? "The Value of a and b is Same" : a > b ? "A is largest of 2" : "B is largest of 2"
//     console.log(largest)
// }
// printLargest()


//* 13.Print Odd or Even
// function printOddOrEven() {
//     let n = 77
//     let result = n % 2 == 0 ? "Even number" : "Odd number"
//     console.log(result)
// }
// printOddOrEven()

//* 14. Income tax calculation (income < 5lakh : No Tax; income > 5lakh or < 10lakh : 20%; income > 10lakh : 30%)
// function incomeTaxCalculation() {
//     let income = 768000
//     let result = income < 500000 ? "You Doesn't need to pay Tax"
//         : income > 500000 && income < 1000000 ? "Your Tax Amount is : " + (income * 0.2)
//             : "Your Tax Amount is : " + (income * 0.3)
//     console.log(result)
// }
// incomeTaxCalculation()

//* 15. Print the Largest of 3
// function printLargest() {
//     let a = 1
//     let b = 3
//     let c = 2
//     let largest = a > b ? "A is largest of 3" : b > c ? "B is largest of 3" : "C is largest of 3"
//     console.log(largest)
// }
// printLargest()

//* 16.Calculator using Prompt
// function calculator() {
//     let a = Number(prompt("Enter a value of a")) //! Convert to number because prompt returns String
//     let b = Number(prompt("Enter a value of b")) //! Convert to number because prompt returns String
//     let operator = prompt("Enter a operator (+, -, *, /)")
//     let result = operator == "+" ? `${a} + ${b} = ${a + b}`
//         : operator === "-" ? `${a} - ${b} = ${a - b}`
//             : operator === "*" ? `${a} * ${b} = ${a * b}`
//                 : operator === "/" ? `${a} / ${b} = ${a / b}` : "Please enter a number or operator"
//     console.log(result)
// }
// calculator()

//* 17.Get a number from the user and print whether it is positive or negative.
// function positiveOrNegative() {
//     let n = prompt("Please enter a number")
//     let result = n ? n < 0 ? "Given number is negative" : "Given number is positive"
//         : "Please Enter the Value of n"
//     console.log(result)
// }
// positiveOrNegative()

//* 18. Write a program to input week number (1-7) and print day of week name using switch case
// function day() {
//     let n = Number(prompt("Enter a Number from 1 to 7"))
//     switch (n) {
//         case 1: console.log("Sunday")
//             break
//         case 2: console.log("Monday")
//             break
//         case 3: console.log("tuesday")
//             break
//         case 4: console.log("Wednesday")
//             break
//         case 5: console.log("ThursDay")
//             break
//         case 6: console.log("Friday")
//             break
//         case 7: console.log("Saturday")
//             break
//         default: console.log("Wrong Input")
//     }
// }
// day()

//*  19.Write a program that takes a year from the user and print whether that year is a leap year or not.
//? *If a year is divisible by 4 and not divisible by 100, it’s a leap year.
//? *If a year is divisible by 100 but also divisible by 400, it’s a leap year.
// function leapYear(year) {
//? using if-else
//     // if (year % 4 === 0) {
//     //     if (year % 100 === 0) {
//     //         if (year % 400 === 0) {
//     //             console.log(`${year} is a leap year`);
//     //         } else {
//     //             console.log(`${year} is not a leap year`);
//     //         }
//     //     } else {
//     //         console.log(`${year} is a leap year`);
//     //     }
//     // } else {
//     //     console.log(`${year} is not a leap year`);
//     // }

//? using ternary operator
//     let result = year % 4 === 0 && year % 100 !== 0 ? `${year} is a leap year`
//         : year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ? `${year} is a leap Year` : `${year} is not a leap Year`
//     console.log(result)
// }
// let year = Number(prompt("Enter a year (compulsory 4 digits)"))
// leapYear(year)

//* 20. print number from 1 to 10
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

//* 21.Print number from 1 to n (n is taken from user.)
// let n = Number(prompt("Enter a Number"));
// for(let i = 1; i <= n; i++){
//     console.log(i)
// }

//* 22.Print reverse number from n to 1 (n is taken from user.)
// let n = Number(prompt("Enter a Number"));
// for(let i = n; i >= 1; i--){
//     console.log(i)
// }

//* 23. Print Sum of first n natural numbers.
// let n = Number(prompt("Enter a Number"));
// let sum = 0
// //? using for Loop
// for (let i = 1; i <= n; i++) {
//     sum += i
//     console.log(i)
// }

// //? using while Loop
// let i = 1
// while (i <= n) {
//     console.log(i)
//     sum += i
//     i++
// }
// console.log("Sum of n Natural number : " + sum)

//* 24. print square pattern
//? using for Loop
// for (let i = 1; i <= 4; i++) {
//     console.log('* * * *')
// }

//? using while Loop
// let line = 1
// while (line <= 4) {
//     console.log("* * * *")
//     line++
// }

//* 25. Print reverse of Number
// let n = 24569885
//? 1st Method
// let nStr = n.toString().split("").reverse().join("")
// let nNum = Number(nStr)
// console.log(nNum)

//? 2nd Method
// let rev = 0
// while (n > 0) {
//     let lastDigit = n % 10 //! gives the lastDigit
//     rev = (rev * 10) + lastDigit //! add the last digit to the rev (multiply rev by 10 to shift the last digit to the left)
//     n = Math.floor(n / 10) //! remove the last digit from the n
// }
// console.log(rev)

//* 26.Display all Numbers entered by user except pf multiples of 10..
// let n = prompt('Enter a number')
// let arr = []
// function displayNumbers() {
//     while (n % 10 != 0) {
//         console.log(n)
//         arr.push(n)
//         n = prompt('Enter a number')
//     }
//     n = null
// }
// displayNumbers()
// console.log(arr)

//* 27.Check a given number is prime or not..
// let n = 6
// function prime() {
//     if (n <= 1) {
//         return `${n} is not a prime Number`
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             console.log(n, i)
//             return `${n} is not a prime Number`
//         }
//     }
//     return `${n} is a prime Number`
// }
// console.log(prime())

//* 28. what is an Output
// function sol() {
//     for (let i = 0; i < 5; i++) {
//         console.log("Hello")
//         i += 2
//     }
// }
// sol()
//! hello is printed 2 time here (because at 1st i == 0 so loops run but next
//! time loops became i == 3(because 1 + 2 == 3) and then it will print hello again
//! now loop iterate again so now i became 4 and 4 + 2 == 6 so it not satisfy the condition of i < 5 therefore its terminates the loop)

//* 29. Write a program that reads a set of integers, and then prints the sum of the even and odd integers
// let n = [1, 2, 3, 4, 5, 6]
// // let n = [2, 4, 6]
// let odd = []
// let even = []
// function sumOfOddOrEven() {
//     for (let i = 0; i <= n.length - 1; i++) {
//         if (n[i] % 2 == 0) {
//             even.push(n[i])
//         } else {
//             odd.push(n[i])
//         }
//     }
//     let sumOfOdd = odd.reduce((total, num) => total += num, 0) //! 0 for if odd is empty
//     let sumOfEven = even.reduce((total, num) => total += num, 0)
//     console.log(`Odd Numbers : ${odd} \n\nsum Of Odd is : ${sumOfOdd}`)
//     console.log(`Even Numbers : ${even} \n\nsum Of Even is : ${sumOfEven}`)
// }
// sumOfOddOrEven()

//* 30. Write a program to find the factorial of any number entered by the user
// let n = Number(prompt("Enter a number"))
// let arr = []
// if (n < 0) {
//     console.log("Please Enter a Valid Number")
// } else {
//     for (let i = n; i >= 1; i--) {
//         arr.push(i)
//     }
// }
// console.log("Array:", arr)
// let factorial = arr.reduce((total, num) => total *= num, 1) //! if n == 0 then it will print 1 for it (because the factorial of 0 is 1)
// console.log(`Factorial of ${n} is : ${factorial}`)

//*  31.Write a program to print the multiplication table of a number N, entered by the user
// let n = Number(prompt("Enter a number"))
// function tableOfN() {
//     console.log("Multiplication Table of",n)
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} * ${i} : ${i * n}`)
//     }
// }
// tableOfN()

//* 32.Print half pyramid without start spaces pattern
// function starPattern() {
//     for (let i = 1; i <= 4; i++) {
//         let stars = ''
//         for (let j = 1; j <= i; j++) {
//             stars += '* '
//         }
//         console.log(stars)
//     }
// }
// starPattern()

//* 33.Print Inverted half pyramid without start spaces pattern
// function invertedStarPattern() {
//     for (let line = 1; line <= 4; line++) {
//         let stars = "";
//         for (let star = 4; star >= line; star--) {
//             stars += "* "
//         }
//         console.log(stars)
//     }
// }
// invertedStarPattern()

//* 34. Print half Pyramid with spaces Patter..
// function halfPyramidPattern() {
//     for (let line = 1; line <= 4; line++) {
//         let stars = ''
//         let space = 0
//         for (let star = 1; star <= line; star++) {
//             stars += "*"
//             space = 4 - star
//         }
//         let combined = " ".repeat(space) + stars
//         console.log(combined)

//     }
// }
// halfPyramidPattern()

//* 34. Print full Pyramid Patter..
// function PyramidPattern() {
//     for (let line = 1; line <= 4; line++) {
//         let stars = ''
//         let space = 0
//         for (let star = 1; star <= line; star++) {
//             stars += "* "
//             space = 4 - star
//         }
//         let combined = " ".repeat(space) + stars
//         console.log(combined)
//     }
// }
// PyramidPattern()

//* 35. print half pyramid pattern with numbers
// function halfPyramidNumbers() {
//     for (let line = 1; line <= 4; line++) {
//         let num = "";
//         for (let j = 1; j <= line; j++) {
//             num += j + " "
//         }
//         console.log(num)
//     }
// }
// halfPyramidNumbers()

//* 36. Print Character Pattern
// function printCharacterPattern() {
//     for (let line = 1; line <= 4; line++) {
//         let ch = 'A'
//         let pattern = ""
//         for (let j = 1; j <= line; j++) {
//             pattern += ch + " "
//             ch = String.fromCharCode(ch.charCodeAt() + 1)
//         }
//         console.log(pattern)
//     }
// }
// printCharacterPattern()

//* 37. Print Character Pattern Continues
// function printCharacterPattern() {
//     let ch = 'A'
//     for (let line = 1; line <= 4; line++) {
//         let pattern = ""
//         for (let j = 1; j <= line; j++) {
//             pattern += ch + " "
//             ch = String.fromCharCode(ch.charCodeAt() + 1)
//         }
//         console.log(pattern)
//     }
// }
// printCharacterPattern()

//* 38. Print Character Pattern Continues in reverse order
// function printCharacterPattern() {
//     let totalChars = 10
//     let ch = String.fromCharCode('A'.charCodeAt(0) + totalChars - 1)
//     for (let line = 1; line <= 4; line++) {
//         let pattern = ""
//         for (let j = 1; j <= line; j++) {
//             pattern += ch + " "
//             ch = String.fromCharCode(ch.charCodeAt() - 1)
//         }
//         console.log(pattern)
//     }
// }
// printCharacterPattern()

//* 39. Swap values of 2 variables
// let a = 5
// let b = 8
// let temp = a
// a = b
// b = temp
// console.log(a)
// console.log(b)

//* 40. find product of a & b
// function product(a, b) {
//     let product = a * b
//     return product
// }
// console.log(product(5, 5))

//* 41. find Factorial
// let n = 4
// let arr = []
// if (n < 0) {
//     console.log("Please Enter a positive number")
// } else {
//     for (let i = n; i >= 1; i--) {
//         arr.push(i)
//     }
//     let factorial = arr.reduce((total, num) => total *= num, 1)
//     console.log(`Factorial of ${n} is ${factorial}`)
// }

//* 42. Binomial Coefficient (Formula of Binomial Coefficient = 'n! / r!*(n-r)!)
// function factorial(n) {
//     let fact = 1
//     for (let i = n; i >= 1; i--) {
//         fact = fact * i
//     }
//     return fact
// }
// function BinomialCoefficient(n, r) {
//     let factorialN = factorial(n)
//     let factorialR = factorial(r)
//     let factorialNMR = factorial(n - r)
//     let binCoefficient = factorialN / (factorialR * factorialNMR)
//     return binCoefficient
// }
// console.log(BinomialCoefficient(5, 2))

//* 43. Check if a number is Prime or not.. 
// let n = prompt("Enter a number")
// function isPrime() {
//     if (n <= 1) {
//         return `${n} is not a prime number`
//     } else {
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return `${n} is not a prime number`
//             }
//         }
//     }
//     return `${n} is a prime number`
// }
// console.log(isPrime())