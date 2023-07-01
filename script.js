let count = 0;
let countInterval;

function start() {
  countInterval = setInterval(function () {
    count += 1;
    document.querySelector(".counter").innerHTML = count;
    document.querySelector(".start-btn").disabled = true;
  }, 1000);
}

function pause() {
  clearInterval(countInterval);
  document.querySelector(".start-btn").disabled = false;
}

function reset() {
  clearInterval(countInterval);
  count = 0;
  document.querySelector(".counter").innerHTML = count;
  document.querySelector(".start-btn").disabled = false;
}
