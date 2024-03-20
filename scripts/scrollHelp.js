function checkScroll() {
  let top = window.pageYOffset || document.documentElement.scrollTop;

  if (top < 25) {
    document.getElementById("scrollDown").hidden = false;
  } else {
    document.getElementById("scrollDown").hidden = true;
  }

  if (top < window.innerHeight) {
    document.getElementById("scrollUp").hidden = true;
  } else {
    document.getElementById("scrollUp").hidden = false;
  }
}

checkScroll();
window.addEventListener(
  "scroll",
  function () {
    checkScroll();
  },
  false
);

function onScrollHelperClick() {
  window.scrollTo(0, window.innerHeight);
}

function onScrollHelperUpClick() {
  window.scrollTo(0, 0);
}
