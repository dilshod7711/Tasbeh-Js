const countText = document.getElementById("count");
const incBtn = document.getElementById("add");
const restartBtn = document.getElementById("restart");
const zikirMe = document.getElementById("zikr");
const clickSound = document.getElementById("clickSound");

let i = parseInt(localStorage.getItem("zikirCount")) || 0;

updateUI(i);

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function counterInc() {
  i++;
  playClick();
  updateUI(i);
  localStorage.setItem("zikirCount", i);
}

function counterDec() {
  i = 0;
  updateUI(i);
  localStorage.setItem("zikirCount", i);
}

function updateUI(count) {
  if (count <= 33) {
    zikirMe.textContent = "سُبْحَانَ ٱللَّٰهِ";
  } else if (count <= 66) {
    zikirMe.textContent = "ٱلْحَمْدُ لِلَّٰهِ";
  } else if (count <= 99) {
    zikirMe.textContent = "ٱللَّٰهُ أَكْبَرُ";
    if (count === 99) {
      i = 0;
      localStorage.setItem("zikirCount", i);
    }
  }
  countText.textContent = count;
}

incBtn.addEventListener("click", counterInc);
restartBtn.addEventListener("click", counterDec);
