window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  var nav = document.getElementById('nav');

  if (verticalScrollPx === 0) {
    nav.style.backgroundColor = '#00000000';
} else {
    nav.style.backgroundColor = 'var(--dark)';
  }
});
