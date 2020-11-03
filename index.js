console.log(1 + 2);

console.log("Hello");

const user = {
  name: "John",
  surname: "Rambo",
  age: 17,
  isTeacher: true,
  address: {
    street: "Cider Knoll Way",
    number: 1404,
    country: "USA",
  },
};
console.log(user.name);
console.log(user["name"]); //same as above!!!

const myNumbers = [8, 6, 4, 2, 1, 3, 5, 7];
const myStrings = ["a", "b", "c", "d"];
const myObject = [
  {
    name: "Stephanie",
    surname: "Flanagan",
  },
  {
    name: "Stacey",
    surname: "Flanagan",
    anotherArray: [1, 2, 3, 4],
  },
  {
    name: "Kimberly",
    surname: "Evans",
  },
];
console.log(myNumbers.length);
console.log(myNumbers.sort());

console.log(myObject[1].anotherArray[2]);
console.log(myObject[2].name);


for (let i=0; i<15; i++){
    console.log(i)
}



const square = function (x) {
    return x*x
}
const SquareArrow =(x) => x*x //same as above!!!



// const oldestMovies = function () {
// let olderMovie = movies[0]
// for(let i=0; i<moves.length; i++){
//     let currentMovie =movies[i]
//     let currentYear=parseInt(currentMovie.Year)
//     if(currentYear < parseInt(olderMovie.Year)) {
//         olderMovie = currentMovie
//     }
// }
// return olderMovie
// }
// console.log(oldestMovie())


/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const twoIntegers = function (x,y) {
 if(x!=y) {
     return (x+y)
 }
 else (x=y)
     return (3*(x+y))
 }

console.log(twoIntegers(4,4))

// const twoIntegers = function (x, y) {
//     return x!==y ? x+y : (x+y)*3;
// }

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const fifty = function (a,b) {
    if (a===50 || b===50 ||a+b===50) {
        return true
    } else {
        return false
    }
}
   console.log(fifty(50,4))
   

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

let removeCharacter = "I am learning Java Script"
removeCharacter =removeCharacter.split("")

removeCharacter.splice(2,1)

//console.log(removeCharacter.split(""));
console.log(removeCharacter.join(""));  //from which & then how many
/*
4)
 Create a function to find the largest of three given integers.
*/

const array1 = [4, 44, 14];

console.log(Math.max(...array1))


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangeCheck=(num1, num2)=>{
    if(num2 >=40 && num2<=60 && num1 >=40 && num1<=60){
        return "the two numbers are between 40 and 60";
    }else if(num2 >=70 && num2<=100 && num1 >=70 && num1<=100){
        return "the two numbers are between 70 and 100";
    }else{
        return "the two given numbers aren't between the needed ranges";
    }
}



console.log(rangeCheck(2,41))
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/


/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
 let cityName = () => {



 }
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const calculateSumThree= []


/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
let arrayIntegers = [1,4]
const numberCheck=()=>{
    for(let i=0; i<arrayIntegers.length; i++){
        return arrayIntegers[i]===1 || arrayIntegers[i]===3 ? true : false
    }
}
console.log(numberCheck());
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

let arrayOtherIntegers = [1,4]
const noThreesOnes=()=>{
    if (arrayOtherIntegers.includes(1) && arrayOtherIntegers.includes(3)){
        return true;
    } else {
        return false;
    }
}

console.log(noThreesOnes());

/*11)
Create a function to find the longest string from a given array of strings. */



/*12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

    const typeOfAngle=(num)=>{

        if(num>0 && num<90){
            return "Acute angle"
        }else if(num===90){
            return "Right angle"
        }else if(num>90 && num<180){
            return "Obtuse angle"
        }else if(num===180){
            return "Straight angle"
        }
    }


    /*
13)
Create a function to find the index of the greatest element of a given array of integers
14)
Create a function to get the largest even number from an array of integers.*/

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/
// const fifty = function (a,b) {
//     if (a===50 || b===50 ||a+b===50) {
//         return true
//     } else {
//         return false
//     }
// }
//    console.log(fifty(50,4))
   

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const calculateSum=(num1, num2)=>{
    let sum = num1+num2;

    if(sum>50 && sum<80){
        return 65
    }else{
        return 80
    }
}

console.log(calculateSum(54,8));
/*19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

let numberNames = (n) => {
    if(n % 3 ===0) {
        return "Diego";
    } else if (n % 5 ===0) {
       return 'Riccardo';
    } else if (n % 7 === 0) {
        return 'Stefano';
    } else if (!n % 3===0 || !n % 5===0 || !n % 7===0) {
        return n
    }
}
    console.log(numberNames(8))


/*20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

// let acronymPhrase = "British Broadcasting Corporation"
// acronymPhrase =acronymPhrase.split("")

// let acronym = => acronymPhrase[0]).join('')



const createAcronym=(phrase)=>{
    let newArray= phrase.split(" ");
    let firstLetters="";
    for(let i=0; i<newArray.length; i++){
        firstLetters+= newArray[i].charAt(0).toUpperCase();
    }
    return firstLetters;
}
console.log(createAcronym("British Broadcasting Corporation"));


function spinWords(backward) {

    let sentence = "";
    let separate = backward.split(" ");
    
    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }
  
  console.log(spinWords("Hey fellow warriors"));

  
  
var numbers = [2,4,6,8,10,12,14,16,17,18,20];

function findOutlier(arr) {
    var odds = arr.filter(function (number) {
    return !!(number % 2)
  });

  var evens = arr.filter(function (number) {
    return !(number % 2)
  });

  var result = (odds.length < evens.length) ? odds.pop() : evens.pop();

  return result;
}

findOutlier(numbers[]);
