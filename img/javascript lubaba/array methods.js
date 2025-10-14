//array methods

//concat
let fruit =["apple","banana"];
let vegetables = ["carrot","potato"];
let combined = fruit.concat(vegetables);
console.log(combined);//output: ["apple","banana","carrot","potato"]

//join
let fruits =["apple","banana","mango"];
let joined = fruits.join(" and ");
console.log(joined);//output: "apple and banana and mango"

//pop
let fruits1 =["apple","banana","mango"];
let removed = fruits1.pop();//deletes the last element
console.log(removed);//output: "mango"
console.log(fruits1);//output: ["apple","banana"]

//push
let fruits2 =["apple","banana","mango"];
 let newlength =fruits2.push("grapes");//adds the element at the end
 console.log(newlength);//output: 4
console.log(fruits2);//output: ["apple","banana","mango","grapes"]

//sort
let numbers =[5,3,1,2,4];
numbers.sort();
console.log(numbers);//output: [1,2,3,4,5]//numbers as strings

// let fruits2 =["mango","banana","apple"];
// fruits2.sort();
//  console.log(fruits2);//output: ["apple","banana","mango"]//strings as strings



