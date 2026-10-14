var hall = document.querySelector("#hall");
var who = document.querySelector("#who");
var many = document.querySelector("#many");
var free = document.querySelector("#free");
var statusLine = document.querySelector("#status");

if (hall && who && many && free && statusLine) {
  hall.addEventListener("click", onSeat);
}

function onSeat(event) {
  var seat = event.target.closest(".seat");
  if (seat === null) return;
    if (seat.classList.contains("taken")) {
    seat.classList.remove("taken");
    seat.innerHTML = "<span>" + seat.dataset.n + "</span>";
    free.textContent = String(Number(free.textContent) + 1);
    return;
  }
    var name = who.value;
  var count = Number(many.value);
  var start = Number(seat.dataset.n);
  if (Number.isNaN(count)) {
    many.setCustomValidity("not a number");
    many.reportValidity();
    return;
  }
  many.setCustomValidity("");

  if (count < 1 || start + count - 1 > 8) return;
  for (var j = start; j < start + count; j++) {
    if (document.querySelector("#seat-" + j).classList.contains("taken")) return;
  }

  for (var i = start; i < start + count; i++) {
    var s = document.querySelector("#seat-" + i);
    s.textContent = name;
    s.classList.add("taken");
  }
  free.textContent = String(Number(free.textContent) - count);
  statusLine.textContent = name + " sat down.";
}