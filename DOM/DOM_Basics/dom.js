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

// const elem = document.querySelector(".message");
// const val = elem.innerText;

// elem.innerText = "Hey just got text updated";
// elem.innerHTML = "<h1>Hey got response from the server</h1>";

// console.log(elem);

// const elem = document.querySelector("body");

// const res = "Response from the server";
// const textNode = document.createTextNode(res);

// elem.appendChild(textNode);

// console.log(elem);

// const elem = document.querySelector("body");

// const paraElem = document.createElement("p");

// paraElem.textContent = "This is dynamic paragraph";

// elem.appendChild(paraElem);

// const elem = document.querySelector("body");
const paraElem = document.createElement("p");

paraElem.innerText = "Dynamic Paragraph";

// elem.insertBefore(paraElem, document.querySelector(".display"));

const elem = document.querySelector("body");
const aTag = document.querySelector("[href='google.com']");

aTag.style.color = "red";
aTag.style.fontSize = "2rem";
aTag.style.textDecoration = "none";
aTag.style.fontFamily = "sans-serif";

// elem.removeChild(aTag);

// elem.replaceChild(paraElem, aTag);

const attribute = aTag.getAttribute("href");

aTag.setAttribute("href", "https://www.youtube.com");
// aTag.setAttribute("style", "font-size: 4rem;");

// aTag.removeAttribute("href");
document.querySelector("body").appendChild(paraElem);

paraElem.classList.add("success");

console.log(paraElem.classList);

// paraElem.classList.remove("success");
