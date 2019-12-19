import { hasClass, addClass, removeClass } from './util';

type Config = {
  delay: number
  hoverClass: string
  activeClass: string
  switch: boolean
  timespan: number
}

const defaultOption: Config = {
  delay: 1000,
  timespan: 10,
  hoverClass: 'is-hovered',
  activeClass: 'is-active',
  switch: false
}

export default function (element: NodeListOf<Element> | string, option: Partial<Config>) {
  const opt = { ...defaultOption, ...option };
  const items: HTMLElement[] = [];

  if (typeof element === 'string') {
    element = document.querySelectorAll(element);
  }
  
  [].forEach.call(element, item => {
    items.push(item);
  });

  items.forEach(item => {
    let timeout = -1;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      if (hasClass(item, opt.hoverClass)) {
        return;
      }
      if (opt.switch) {
        items.forEach(eachItem => {
          removeClass(eachItem, opt.activeClass);
          setTimeout(() => {
            removeClass(eachItem, opt.hoverClass);
            addClass(item, opt.hoverClass);
            setTimeout(() => {
              addClass(item, opt.activeClass);
            }, opt.timespan);
          }, opt.timespan);
        })
      } else {
        addClass(item, opt.hoverClass);
        setTimeout(() => {
          addClass(item, opt.activeClass);
        }, opt.timespan);
      }
    });
    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        removeClass(item, opt.activeClass);
        setTimeout(() => {
          removeClass(item, opt.hoverClass);
        }, opt.timespan);
      }, opt.delay);
    });
  })
}