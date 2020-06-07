// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);

// question 5
var catObject = {
// string value
    name: "Mia",
// string value
    colour: "Grey",
// number value
    age: 4
};

// question 6
console.log(catObject.age);

// question 7
var catArray = [
    {
// string value
    name: "Mia",
// string value
    colour: "Grey",
// number value
    age: 4
    }
];

// question 8
for(var i=0; i < catArray.length; i++){
    console.log(catArray[i].name);
}
for(var i=0; i < catArray.length; i++){
    console.log(catArray[i].colour);
}
for(var i=0; i < catArray.length; i++){
    console.log(catArray[i].age);
}

// question 9
function logToConsole(theAnimal) {
    console.log(theAnimal);
}

// question 10
logToConsole("donkey");
