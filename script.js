const API = "https://randomuser.me/api/?results=10";

const slider = document.querySelector(".slider");
const lockScreen = document.getElementById("lockScreen");
const appScreen = document.getElementById("appScreen");
const contactScreen = document.getElementById("contactScreen");
const spinner = document.getElementById("spinner");
const accordionContainer = document.getElementById("accordionExample");
const userCount = document.getElementById("userCount");

slider.addEventListener("change", (e) => {
  let sliderValue = e.currentTarget.value;

  if (sliderValue < 100) {
    slider.value = 0;
  }
  if (sliderValue === "100") {
    lockScreen.classList.add("d-none");
    appScreen.classList.replace("d-none", "d-flex");
  }
});

const displayData = (arr) => {
  userCount.innerText = arr.length;
  arr.forEach((element, index) => {
    console.log(element);
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    accordionItem.innerHTML = `
        <h2 class="accordion-header">
                  <button
                    class="accordion-button gap-2 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target= "#${index}"
                    aria-expanded="false"
                    aria-controls="${index}"
                  >
                    <div class="img">
                      <img
                        class="profileImage"
                        src=${element.picture.thumbnail}
                        alt="profile-image"
                      />
                    </div>
                    <div class="ms-2">
                      <h5 class="fw-bold">${element.name.title}. ${element.name.first} ${element.name.last}</h5>
                      <p>${element.location.street.number}${element.location.street.name}</p>
                    </div>
                  </button>
                </h2>
                <div
                  id="${index}"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body d-flex align-items-center flex-column row-gap-3"
                  >
                    <div class="img">
                      <img
                        class="cardImage"
                        src=${element.picture.thumbnail}
                      />
                    </div>
                    <div class="details d-flex flex-column row-gap-1">
                      <div class="fw-bold">
                        <i class="bi bi-person-circle"></i>
                        <span>${element.name.title}. ${element.name.first} ${element.name.last}</span>
                      </div>
                      <div></div>
                      <div>
                        <a href="tel:12345">
                          <i class="bi bi-phone-fill"></i>
                          <span>
                            ${element.phone}
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="mailto:shubik@gmail.com">
                          <i class="bi bi-envelope"></i>
                          <span>${element.email}</span>
                        </a>
                      </div>
                      <div>
                        <a href="mailto:shubik@gmail.com">
                          <i class="bi bi-globe-asia-australia"></i>
                          <span>${element.location.city}, ${element.location.state}, ${element.location.country}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
    `;
    accordionContainer.appendChild(accordionItem);
  });
};

const fetchData = async () => {
  appScreen.classList.replace("d-flex", "d-none");
  contactScreen.classList.add("d-block");

  const res = await fetch(API);
  const data = await res.json();

  displayData(data.results);
  spinner.classList.add("d-none");
};

appScreen.addEventListener("click", fetchData);

const timeContainer = document.querySelector(".time");

// Get Current Time
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function displayTime() {
  let currentTime = getCurrentTime();

  timeContainer.innerHTML = `<p>${currentTime}</p>`;
}

displayTime();

setInterval(displayTime, 1000);
