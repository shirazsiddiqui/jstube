var testarray = [2,4,6,3,1,5,9,8];
console.log(testarray.fill("s",2,5));

const mynumber = [23,24,25,55,66,77,88,99];

const result = mynumber.filter((num) => num!= 55); // < , > etc
console.log(result);



var users = ["ted","tim","ton","sam","sor","sod"];
console.log(users.slice(1,4)); //first range is included and second is not include

//console.log(user.slice(1));//   cut the one value

//users.splice(1,3, "hii"); //start value   end value
//console.log(users);

users.splice(1,3, "hii", "byy");
console.log(users);