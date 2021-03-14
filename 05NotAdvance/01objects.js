var User = function(firstName , courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`course count is : ${this.courseCount}`);
    };
};


User.prototype.getFirstname = function (){
    console.log(`your first name is: ${this.firstName}`);
};


var shiraz = new User("shiraz",2);
//console.log(shiraz);
shiraz.getCourseCount();

if (shiraz.hasOwnProperty("firstName")) {
    shiraz.getFirstname();

}

var ali = new User ("ali",1);
//console.log(ali);
ali.getCourseCount();
ali.getFirstname();