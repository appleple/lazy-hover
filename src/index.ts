import { hasClass, addClass, removeClass } from './util';

type Config = {
  delay: number
  hoverClass: string
  activeClass: string
  switch: boolean
  timespan: number
  onOpen: () => void
  onClose: () => void,
  beforeOpen: () => void,
  beforeClose: () => void
}

const defaultOption: Config = {
  delay: 1000,
  timespan: 100,
  hoverClass: 'is-hovered',
  activeClass: 'is-active',
  switch: false,
  onOpen: () => {},
  onClose: () => {},
  beforeOpen: () => {},
  beforeClose: () => {}
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
        });
        timeout = setTimeout(() => {
          items.forEach(eachItem => {
            removeClass(eachItem, opt.hoverClass);
          });
          addClass(item, opt.hoverClass);
          opt.beforeOpen();
          setTimeout(() => {
            addClass(item, opt.activeClass);
            opt.onOpen();
          }, opt.timespan);
        }, opt.timespan);
      } else {
        addClass(item, opt.hoverClass);
        opt.beforeOpen();
        timeout = setTimeout(() => {
          addClass(item, opt.activeClass);
          opt.onOpen();
        }, opt.timespan);
      }
    });
    item.addEventListener('mouseleave', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        removeClass(item, opt.activeClass);
        opt.beforeClose();
        setTimeout(() => {
          removeClass(item, opt.hoverClass);
          opt.onClose();
        }, opt.timespan);
      }, opt.delay);
    });
  })
}