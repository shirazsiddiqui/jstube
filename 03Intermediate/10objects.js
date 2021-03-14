var user = {
    firstName : "shiraz",
    lastName : "ali",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.log(user);

console.table(user);


var myphone = {
    brand : "LG",
    model : "lg g8 X",
    year : "2020",
    listedPrice : 70000,
    sellingPrice : 55000,
    offerPrice : 27000,
};

console.table(myphone);