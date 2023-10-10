// sleepIn
const sleepIn__weekday = document.getElementById("sleepIn__weekday");
const sleepIn__vacation = document.getElementById("sleepIn__vacation");
const sleepIn__result = document.getElementById("sleepIn__result");
const sleepIn__button = document.getElementById("sleepIn__button");
// // //

// monkeyTrouble
const checkButton = document.getElementById("checkButton");
const aSmile = document.getElementById("aSmile");
const bSmile = document.getElementById("bSmile");
const monkey__trouble__result = document.getElementById(
  "monkey__trouble__result"
);
// // //

// sumDouble
const sumDouble__first__input = document.getElementById(
  "sumDouble__first__input"
);
const sumDouble__second__input = document.getElementById(
  "sumDouble__second__input"
);
const sumDouble__button = document.getElementById("sumDouble__button");
const sum__double__result = document.getElementById("sum__double__result");
// // //

// diff21
const diff21__button = document.getElementById("diff21__button");
const diff21__input = document.getElementById("diff21__input");
const diff21__result = document.getElementById("diff21__result");
// // //

// sleepIn
sleepIn__button.addEventListener("click", () => {
  console.log(sleepIn__weekday.checked);
  console.log(sleepIn__vacation.checked);
  sleepIn(sleepIn__weekday.checked, sleepIn__vacation.checked);
});

function sleepIn(weekday, vacation) {
  if (weekday === vacation) {
    sleepIn__result.innerHTML = true;
    return true;
  } else if (vacation === true && weekday === false) {
    sleepIn__result.innerHTML = true;
    return true;
  } else {
    sleepIn__result.innerHTML = false;
    return false;
  }
}
// // //

// monkeyTrouble
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  monkeyTrouble(aSmile.checked, bSmile.checked);
});

function monkeyTrouble(aSmile, bSmile) {
  if (aSmile === bSmile) {
    monkey__trouble__result.innerHTML = true;
    return true;
  } else {
    monkey__trouble__result.innerHTML = false;
    return false;
  }
}
// // //

// sumDouble
sumDouble__button.addEventListener("click", () => {
  sumDouble(+sumDouble__first__input.value, +sumDouble__second__input.value);
});

function sumDouble(a, b) {
  if (a !== b) {
    sum__double__result.innerHTML = a + b;
    return a + b;
  } else if (a === b) {
    sum__double__result.innerHTML = 2 * (a + b);
    return 2 * (a + b);
  }
}
// // //

// diff21
diff21__button.addEventListener("click", () => {
  diff21(diff21__input.value);
});

function diff21(n) {
  if (n < 21) {
    diff21__result.innerHTML = 21 - n;
    return 21 - n;
  } else if (n > 21) {
    diff21__result.innerHTML = (n - 21) * 2;
    return (n - 21) * 2;
  } else {
    diff21__result.innerHTML = 0;
    return 0;
  }
}
// // //