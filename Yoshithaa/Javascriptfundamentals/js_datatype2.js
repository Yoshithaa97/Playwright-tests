//non-primitive data types: they are  mutable and they are stored in heap memory and they are used to stored multiple values and they are 3 types...

//1.object: it is used to store multiple values in a single variable and it is denoted by curly braces{}
let userdetails ={
    name: "yoshithaa",
    age: 25,
    qualification: "bca",
    isActive: true,
    isnotactive: false,
};
console.log(userdetails);

//2.array:it is used to store multiple values in a single variable nd it is denoted by square brackets[]
let fruits = ["apple","banana","grapes","mango","strawberry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

/*3.function: it is used to store a block of code that can be exected when it is called and it is denoted by function keyword
 or
 it is block of reusable code 
 */
function add(a,b){
    return a+b;
}
console.log(add(5,2));

function greet(name){
    return "hello";
}
console.log(greet("yoshithaa"));

//important points :
/*null returns object and undefined returns undefined/null returns object -historical bug in js
arrays are technically objects in js
functions are also treated as objects in js
*/
