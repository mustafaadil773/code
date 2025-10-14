//switchcase (without break)
let fruits = "apple";
switch (fruits) {
  case "apple":
    console.log("Apple is red");
  case "banana":
    console.log("Banana is yellow");
  case "orange":
    console.log("Orange is orange");
  default:
    console.log("No fruit found");
}

//switchcase (with break)
let marks = 100;
switch (marks) {
  case 100:
    console.log("A+");
    break;
  case 90:
    console.log("A");
    break;
  case 80:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
  case 60:
    console.log("D");
    break;
  default:console.log("Fail");
}