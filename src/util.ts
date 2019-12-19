export const hasClass = (el: HTMLElement, className: string) => {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

export const addClass = (el:HTMLElement, className: string) => {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!hasClass(el, className)) {
      el.className = el.className + ' ' + className;
    }
  }
}

export const removeClass = (el: HTMLElement, className: string) => {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    if (hasClass(el, className)) {
      var originClass = el.className;
      el.className = (' ' + originClass + ' ').replace(' ' + className + ' ', ' ');
    }
  }
}