/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/


//function getUserRole(name , role)
var getUserRole = function(name,role)
{
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;//this is not necessary because we are return the value not display it

        case "subadmin":
            return `${name} is sub-admin with access to create and delete`
            

        case "testprep":
             return `${name} is a test prep with access create and delete`  
    
        case "user":
            return `${name} is a user to consume content ` 
       
        default:
            return `${name} is a  trail user to consume content ` 

            
    }
}

console.log(getUserRole("shiraz","subadmin"));

var getRole = getUserRole('ali',"user");

console.log(getRole);