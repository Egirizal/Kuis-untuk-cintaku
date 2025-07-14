
function createHeart(color, animationType = 'fall') {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationName = animationType;
  heart.style.background = color;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function triggerCorrectEffect() {
  for (let i = 0; i < 10; i++) {
    createHeart("red", "beat");
  }
}

function triggerWrongEffect() {
  for (let i = 0; i < 10; i++) {
    createHeart("grey", "fall");
  }
}

// Tambahkan CSS ke halaman
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: fixed;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(45deg);
  animation-duration: 3s;
  animation-timing-function: ease-out;
  z-index: 9999;
  opacity: 0.7;
}
.heart::before, .heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: inherit;
  border-radius: 50%;
}
.heart::before {
  top: -10px;
  left: 0;
}
.heart::after {
  left: -10px;
  top: 0;
}
@keyframes fall {
  0% { top: -10px; opacity: 1; }
  100% { top: 100vh; opacity: 0; }
}
@keyframes beat {
  0%, 100% { transform: scale(1) rotate(45deg); }
  50% { transform: scale(1.5) rotate(45deg); }
}
`;
document.head.appendChild(style);
