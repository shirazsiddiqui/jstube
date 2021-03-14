const shiraz ={
    firstName: "shiraz",
    lastName: "ali",
    role: "admin",
    courseCount: "3",

    getInfo: function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};


const dj ={
firstName: "Rock",
lastName: "DJ",
role: "Sub_Admin",
courseCount: 4,
};

//shiraz.getInfo();
//dj.getInfo();

shiraz.getInfo.bind(dj)();

var djinfo = shiraz.getInfo.bind(dj);
djinfo();

shiraz.getInfo.call(dj);