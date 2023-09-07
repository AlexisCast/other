//EXTENSION CODE RUNNER SELECT CODE AND RIGHT CLICK AND SELECT 'RUN CODE'

/**
 *! Data and Types
 */
var age = 18; // number
var name = "Jane"; // string
var name = { first: "Jane", last: "Doe" }; // object
var truth = false; // boolean
var sheets = ["HTML", "CSS", "JS"]; // array
var a;
typeof a; // undefined
var a = null; // value null
/**
 *! Objects
 */
var student = {
	// object name
	firstName: "Jane", // list of properties and values
	lastName: "Doe",
	age: 18,
	height: 170,
	fullName: function () {
		// object function
		return this.firstName + " " + this.lastName;
	},
};
student.age = 19; // setting value
student.age++; // incrementing
name = student.fullName(); // call object function
console.log(student.fullName())

/**
 *!Strings Methods
 */
 var abc = " abcdefghijklmnopqrstuvwxyz ";
 var esc = 'I don\'t \n know';   // \n new line
 var len = abc.length;           // string length
 abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
 abc.lastIndexOf("lmno");        // last occurance
 //Extracting string parts
 abc.slice(3, 6);//def           // cuts out "def", negative values count from behind
 abc.slice(3);//defghijklmnopqrstuvwxyz   
 abc.slice(-3);//xyz   
 //replacing string
 let newAbc=abc.replace("abc","123");    // find and replace, takes regular expressions
 let newAbcd=abc.replaceAll("abc","123"); 
 //Upper & Lowercase
 abc.toUpperCase();              // convert to upper case
 abc.toLowerCase();              // convert to lower case
 //concat
 abc.concat(" ", str2);          // abc + " " + str2
 //remove whitespaces
let text2 = abc.trim();
let text2 = abc.trimStart();
let text2 = abc.trimEnd();
//pads string
let text = "5";
let padded = text.padStart(4,"0");
let padded = text.padEnd(4,"x");
//String S
 abc.charAt(2);                  // character at index: "c"
 abc[2];                         // unsafe, abc[2] = "C" doesn't work
 abc.charCodeAt(2);              // character code at index: "c" -> 99
 abc.split(",");//toArray        // splitting a string on commas gives an array
 abc.split("");//toArray         // splitting on characters
 128.toString(16);               // number to hex(16), octal (8) or binary (2)
/**
 *!Strings Search
 */
 abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
 //indexOf
 //Both indexOf(), and lastIndexOf() return -1 if the text is not found:
 // could take two parameters but could not take regular expression
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let index = text.indexOf("locate", 15);//starts from position 15
//lastIndexOf()
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
let index = text.lastIndexOf("locate", 15);
//search
//take regular expression but no two paramaters
let text = "Please locate where 'locate' occurs!";
text.search("locate");
text.search(/locate/);
//match
//method returns an array containing the results of matching a string against a string (or a regular expression).
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
text.match(/ain/g); //['ain', 'ain', 'ain']
text.match(/ain/gi); //['ain', 'AIN', 'ain', 'ain']
//matchAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/gi);
console.log(Array.from(iterator)) 
/*
[
  [
    'cats',
    index: 7,
    input: 'I love cats. Cats are very easy to love. Cats are very popular.',
    groups: undefined
  ],
  [
    'Cats',
    index: 13,
    input: 'I love cats. Cats are very easy to love. Cats are very popular.',
    groups: undefined
  ],
  [
    'Cats',
    index: 41,
    input: 'I love cats. Cats are very easy to love. Cats are very popular.',
    groups: undefined
  ]
]
*/
//includes
//returns true or false
let text = "Hello world, welcome to the universe.";
text.includes("world");//true
text.includes("world", 12);//false starts from position 12 case sensative
//startsWith() endsWith()
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");//true
text.startsWith("world")//false
text.startsWith("world", 5)//false starts from position 5
text.startsWith("world", 6)//true starts from position 6
text.endsWith("Doe");
text.endsWith("world", 11);
//Back-Tics
let firstName = "John";
let lastName = "Doe";
let text = `Hello World!`;
let text = `He's often called "Johnny"`;
let text = `Welcome ${firstName}, ${lastName}!`;
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
 /**
 *!Numbers and Math
 */
//toString()
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
//toFixed()
//returns a string, with the number written with a specified number of decimals:
let x = 9.656;
x.toFixed(0);//10
x.toFixed(2);//9.66
x.toFixed(4);//9.6560
x.toFixed(6);//9.656000
//toPrecision()
//returns a string, with a number written with a specified length
let x = 9.656;
x.toPrecision();//9.656
x.toPrecision(2);//9.7
x.toPrecision(4);//9.656
x.toPrecision(6);//9.65600

 var pi = 3.141;
 pi.toFixed(0);          // returns 3
 pi.toFixed(2);          // returns 3.14 - for working with money
 pi.toPrecision(2)       // returns 3.1
 pi.valueOf();           // returns number
 Number(true);           // converts to number
 Number(new Date())      // number of milliseconds since 1970
 parseInt("3 months");   // returns the first number: 3
 parseFloat("3.5 days"); // returns 3.5
 Number.MAX_VALUE        // largest possible JS number
 Number.MIN_VALUE        // smallest possible JS number
 Number.NEGATIVE_INFINITY// -Infinity
 Number.POSITIVE_INFINITY// Infinity

var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root 
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5

/**
 *!Arithmetic
 */
 a * (b + c)         // grouping
 person.age          // member
 person[age]         // member
 !(a == b)           // logical not
 a != b              // not equal
 typeof a            // type (number, object, function...)
 x << 2  x >> 3      // minary shifting
 a = b               // assignment
 a == b              // equals
 a != b              // unequal
 a === b             // strict equal
 a !== b             // strict unequal
 a < b   a > b       // less and greater than
 a <= b  a >= b      // less or equal, greater or eq
 a += b              // a = a + b (works with - * %...)
 a && b              // logical and
 a || b              // logical or
/**
 *!Arrays
 */
 var dogs = ["Bulldog", "Beagle", "Labrador"]; 
 var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration
 
 alert(dogs[1]);             // access value at index, first item being [0]
 dogs[0] = "Bull Terier";    // change the first item
 
 for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
 console.log(dogs[i]);
 }
//METHODS
 dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort
/**
 *
 */

/**
 *!JSON
 */
 JSONj
 var str = '{"names":[' +                    // crate JSON object
 '{"first":"Hakuna","lastN":"Matata" },' +
 '{"first":"Jane","lastN":"Doe" },' +
 '{"first":"Air","last":"Jordan" }]}';
 obj = JSON.parse(str);                      // parse
 document.write(obj.names[1].first);         // access
//SEND
 var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
var myJSON = JSON.stringify(myObj);  
console.log(myJSON)                       // stringify
window.location = "demo.php?x=" + myJSON; 
//STORING AND RETRIEVING
myObj = { "name":"Jane", "age":18, "city":"Chicago" };
myJSON = JSON.stringify(myObj);                 // storing data
localStorage.setItem("testJSON", myJSON);   
text = localStorage.getItem("testJSON");        // retrieving data 
obj = JSON.parse(text);
console.log(obj)
document.write(obj.name);
/**
 *
 *! Functions
 */
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
console.log(x)


/**
 * 
 * !JSON
 */
const book ={
  title:'Foo Bar Baz',
  author:'Jizz Gizz'
}
const bookJSON= JSON.stringify(book)
console.log(bookJSON)

const parsedData=JSON.parse(bookJSON)
console.log(parsedData.author)

