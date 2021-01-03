const arrColors = ["green", "red", "#ebae34", "#ebe834", "#eb0e79", "#0eeb96"];
const textColor = document.querySelector(".color-text");

let num = -1;
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {

    num += 1;
    if (num >= arrColors.length) {
      num = 0;
    }

    e.target.parentElement.parentElement.style.background = arrColors[num];
    textColor.innerHTML = arrColors[num]

  }
})

