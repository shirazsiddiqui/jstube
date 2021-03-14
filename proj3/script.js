const courses = [

    {
        name : "complete React JS course",
        price : "2.3"
    },
    {
        name : "complete Angular course",
        price : "2.9"
    },
    {
        name : "complete MERN course",
        price : "2.5"
    },
    {
        name : "complete C++ course",
        price : "1.3"
    },
    {
        name : "complete PHP course",
        price : "1.9"
    },
    {
        name : "complete C course",
        price : "5.9"
    },

];



function generateList()
{
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        

        li.appendChild(span)
        ul.appendChild(li)

    });
}

//generateList()

window.addEventListener("load",generateList );

const butten = document.querySelector(".sort-btn")

butten.addEventListener("click", () => {
     courses.sort((a,b) => a.price - b.price);
     generateList();
});



const buttenn = document.querySelector(".sort-btnn")

buttenn.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price);
    generateList();
});