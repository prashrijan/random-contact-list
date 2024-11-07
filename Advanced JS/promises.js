// let promise1 = new Promise((resolve, reject) => {
//   resolve("Hello");
// });

// console.log(typeof promise1);

function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Did Something");
      resolve("https://randomuser.me/api/");
    }, 0);
  });
}

doSomething()
  .then(async (url) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  })
  .then(() => {
    console.log("fetch success");
  });
