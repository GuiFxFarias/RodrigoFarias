function menuShow() {
  let menumobile = document.querySelector(".div-bar-mobile");
  if (menumobile.classList.contains("open")) {
    menumobile.classList.remove("open");
    document.querySelector(".icon").src = "menu_white_36dp.svg";
  } else {
    menumobile.classList.add("open");
    document.querySelector(".icon").src = "close_white_36dp.svg";
  }
}
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items[currentItem].classList.add("current-item");
  });
});
