//function isEven(element)
var isEven = (element) =>    //this and upper code both are work same

{
    //if (element % 2===0)
    //{
    //return true;
    //}
    //return false;

return element% 2===0;

}

//console.log(isEven(2));
//console.log(isEven(3));

//var result = [2,3,6,8].every(isEven);
//console.log(result);

//callBack
//var result= [2,4,6,8].every((x) =>{
//    return x %2 ===0;
//}
//);
//console.log(result);

var result = [2,4,6,8].every((x) => x%2 === 0 );//every keyword here are match all value of array
console.log(result);

var result = [2,4,6,8].every( (e) => (e%2===0) );
console.log(result);