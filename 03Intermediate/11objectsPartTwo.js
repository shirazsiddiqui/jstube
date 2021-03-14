var user = {
    firstName: "Shiraz",
    lastName: "Ali",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList : [],
    buyCourse : function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses `;

    },
  };


  var courseList = true;
  console.log(user.firstName);
  console.log(user.getCourseCount());
  user.buyCourse("react js course");
  user.buyCourse("angular course");
  console.log(user.getCourseCount());