const countText = document.getElementById("count");
const incBtn = document.getElementById("add");
const restartBtn = document.getElementById("restart");
const zikirMe = document.getElementById("zikr");
const clickSound = document.getElementById("clickSound");

let i = 0;

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function counterInc() {
  i++;
  playClick();

  if (i <= 33) {
    zikirMe.textContent = "سُبْحَانَ ٱللَّٰهِ";
  } else if (i <= 66) {
    zikirMe.textContent = "ٱلْحَمْدُ لِلَّٰهِ";
  } else if (i <= 99) {
    zikirMe.textContent = "ٱللَّٰهُ أَكْبَرُ";
    if (i === 99) {
      alert("Zikr tugadi! Qayta boshlang.");
      i = 0;
    }
  }
  countText.textContent = i;
}

function counterDec() {
  i = 0;
  zikirMe.textContent = "سُبْحَانَ ٱللَّٰهِ";
  countText.textContent = i;
}

incBtn.addEventListener("click", counterInc);
restartBtn.addEventListener("click", counterDec);
