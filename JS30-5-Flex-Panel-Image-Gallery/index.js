const node = document.querySelectorAll(".panel");

node.forEach(node => node.addEventListener('click', expand));

node.forEach(node => node.addEventListener('transitionend', text));

function expand() {
  this.classList.toggle('open');
}

function text(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('active');
  }
}
