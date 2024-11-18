const slider = document.querySelector(".slider");
const lockScreen = document.getElementById("lockScreen");
const appScreen = document.getElementById("appScreen");

slider.addEventListener("change", (e) => {
  let sliderValue = e.currentTarget.value;

  if (sliderValue === "100") {
    lockScreen.classList.add("d-none");
    appScreen.classList.replace("d-none", "d-flex");
  }
});

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
