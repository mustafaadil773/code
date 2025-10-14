const numbers = [3,8,1,9,4,55]

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] %2  === 0) {
        console.log(numbers[i] + " is even")
    }
    else{
        console.log(numbers[i] + " is odd")
    }
}

const numbers2 = [3,8,1,9,4,55]
let i=0;
while(i < numbers2.length){
    if (numbers2[i] %2  === 0) {
        console.log(numbers2[i] + " is even")
    }
    else{
        console.log(numbers2[i] + " is odd")
    }
    i++;
}

const numbers3 = [3,8,1,9,4,55]
let a=0;
do{
    if (numbers3[a] %2  === 0) {
        console.log(numbers3[a] + " is even")
    }
    else{
        console.log(numbers3[a] + " is odd")
    }
    a++;
}while(a < numbers3.length)