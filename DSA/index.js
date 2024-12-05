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

//* 43. Check if a number is Prime or not
// let n = prompt("Enter a number")
// function isPrime() {
//     if (n <= 1) {
//         return `${n} is not a prime number`
//     } else {
//         for (let i = 2; i <= n - 1; i++) {
//             if (n % i === 0) {
//                 return `${n} is not a prime number`
//             }
//         }
//     }
//     return `${n} is a prime number`
// }
// console.log(isPrime())

//* 44. Check if a number is Prime or not (optimized Loop)
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

//* 45. Print all Primes in a Range..
// let n = 7;
// function isPrime(n) {
//     if (n <= 1) {
//         return false
//     }
//     for (let i = 2; i <= n - 1; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// function primeInRange() {
//     let primes = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primes.push(i)
//         }
//     }
//     return primes
// }
// console.log(primeInRange())

//* 46.Convert from Binary to Decimal...
// let n = 1000
// function binToDecimal() {
//     let dec = 0
//     let pow = 0
//     while (n > 0) {
//         let ld = n % 10
//         dec = dec + (ld * Math.pow(2, pow))
//         n = Math.floor(n / 10)
//         pow++
//     }
//     console.log(dec)
// }
// binToDecimal()

//* 47.Convert from Decimal to Binary...
// let n = 5
// function decToBinary() {
//     let pow = 0
//     let bin = 0
//     while (n > 0) {
//         let rem = n % 2
//         bin = bin + (rem * Math.pow(10, pow))
//         n = Math.floor(n / 2)
//         pow++
//     }
//     console.log(bin)
// }
// decToBinary()

//* 48. Average of 3 number
// let a = 3
// let b = 5
// let c = 7
// function calAverage(){
//     let avg = (a + b + c) / 3
//     console.log(avg)
// }
// calAverage()

//* 49.Even or not
// let n = prompt('Enter a number')
// function isEven() {
//     if (n % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven())

//* 50.Write a program to check if a number is a palindrome or not?
//? method 1
// let n = 121
// function isPalindrome() {
//     let revN = 0
//     let originalNum = n
//     while (n > 0) {
//         let ld = n % 10
//         revN = (revN * 10) + ld
//         n = Math.floor(n / 10)
//     }
//     if (revN === originalNum) {
//         console.log(`${originalNum} is a palindrome number`)
//     } else {
//         console.log(`${originalNum} is not a palindrome number`)
//     }
// }
// isPalindrome()

//? method 2
// let n = 121
// function isPalindrome() {
//     let revN = 0
//     let originalNum = n
//     while (n > 0) {
//         let ld = n % 10
//         revN = (revN * 10) + ld
//         n = Math.floor( n / 10)
//     }
//     return revN === originalNum
// }
// console.log(isPalindrome())

//* 51. Write a Java method to compute the sum of the digits in an integer.
//* (Hint: Approach this question in the following way:
//*    a.Take a variable sum = 0
//*    b.Find the last digit of the number
//*    c.Add it to the sum
//*    d.Repeat a & b until the number becomes 0
// function sumOfDigits(n) {
//     let sum = 0
//     while (n > 0) {
//         let ld = n % 10
//         sum = sum + ld
//         n = Math.floor(n / 10)
//     }
//     console.log(sum)
// }
// let n = prompt("Enter a number")
// sumOfDigits(n)

//* 52. Hollow rectangle pattern
// function hollowRectanglePattern(totRows, totCols) {
//     for (let i = 1; i <= totRows; i++) {
//         let stars = ''
//         for (let j = 1; j <= totCols; j++) {
//             if (i == 1 || i == totRows || j == 1 || j == totCols) {
//                 stars += "* "
//             } else {
//                 stars += "  "
//             }
//         }
//         console.log(stars)
//     }
// }
// hollowRectanglePattern(4, 6)

//* 53. Inverted $ Rotated half pyramid
// function invertedStarPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let stars = ''
//         let space = 0
//         for (let j = 1; j <= i; j++) {
//             stars += "* "
//             space = n - i
//         }
//         let combined = "  ".repeat(space) + stars
//         console.log(combined)
//     }
// }
// invertedStarPattern(4)

//* 54. Inverted $ Rotated half pyramid (optimized version)
// function invertedStarPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let spaces = "  ".repeat(n - i);
//         let stars = "* ".repeat(i);
//         console.log(spaces + stars);
//     }
// }
// invertedStarPattern(4);

//* 54. Inverted half pyramid with Numbers
// function invertedPattern(n) {
//     for(let i = 1; i <= n; i++) {
//         let num = ""
//         for(let j = 1; j <= n - i + 1; j++){
//             num += j + " "
//         }
//         console.log(num)
//     }
// }
// invertedPattern(8)


//* 55. floyd's pattern triangle
// function floydPatternTriangle(n) {
//     let num = 1
//     for (let i = 1; i <= n; i++) {
//         let arr = ''
//         for (let j = 1; j <= i; j++) {
//             arr += num + " "
//             num++
//         }
//         console.log(arr)
//     }
// }
// floydPatternTriangle(5)

//* 56. 0-1 triangle
// function zeroOneTriangle(n){
//     for(let i = 1; i <= n; i++) {
//         let arr = ''
//         for(let j = 1; j <= i; j++) {
//             if ((i + j) % 2 === 0) {
//                 arr += 1 + " "
//             } else {
//                 arr += 0 + " "
//             }
//         }
//         console.log(arr)
//     }
// }
// zeroOneTriangle(5)

//* 57. Butterfly star pattern
// function ButterflyPattern(n) {
//     //  for top-side
//     for (let i = 1; i <= n; i++) {
//         let stars = ''
//         let space = 2 * (n - i)
//         for (let j = 1; j <= i; j++) {
//             stars += "*  "
//         }
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }

//     // for bottom side
//     for (let i = n; i >= 1; i--) {
//         let stars = ''
//         let space = 2 * (n - i)
//         for (let j = 1; j <= i; j++) {
//             stars += "*  "
//         }
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }
// }
// ButterflyPattern(4)

//* 58. Butterfly star pattern (Optimized version)
// function ButterflyPattern(n) {
//     // top side
//     for (let i = 1; i <= n; i++) {
//         let stars = '*  '.repeat(i)
//         let space = 2 * (n - i)
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }
//     // bottom side
//     for (let i = n; i >= 1; i--) {
//         let stars = '*  '.repeat(i)
//         let space = 2 * (n - i)
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }
// }
// ButterflyPattern(4)

// function ButterflyPattern(n) {
//     // for top side
//     for (let i = 1; i <= n; i++) {
//         let stars = "*  ".repeat(i)
//         let space = (n - i) * 2
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }

//     // for Bottom side
//     for (let i = n; i >= 1; i--){
//         let stars = "*  ".repeat(i)
//         let space = (n - i) * 2
//         let combined = stars + "   ".repeat(space) + stars
//         console.log(combined)
//     }
// }
// ButterflyPattern(5).

//* 59. Solid rhombus pattern
// function solidRhombusPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let space = "   ".repeat(n - i)
//         let stars = "*  ".repeat(n)
//         let combined = space + stars
//         console.log(combined)
//     }
// }
// solidRhombusPattern(5)

//* 60. Hollow Rhombus Pattern
// function hollowRhombusPattern(totRows, totCols) {
//     for (let i = 1; i <= totRows; i++) {
//         let stars = ''
//         let space = "   ".repeat(totRows - i)
//         for (let j = 1; j <= totCols; j++) {
//             if (i == 1 || i == totRows || j == 1 || j == totCols) {
//                 stars += "*  "
//             } else {
//                 stars += "   "
//             }
//         }
//         let combined = space + stars
//         console.log(combined)
//     }
// }
// hollowRhombusPattern(5, 5)

//* 61. Diamond patter
// function diamondPattern(n) {
//     // top side
//     for (let i = 1; i <= n; i++) {
//         // left side top
//         let stars = "*  ".repeat(i)
//         let space = "   ".repeat(n - i)
//         let combined = space + stars

//         // right side top
//         let rightStar = "*  ".repeat(i - 1)
//         let mainCombined = combined + rightStar
//         console.log(mainCombined)

//     }

//     // bottom side
//     for (let i = n; i >= 1; i--) {
//         // left side top
//         let stars = "*  ".repeat(i)
//         let space = "   ".repeat(n - i)
//         let combined = space + stars

//         // right side top
//         let rightStar = "*  ".repeat(i - 1)
//         let mainCombined = combined + rightStar
//         console.log(mainCombined)
//     }
// }
// diamondPattern(4)

//* 62. Number pyramid Pattern
// function numberPyramid(n) {
//     let num = 1
//     for (let i = 1; i <= n; i++) {
//         let arr = ''
//         let arr2 = ''
//         let spaces = 0
//         for (let j = 1; j <= i; j++) {
//             arr += num + " "
//             spaces = n - i
//         }
//         for (let j = 2; j <= i; j++) {
//             arr2 += num + " "
//         }
//         num++
//         let combined = "  ".repeat(spaces) + arr + arr2
//         console.log(combined)
//     }
// }
// numberPyramid(4)

//* 63. Palindrome Pattern with numbers..
// function palindromePattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let arr = ''
//         let space = n - i
//         for (let j = i; j >= 1; j--) {
//             arr += j + " "
//         }

//         let arr2 = ''
//         for (let j = 2; j <= i; j++) {
//             arr2 += j + " "
//         }
//         let combined = "  ".repeat(space) + arr + arr2
//         console.log(combined)
//     }
// }
// palindromePattern(4)


//* 64. Linear Search
// function linearSearch(arr, key) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === key) {
//             return i
//         }
//     }
//     return false
// }
// let arr = [2, 4, 6, 8, 10, 12, 14, 16]
// let key = 10
// let result = linearSearch(arr, key)
// if (linearSearch(arr, key)) {
//     console.log(`The Key ${key} is at index ${result}`)
// } else {
//     console.log(`Key not found in the array`)
// }

//* 64. Linear Search in strings
// function linearSearch(arr, key) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === key) {
//             return i
//         }
//     }
//     return false
// }
// let arr = ["samosa", "chole-bhature", 'vada-pav', 'chaat', 'pani-puri']
// let key = 'vada-pav'
// let result = linearSearch(arr, key)
// if (linearSearch(arr, key)) {
//     console.log(`The Key ${key} is found at index ${result}`)
// } else {
//     console.log("key not found")
// }

//* 65. find the largest in an array
// function largestInArray(arr){
//     let largest = 0
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return `Largest in array is ${largest}`
// }
// let arr = [2, 5, 7, 3, 2, 1]
// console.log(largestInArray(arr))

//* 65. find the smallest in an array
// function smallestInArray(arr) {
//     let smallest = arr[0] //! assume the first element of an array
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return `Smallest in array is ${smallest}`
// }
// let arr = [2, 5, 7, 3, 2, 9]
// console.log(smallestInArray(arr))

//* 66. (IMP) binarySearch
// function binarySearch(arr, key) {
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let mid = Math.round((start + end) / 2)
//         if (arr[mid] === key) {
//             return mid
//         } else if (arr[mid] > key) { //left side
//             end = mid - 1
//         } else { // right side
//             start = mid + 1
//         }
//     }
//     return -1
// }
// let arr = [2, 4, 6, 8, 10, 12, 14, 16]
// let key = 2
// console.log(binarySearch(arr, key))

//* 67. Reverse an Array
//? Method 1
// function reverseArr(arr) {
//     let revArray = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revArray.push(arr[i])
//     }
//     return revArray
// }
// let arr = [2, 4, 6, 8, 10]
// console.log(reverseArr(arr))

//? Method 2 (efficient method)
// function reverseArr(arr) {
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
// }
// let arr = [2, 4, 6, 8, 10]
// reverseArr(arr)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//* 68.Pairs in an Array.
// function pairsOfArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(`for pairs of ${arr[i]} : `)
//         for(let j = i+1; j < arr.length; j++){
//             console.log(`(${arr[i]}, ${arr[j]}),`)
//         }
//     }
// }
// let arr = [2, 4, 6, 8, 10]
// pairsOfArray(arr)

//* 69.Print Total pairs of arrays
// function pairsOfArray(arr) {
//     let totalPairs = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(`(${arr[i]}, ${arr[j]})`)
//             totalPairs++
//         }
//     }
//     console.log(`Total pairs : ${totalPairs}`)
// }
// let arr = [2, 4, 6, 8, 10]
// pairsOfArray(arr)

//* 70. SubArrays
// function SubArrays(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i; j < arr.length; j++){
//             let subArrays = ''
//             for(let k = i; k <= j; k++){
//                 subArrays += arr[k] + " "
//             }
//             console.log(subArrays)
//         }
//     }
// }
// let arr = [2, 4, 6, 8, 10]
// SubArrays(arr)

//* 71. Max SubArray Sum (Brute force)
// function maxSubArraySum(arr) {
//     let curr = 0
//     let maxSubArraySum = Number.NEGATIVE_INFINITY
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             curr = 0
//             for (let k = i; k <= j; k++) {
//                 curr += arr[k]
//             }
//             if (maxSubArraySum < curr) {
//                 maxSubArraySum = curr
//             }
//         }
//     }
//     console.log(`Max SubArr Sum is : ${maxSubArraySum}`)
// }
// let arr = [1, -2, 6, -1, 3]
// maxSubArraySum(arr)


//* 72. Max SubArray Sum (Prefix Sum)
// function maxSubArraySum(arr) {
//     let curr = 0
//     let maxSum = Number.NEGATIVE_INFINITY
//     let prefix = new Array(arr.length).fill(0)
//     prefix[0] = arr[0]
//     for (let i = 1; i < prefix.length; i++) {
//         prefix[i] = prefix[i - 1] + arr[i]
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             curr = i == 0 ? prefix[j] : prefix[j] - prefix[i - 1]
//             if (maxSum < curr) {
//                 maxSum = curr
//             }
//         }
//     }
//     console.log(`Max Sum is : ${maxSum}`)
// }
// let arr = [1, -2, 6, -1, 3]
// maxSubArraySum(arr)

//* 72. Max SubArray Sum (Kadanes)
// function maxSubArraySum(arr) {
//     let currSum = 0
//     let maxSum = Number.NEGATIVE_INFINITY

//     for (let i = 0; i < arr.length; i++) {
//         currSum = currSum + arr[i]
//         if (currSum < 0) {
//             currSum = 0
//         }
//         maxSum = Math.max(maxSum, currSum)
//     }
//     console.log(maxSum)
// }
// let arr = [1, -2, 6, -1, 3]
// maxSubArraySum(arr)


//* 73. Trapped RainWater
// function trappedRainwater(height) {
//     let leftMax = new Array(height.length).fill(0)
//     leftMax[0] = height[0]
//     for (let i = 1; i < height.length; i++) {
//         leftMax[i] = Math.max(height[i], leftMax[i - 1])
//     }

//     let rightMax = new Array(height.length).fill(0)
//     rightMax[height.length - 1] = height[height.length - 1]
//     for (let i = height.length - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(height[i], rightMax[i + 1])
//     }

//     let trappedWater = 0
//     for (let i = 0; i < height.length; i++) {
//         let waterLevel = Math.min(leftMax[i], rightMax[i])
//         trappedWater += waterLevel - height[i]
//     }
//     console.log(trappedWater)
// }
// let height = [4, 2, 0, 6, 3, 2, 5]
// trappedRainwater(height)


//* 74. Best time for buy or sell Stock
// function StockProblem(price) {
//     let buyPrice = Number.POSITIVE_INFINITY
//     let maxProfit = 0
//     for (let i = 0; i < price.length; i++) {
//         if (buyPrice < price[i]) {
//             let profit = price[i] - buyPrice
//             maxProfit = Math.max(maxProfit, profit)
//         } else {
//             buyPrice = price[i]
//         }
//     }
//     console.log(maxProfit)
// }
// let price = [7, 1, 5, 3, 6, 4]
// StockProblem(price)


//* 75. Given an integer array num, return true if any value appears at least twice in the array, and return false if every element is distinct.
// function twiceNumArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// let arr = [1, 2, 3, 1]
// console.log(twiceNumArray(arr))


//* 76.Search an Element in Sorted and Rotated array (Pivot question) (Advance Binary Search)  (arr = [4, 5, 6, 7, 0, 1, 2] here the sorted array is rotated for 0, 1, 2)
// function advanceBinarySearch(arr, target) {
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let mid = (start + end) / 2
//         if (target === arr[mid]) {
//             return mid
//         } else if (arr[start] < arr[mid]) {
//             if (target >= arr[start] && target < arr[mid]) {
//                 end = mid - 1
//             } else {
//                 start = mid + 1
//             }
//         } else {
//             if (target > arr[mid] && target <= arr[end]) {
//                 start = mid + 1
//             } else {
//                 end = mid - 1
//             }
//         }
//     }
//     return -1
// }
// let arr = [4, 5, 6, 7, 0, 1, 2]
// let target = 0
// console.log(advanceBinarySearch(arr, target))


//* 77. Best time for buy or sell Stock problem 2
// function StockProblem(price) {
//     let buyPrice = Number.POSITIVE_INFINITY
//     let maxProfit = 0
//     for (let i = 0; i < price.length; i++) {
//         if (buyPrice < price[i]) {
//             let profit = price[i] - buyPrice
//             maxProfit = Math.max(maxProfit, profit)
//         } else {
//             buyPrice = price[i]
//         }
//     }
//     console.log(maxProfit)

// }
// let price =  [7, 6, 4, 3, 1]
// StockProblem(price)

//* 78. TrappedWater Question 2
// function trappedRainwater(height) {
//     let leftMax = new Array(height.length).fill(0)
//     leftMax[0] = height[0]
//     for (let i = 1; i < height.length; i++) {
//         leftMax[i] = Math.max(height[i], leftMax[i - 1])
//     }

//     let rightMax = new Array(height.length).fill(0)
//     rightMax[height.length - 1] = height[height.length - 1]
//     for (let i = height.length - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(height[i], rightMax[i + 1])
//     }

//     let trappedWater = 0
//     for(let i = 0; i < height.length; i++) {
//         let waterLevel = Math.min(leftMax[i], rightMax[i])
//         trappedWater += waterLevel - height[i]
//     }
//     console.log(trappedWater)
// }
// // let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// let height =  [4, 2, 0, 3, 2, 5]
// trappedRainwater(height)

//* 79. Triplets
// function triplets(arr) {
//     for (let i = 0; i < arr.length - 2; i++) {
//         for (let j = i; j < arr.length - 2; j++) {
//             for (let k = j + 1; k < arr.length - 2; k++) {
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     console.log(`[${arr[i]}, ${arr[j]}, ${arr[k]}]`)
//                 }
//             }
//         }
//     }
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// triplets(arr)

//* 80. 2 Sum Using HashMap
// function twoSum(arr) {
//     let map = new Map()
//     for(let i = 0; i < arr.length; i++) {
//         let complement = -i
//         if (map.has(complement)) {
//             console.log(`Pair found : (${complement}, ${i})`)
//         }
//         map.set(arr[i], true)
//     }
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// twoSum(arr)

//* 81. Three Sum
// function threeSum(arr) {
//     let result = []
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length - 2; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) continue;
//         let start = i + 1
//         let end = arr.length - 1
//         while (start < end) {
//             const sum = arr[i] + arr[start] + arr[end]
//             if (sum === 0) {
//                 result.push([arr[i], arr[start], arr[end]])
//                 while (start < end && arr[start] === arr[start + 1]) start++
//                 while (start < end && arr[end] === arr[end + 1]) end++

//                 start++
//                 end++
//             } else if (sum < 0) {
//                 start++
//             } else {
//                 end--
//             }
//         }
//     }
//     return result
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(arr))


//* 82.Three Sum using hashMap
// function threeSum(arr) {
//     let result = []
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length - 2; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) continue;
//         let target = -arr[i]
//         let map = new Map()
//         for(let j = i + 1; j < arr.length; j++){
//             let complement = target - arr[j];
//             if (map.has(complement)) {
//                 result.push([arr[i], complement, arr[j]])

//             }
//             map.set(arr[j], j)
//         }
//     }
//     return result
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(arr))


// function twoSum(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let sum = arr[i] + arr[j]
//             if (sum === 0) {
//                 result.push([i, j])
//             }
//         }
//     }
//     return result
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(twoSum(arr))

// function twoSum(arr) {
//     let result = []
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         let complement = -arr[i]
//         if (map.has(complement)) {
//             result.push([map.get(complement), i])
//         }
//         map.set(arr[i], i)
//     }
//     return result
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(twoSum(arr))

//*  83. Bubble sort method
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// }

// function printArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + " ")
//     }
// }

// let arr = [5, 4, 6, 2, 3]
// bubbleSort(arr)
// printArr(arr)


//* 84. Bubble Sort Decreasing order
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// }

// function printArr(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i] + " ")
//     }
// }

// let arr = [5, 4, 6, 2, 3]
// bubbleSort(arr)
// printArr(arr)

//* 85. Selection Sort
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let smallest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[smallest]) {
//                 smallest = j
//             }
//         }
//         let temp = arr[smallest]
//         arr[smallest] = arr[i]
//         arr[i] = temp
//     }
// }

// function printArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + " ")
//     }
// }

// let arr = [5, 4, 6, 2, 3]
// selectionSort(arr)
// printArr(arr)


//* 86. Insertion Sort
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i]
//         let prev = i-1
//         while(prev >= 0 && arr[prev] > curr){
//             arr[prev + 1] = arr[prev]
//             prev--  // until the index become -1
//         }
//         arr[prev + 1] = curr //arr[prev + 1] because of prev-- prev become -1 thats why we are moving to index 1 by doing arr[prev + 1]
//     }
// }

// function printArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + " ")
//     }
// }
// let arr = [5, 4, 6, 2, 3]
// insertionSort(arr)
// printArr(arr)