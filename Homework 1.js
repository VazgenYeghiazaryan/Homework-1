//1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

function lastTofirst(number) {
    let res = "";
    let lastNumber = 0;
     if (number % 10 === 0) {
      res = number
    }  else if (number < 9) {
      res = number
    }  else {
      lastNumber = number % 10;
      number = (number - lastNumber) / 10;
      res = lastNumber.toString();
      res += number
    }
    res = +res
    return res;
  }
  console.log(lastTofirst(345));

//2. Given three numbers. Sort them by the ascending order. -23, -456, 0

const a = -23;
const b = 456;
const c = 0;

if (a > b) {
  if (b > c) {
    console.log(c, b, a);
  } else if (a > c) {
    console.log(b, c, a);
  } else {
    console.log(b, a, c);
  }
} else if (c > a) {
  if (b > c) {
    console.log(a, c, b);
  } else {
    console.log(a, b, c);
  }
} else {
  console.log(c, a, b);
}

//3.Given the following code rewrite it using only two if operators. (Hint: use logical   operators).

let n = 21;

let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) i += 1;

if (n % 3 === 0 && n % 10 === 1) j += 1;

console.log(i, j);

//4.Write a program which will compute the area of a rectangular or a triangle.

function areaOf(figure, height, base) {
  if (figure === "triangle" && height > 0 && base > 0) {
    return `Square of the triangle is ${(height * base) / 2}`;
  }
  if (figure === "rectangular" && height > 0 && base > 0)
    return `Square of the rectangular is ${height * base}`;
  else return "Please enter only positives";
}
console.log(areaOf("triangle", 6, 7)); 


//5. Given an object. Invert it (keys become values and values become keys). If there ismore than key for that given value create an array.

let obj = {
    a: 1, 
    b: 2,
    c: 2,
}

function invert(obj) {
    let newObj = {};
    let arr = [];
    for (let key in obj) {
    for (let value in obj) {
        if (obj[key] === obj[value]){
            arr.push(value)
        } else {
            newObj[obj[key]] = key
        }
        if (arr.length > 1) {
            newObj[obj[key]] = arr;
        }   
    }
    arr = []
} 
return newObj
}
console.log(invert(obj));




