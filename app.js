document.getElementById("show").onclick = function() {show()};

document.getElementById("show2").onclick = function() {showEmail()};

function show() {
  document.getElementById("phone").style.display="block";
}

function showEmail() {
  document.getElementById("mail").style.display="block";
}
