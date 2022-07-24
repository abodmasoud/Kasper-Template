const COFFEE = {
  finalNumber: 236,
  container: document.getElementById("coffee-number"),
};
const COMPLETED = {
  finalNumber: 256,
  container: document.getElementById("completed-number"),
};
const MAIL = {
  finalNumber: 1743,
  container: document.getElementById("mail-number"),
};
const AWARDS = {
  finalNumber: 17,
  container: document.getElementById("awards-number"),
};
const TIME = 1000;
let isFirstTime = true;

const aboutNumbersAnimation = () => {
  if (isFirstTime) {
    incBy(COFFEE.container, COFFEE.finalNumber, 0, TIME);
    incBy(COMPLETED.container, COMPLETED.finalNumber, 0, TIME);
    incBy(MAIL.container, MAIL.finalNumber, 0, TIME);
    incBy(AWARDS.container, AWARDS.finalNumber, 0, TIME);
    isFirstTime = false;
  }
};

const incBy = (container, final, lastRound, time) => {
  if (lastRound < final) {
    setTimeout(() => {
      lastRound += Math.ceil(final / time);
      container.innerHTML = lastRound;
      incBy(container, final, lastRound, time);
    }, time / final);
  } else {
    container.innerHTML = final;
  }
};

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.onscroll = () => {
  if (isInViewport(document.getElementById("stats"))) {
    aboutNumbersAnimation();
  }
};
