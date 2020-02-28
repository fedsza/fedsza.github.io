var balance = 0;
window.onload = function() {
  var x = document.getElementById("butt");
  x.onclick = function() {
    balance++;
    var elem = document.getElementById("first");
    elem.innerHTML = balance;
  }
};