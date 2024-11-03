const elemById = document.getElementById("first");
const elemByClass = document.getElementsByClassName("info");
const elemByTag = document.getElementsByTagName("div");
const elemByQuerySelector = document.querySelector("div");
const elemByQuerySelectorAll = document.querySelectorAll("div");

console.log(elemById);
console.log(elemByClass[0]);
console.log(elemByTag[1]);
console.log(elemByQuerySelector);
console.log(elemByQuerySelectorAll);
