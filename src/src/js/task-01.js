const categories = document.querySelectorAll("h2");

console.log("Number of categories:", categories.length);

const listWithClass = document.querySelectorAll("h2");
const nrElem = document.querySelectorAll("li>ul");
for (let i = 0; i <= listWithClass.length; i++){
    console.log("Category:", listWithClass[i].innerHTML);
    console.log("Elements:", nrElem[i].children.length);
}

