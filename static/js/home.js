//challenge 01: age in days
function startButton() {
  let year = prompt("which year were you born...Buddy");
  let ageInDays = (2020 - year) * 365;
  let h1 = document.createElement("h1");
  h1.setAttribute("id", "resetting");
  let answer = document.createTextNode(
    "You Have Wasted " + ageInDays + " days of Your Life Successfully"
  );
  h1.appendChild(answer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function resetButton() {
  document.getElementById("resetting").remove();
}
