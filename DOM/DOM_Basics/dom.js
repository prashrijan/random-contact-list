// const elemById = document.getElementById("first");
// const elemByClass = document.getElementsByClassName("info");
// const elemByTag = document.getElementsByTagName("div");
// const elemByQuerySelector = document.querySelector("div");
// const elemByQuerySelectorAll = document.querySelectorAll("div");

// console.log(elemById);
// console.log(elemByClass[0]);
// console.log(elemByTag[1]);
// console.log(elemByQuerySelector);
// console.log(elemByQuerySelectorAll);

// const info = document.querySelector(".info");
// const infoVal = info.innerHTML;

// console.log(info);
// console.log(infoVal);

// document.write("hey just adding more content");

const elem = document.querySelector(".message");
// const val = elem.innerText;

// elem.innerText = "Hey just got text updated";
elem.innerHTML = "<h1>Hey got response from the server</h1>";

console.log(elem);
