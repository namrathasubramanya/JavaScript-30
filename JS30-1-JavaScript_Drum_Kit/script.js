console.log('hi');
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', endTransition));
window.addEventListener('keydown',playSound);

function playSound(e) {
  console.log(e.keycode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('play');
  audio.currentTime = 0;
  audio.play();
}

function endTransition(e) {
  if (e.propertyName !== 'transform') return;
    e.target.classList.remove('play');
  console.log('end');
}