/* Slider */
const sliderButtonPrev = document.querySelector(".slider__button--prev");
const sliderButtonNext = document.querySelector(".slider__button--next");
const sliderList = document.querySelector(".slider__list");
const sliderListItems = sliderList.querySelectorAll(".slider__item");

const width = 349;
let position = 0;
const maxSlides = sliderListItems.length;
const count = 1;

sliderButtonNext.addEventListener("click", () => {
  position -= width * count;
  position = Math.max(position, -width * (sliderListItems.length - count));
  sliderList.style.marginLeft = position + "px";

  console.log("position >>> ", position);

  if (position === -width * (sliderListItems.length - 4)) {
    sliderButtonNext.setAttribute("disabled", "disabled");
  }

  if (position < 0) {
    sliderButtonPrev.removeAttribute("disabled");
  }
});

sliderButtonPrev.addEventListener("click", () => {
  position += width * count;
  position = Math.min(position, 0);
  sliderList.style.marginLeft = position + "px";

  console.log("position >>> ", position);

  if (position === 0) {
    sliderButtonPrev.setAttribute("disabled", "disabled");
  }

  if (position !== -width * (sliderListItems.length - 4)) {
    sliderButtonNext.removeAttribute("disabled");
  }
});

/* Counter */
const controls = document.querySelectorAll(".control");

controls.forEach((element) => {
  const currentControlDisplay = element.querySelector(".control__counter");
  let value = +currentControlDisplay.textContent;
  element.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("control__button--plus")) {
      value++;
      console.log(value);
      currentControlDisplay.textContent = value;
    }

    if (evt.target.classList.contains("control__button--minus") && value !== 1) {
      value--;
      console.log(value);
      currentControlDisplay.textContent = value;
    }
  });
});

const counterMinus = document.querySelector(".control__button--minus");
const counterPlus = document.querySelector(".control__button--plus");
const counterDisplay = document.querySelector(".control__counter");
