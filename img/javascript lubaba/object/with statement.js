//with statement
//with statement allows you to refer to the properties of an object using the object name without repeating the object name.

let person = {
    name: "zain",
    age: 30,
    gender: "male"
  };

  //without 'with' statement
  console.log(person.name); // John
  console.log(person.age); // 30
  console.log(person.gender); // male

  //with 'with' statement
  with (person) {
    console.log(name); // John
    console.log(age); // 30
    console.log(gender); // male
}

// with statement is not recommended to use because it can make the code harder to read and maintain.





