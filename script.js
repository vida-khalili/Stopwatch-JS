let count = 0;
let countInterval;

function onloadCounter() {
  if (document.cookie !== "") {
    count = Number(Cookies.get("count"));
    document.querySelector(".counter").innerHTML = count;

    let previousSate = Cookies.get("state");
    if (previousSate === "started") {
      start();
    }
  }
}

function start() {
  countInterval = setInterval(function () {
    count += 1;
    document.querySelector(".counter").innerHTML = count;
    document.querySelector(".start-btn").disabled = true;
    Cookies.set("count", count);
    Cookies.set("state", "started");
  }, 1000);
}

function pause() {
  clearInterval(countInterval);
  document.querySelector(".start-btn").disabled = false;
  Cookies.set("state", "paused");
}

function reset() {
  clearInterval(countInterval);
  count = 0;
  document.querySelector(".counter").innerHTML = count;
  document.querySelector(".start-btn").disabled = false;
  Cookies.set("count", count);
  Cookies.set("state", "reset");
}
