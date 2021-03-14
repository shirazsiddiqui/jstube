//ARRAY

var countries = ["india","usa",'japan',"russia"];

var states = new Array("bihar","rajasthan","west bangal","jharkhand");

console.log(countries);
console.log(states);
console.log(states[0]);
console.log(states[1]);

console.log(states.length);

//replace the value
states[0]="delhi";
console.log(states);


var user= ["shiraz", "shiraz@gmail.com", "3","34", true];
console.log(user);

user.pop();
console.log(user);

user.pop();
console.log(user);


user.unshift("new valuse that are display");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("3"));
console.log(user.indexOf("shiraz"));

console.log(Array.from("shiraz"));
