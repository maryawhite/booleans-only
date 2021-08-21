"use strict"
console.log("#1.");
var string1 = "a";
var string2 = "Mary";
string2.includes(string1);
console.log(string2.includes(string1));
//the above code returns true because it is true that string2 includes string1

console.log("#2.")
//You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9);
console.log(Boolean(10 > 9));
//your console will also return true if you just type 10 > 9 directly in the console.

console.log("#3.")
var age = 26;
age >= 21;
console.log(age >= 21);

console.log("#4. Strings return true, as long as it's not an empty string");
Boolean('Hello');
console.log(Boolean('Hello'));
Boolean("supercalifragilicious")
console.log(Boolean("supercalifragilicious"));


console.log("#5. Numbers with a value return true");
Boolean(555);
console.log(Boolean(555));
Boolean(-555);
console.log(Boolean(-555));
Boolean(2**2);
console.log(Boolean(2 ** 2));
Boolean(4**.5);
console.log(Boolean(4**.5));
console.log(Boolean(Infinity));

console.log("#6. Not false is true");
!false;
console.log(!false);
//when using true and false, you don't need quotes and it should be lowercase: false  true


console.log("#19. The Boolean of the string '0' is truthy");
console.log(Boolean("0"));


console.log("#20. The Boolean of the number 0 is falsy");
console.log(Boolean(0));







