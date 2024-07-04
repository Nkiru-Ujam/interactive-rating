"use strict";

const ratingButtons = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const formEl = document.querySelector("#rating-form");
const headEl = document.querySelector(".header");
const appreciationCont = document.querySelector(".thank");
const rating = document.querySelector(".rating");
const message = document.querySelector(".message");
const rateCont = document.querySelector(".rateDiv");
// console.log(ratingButtons, submitBtn);
// console.log(rating, message);

headEl.style.display = "block";
rateCont.style.display = "none";

let selectedBtn;
let activeBtn;
ratingButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    activeBtn = button;
    button.classList.add("active");
    selectedBtn = button.value;
    console.log(selectedBtn);

    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();

      rateCont.innerHTML = `<p class="rate">You selected ${selectedBtn} out of ${ratingButtons.length}</p>`;
      rateCont.style.display = "flex";

      rating.textContent = "Thank You!";
      rating.style.textAlign = "center";
      message.textContent =
        "We appreciate you taking the time to give a rating. If you ever need more support, don't hesistate to get in touch.";
      formEl.style.display = "none";
      headEl.style.display = "none";
      appreciationCont.style.display = "flex";
    });
  });
});

// Prepend will create an element at the top of a div
// const rateText = document.createElement("p");
// rateText.textContent = "";
// rateText.textContent = `you selected ${selectedBtn} out of ${ratingButtons.length}`;
// midEl.prepend(rateText);
