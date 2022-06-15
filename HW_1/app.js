const sliders = document.querySelectorAll(".slider");

for (const slider of sliders) {
  slider.addEventListener("click",  () => {
    clearActiveClasses();
    slider.classList.add("active");
  });
}

function clearActiveClasses() {
  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });
}
