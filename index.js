const increaseBtn = document.getElementById("increaseBtn");
const clickCounter = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const backgrdBtn = document.getElementById("bkgrdBtn");
const doubleBtn = document.getElementById("doubleBtn")

let count = 0;
let isOn = false;

const updateDisplay = () => {
  clickCounter.textContent = count
}

const increase = () => {  
  if (count < 50) {
    count++
  } 
  updateDisplay()
}

const decrease = () => {
  if (count > 0) {
    count--
  }
  updateDisplay() 
}

const double = () => {
  if (count + 2 <= 50) {
    count += 2
  } 
  updateDisplay()
  }

const reset = () => {
  count = 0
  updateDisplay()
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
doubleBtn.addEventListener("click", double)

backgrdBtn.addEventListener("click", () => {
  if ((isOn = !isOn)) {
    document.body.style.backgroundColor = "white";
    clickCounter.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    clickCounter.style.color = "white";
  }
});
