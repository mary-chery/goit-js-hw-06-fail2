const listEl = document.querySelector("#categories");
const liItem = listEl.querySelectorAll(".item");
console.log("Number of categories:", liItem.length);


for (let liClass of liItem) {
    console.log("Category:", liClass.firstElementChild.textContent);
    console.log("Elements:", liClass.lastElementChild.children.length);
}