//conditional operators with ;logical operators

//marks generator
let marks = 45;
if (marks >= 90 && marks <= 100) {
    console.log("GIKI");
} else if (marks >= 80 && marks < 90) {
    console.log("NUST");
} else if (marks >= 70 && marks < 80) {
    console.log("LUMS");
} else if (marks >= 45 && marks < 70) {
    console.log("NED");
} else if (marks > 100) {
    console.log("INVALID MARKS AS TOTAL MARKS ARE 100");
} else if (marks < 0) {
    console.log("THE NUMBER YOU ENTERED IS NEGATIVE NUMBER");
} else {
    console.log("NOT ELIGIBLE,TRY NEXT YEAR")
}


//CNIC GENERATOR
let age = 42;
if (age >= 18 && age <= 50) {//18-50
    console.log("eligible,you can generate your CNIC")
}
else if (age >= 0 && age < 18) {//0-17.9999
    console.log("you are not eligible to generate CNIC")
}
else if (age > 50 && age < 150) {//50.111-149.999
    console.log("you are not considered for CNIC, your last upated  CNIC will be use forever")
}
else if (age < 0) {//negative number
    console.log("you entered negative number, please enter valid age")
}
else {//500-infinity
    console.log("you entered invalid age,try again")
}

//weather forecast system
let temp = 2
if (temp > 0 && temp < -50) {
    console.log("Freezing weather, take care")
}
else if (temp > 0 && temp <= 9) {
    console.log("The weather is cold, take care")
}
else if (temp > 10 && temp <= 19) {
    console.log("The weather is calm, take care")
}
else if (temp > 20 && temp <= 29) {
    console.log("The weather is partly sunny and partly cloudy, take care")
}
else if (temp > 30 && temp <= 39) {
    console.log("The weather is sunny, take care")
}
else if (temp > 40 && temp <= 49) {
    console.log("The weather is extremely sunny, take care")
}
else if (temp > 50 && temp <= 60) {
    console.log("Heat wave, take care")
} else {
    console.log("Inpredictable weather")
}

//AGE GROUPS AND CLASSIFICATION
let age1 = 25;
if (age1 > 0 && age1 < 13) {
    console.log("You are a child");
} else if (age1 >= 13 && age1 < 18) {
    console.log("You are a teenager");
} else if (age1 >= 18 && age1 < 30) {
    console.log("You are a young adult");
} else if (age1 >= 30 && age1 < 50) {
    console.log("You are an adult");
} else if (age1 >= 50 && age1 < 65) {
    console.log("You are middle-aged");
} else if (age1 >= 65 && age1 < 150) {
    console.log("You are a senior");
}
else {
    console.log("Invalid age");

}



