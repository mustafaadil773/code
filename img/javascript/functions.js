console.log("this is function topic")
console.log("function ko baar baar use kar saktey hain bina dobara likhey")
console.log("task perform karna: function ek specific task ya operation perform karta ha ")
console.log("input ko perform karna : function input parameters ko le kar un par operation perform karta ha ")
console.log("output dena: function kisi result ko return karke output deta ha")






function batsman(name){
    console.log( "hey " + name + " you are nice ")
    console.log( "hey " + name + " you are good")
    console.log( "hey " + name + " you tshirt is nice ")
    console.log( "hey " + name + " your batting is good too ")
}

batsman("abishek sharma") // calling the function
batsman("farhan") // calling the function

function allrounder (name){
    console.log( "hey " + name + " you are nice ")
    console.log( "hey " + name + " you are good")
    console.log( "hey " + name + " you tshirt is nice ")
    console.log( "hey " + name + " your all roundering is good too ")
} 
    allrounder("hardik") // calling the function
    allrounder("saim ayub") // calling the function



//sum
function add (a,b){
   console.log(a+b);
}
add(5,6);
add(10,20);

//return statement

function plus (x,y){
    console.log(x,y)
    return x + y
}
result=plus( 5, 6)
result2=plus( 10, 20)
console.log(" the sum of x and y is:" +result)
console.log(" the sum of x and y is:" +result2)

//optional terminator

function sum (a,b,c=5){
    console.log(a+b+c)
}
sum(3,2)
sum(3,2,7)