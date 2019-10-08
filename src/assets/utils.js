
/* returns true if the element is visible */
function isVisible(id, threshold = 50) {
  const element = document.getElementById(id);
  const bounding = element.getBoundingClientRect();

  const windHeight = window.innerHeight || document.documentElement.clientHeight;

  return bounding.bottom >= 0 + threshold
      && bounding.top <= windHeight - threshold;
}


/* returns true if the element is visible or was already scrolled past */
function isScrolled(id, threshold = 50) {
  const element = document.getElementById(id);
  const bounding = element.getBoundingClientRect();

  const windHeight = window.innerHeight || document.documentElement.clientHeight;

  return bounding.top <= windHeight - threshold;
}

export {
  isScrolled, isVisible,
};
