// Endpoint URL for fetching random user data
const API = "https://randomuser.me/api/?results=10";

// Array to store fetched user data
let users = [];

// DOM elements references
const slider = document.querySelector(".slider");
const lockScreen = document.getElementById("lockScreen");
const appScreen = document.getElementById("appScreen");
const contactScreen = document.getElementById("contactScreen");
const spinner = document.getElementById("spinner");
const accordionContainer = document.getElementById("accordionExample");
const userCount = document.getElementById("userCount");
const searchContainer = document.getElementById("searchContainer");

slider.addEventListener("change", (e) => {
  let sliderValue = e.currentTarget.value;

  // Reset slider value if below 100
  if (sliderValue < 100) {
    slider.value = 0;
  }

  // Unlock the app screen when slider reaches 100
  if (sliderValue === "100") {
    lockScreen.classList.add("d-none");
    appScreen.classList.replace("d-none", "d-flex");
  }
});

// Function to display user data in the accordion
const displayData = (userList) => {
  userCount.innerText = userList.length;

  accordionContainer.innerHTML = "";
  userList.forEach((element, index) => {
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
                      <p>${element.location.street.number}, ${element.location.street.name}</p>
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

// Function to fetch user data from the API
const fetchData = async () => {
  // Hide the app screen and show the contact screen
  appScreen.classList.replace("d-flex", "d-none");
  contactScreen.classList.add("d-block");
  try {
    const res = await fetch(API);
    const data = await res.json();

    users = data.results;
    console.log(users);

    displayData(users);

    spinner.classList.add("d-none");
  } catch (error) {
    alert(error);
  }
};

// Function to filter the user list based on the search input
const filterArray = (e) => {
  const value = e.target.value.toLowerCase();

  if (value.length === 0) {
    accordionContainer.innerHTML = "";
    displayData(users);
    return;
  }

  // Filter users based on the search query
  const filteredUsers = users.filter((user) => {
    return (
      user.name.first.toLowerCase().includes(value) ||
      user.name.last.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    );
  });

  accordionContainer.innerHTML = "";
  displayData(filteredUsers);
};

appScreen.addEventListener("click", fetchData);

const timeContainer = document.querySelector(".time");

// Function to get the current time in HH:MM format
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Function to update the displayed time every second
function displayTime() {
  let currentTime = getCurrentTime();
  timeContainer.innerHTML = `<p>${currentTime}</p>`;
}

displayTime();

setInterval(displayTime, 1000);

// Event listener for filtering users based on search input
searchContainer.addEventListener("input", filterArray);
