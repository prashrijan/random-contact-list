// const first = document.getElementById("first");
document.querySelector("body").style.fontFamily = "sans-serif";
const first = document.getElementsByClassName("info1");

console.log(first);

const elem = document.querySelectorAll("p");

const div = document.querySelector(".first");
console.log(elem);

elem[0].innerText = "Dynamic Paragraphs";

const display = document.querySelector(".display");

const newPara = document.createElement("p");

newPara.innerText = "He is a software developer";

display.appendChild(newPara);

document.write("This text is from js document write");

const google = document.querySelector("[href='https://google.com']");

google.style.color = "#ffce44";
google.style.textDecoration = "none";

const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  alert("Form Submitted Successfully");
  google.classList.add("success");

  button.disabled = true;
  button.classList.replace("active", "disabled");
  button.innerText = "Submitted";
  msg.remove();

  console.log(google.getAttribute("href"));

  google.setAttribute("href", "https://yahoo.com");
  google.innerText = "The google is changed to yahoo now.";
});

const msg = document.querySelector(".message");
msg.classList.add("server");
msg.classList.add("cloud");

console.log(msg.classList.contains("server"));
console.log(msg.classList.contains("danger"));

console.log(msg);

const newElem1 = document.createElement("h2");
const newElem2 = document.createElement("h2");

newElem1.innerText = "Dynamic H2";
newElem2.innerText = "Append";

msg.append(newElem2);
msg.appendChild(newElem1);

const name = document.querySelector(".name");

const increase = document.querySelector(".increaseBtn");
const decrease = document.querySelector(".decreaseBtn");

let i = 1;
increase.addEventListener("click", increaseFont);

decrease.addEventListener("click", decreaseFont);

function increaseFont() {
  i++;
  if (i <= 0) {
    i = 1;
  }
  name.style.fontSize = `${i}rem`;
  console.log(i);
}

function decreaseFont() {
  i--;
  if (i <= 0) {
    i = 1;
    return;
  } else {
    name.style.fontSize = `${i}rem`;
  }
  console.log(i);
}
const toggleSucsess = () => {
  name.classList.toggle("success");
  //   name.style.background = name.style.background !== "green" ? "green" : "none";
  //   name.style.padding =
  //     name.style.padding !== "1rem 2rem" ? "1rem 2rem" : "0rem";
};

name.addEventListener("click", toggleSucsess);
