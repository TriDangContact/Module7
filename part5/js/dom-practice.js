/*eslint-env browser*/

//STEP 1
function alert1() {
  alert("I have been clicked");
}

//STEP 5
window.onload = function () {
  //STEP 2
  var part2Btn = document.getElementById("part2Btn");
  part2Btn.onclick = alert1;

  //STEP 3
  var part3Btn = document.getElementById("part3Btn");
  // part3Btn.addEventListener("click", alert1, false);

  //STEP 4
  part3Btn.addEventListener("click", function () {
    alert("I have been clicked");
  }, false);
}
