for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

let j = 1;
while (j <= 5) {
    if (j % 2 === 0) {
        console.log(j + " is even");
    }
    else {
        console.log(j + " is odd");
    }
    j++;
}

let k = 1;
do {
    if (k % 2 === 0) {
        console.log(k + " is even");
    }
    else {
        console.log(k + " is odd");
    }
    k++;
} while (k <= 5)