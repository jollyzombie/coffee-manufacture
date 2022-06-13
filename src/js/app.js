import Products from './Products.js';
import { select, homePageName } from './settings.js';

const app = {
  init: function () {
    const thisApp = this;

    new Products();
    thisApp.getElement();
    thisApp.initPageListener();
    thisApp.initActivatePage(homePageName);
  },

  newHeader: (function () {
    const header = [
      'Home of <br> Original Tastes',
      'Real Venezuela,<br> Real Coffee',
      'Taste Real <br> Venezuela'
    ];
    const randomHeader = Math.floor(Math.random() * header.length);
    document.getElementById('heroDisplay').innerHTML = header[randomHeader];
  })(),

  getElement: function () {
    const thisApp = this;

    thisApp.dom = {
      subPages: document.querySelectorAll(select.pages),
      contact: document.querySelector(select.contact),
      home: document.querySelector(select.home),
      product: document.querySelector(select.product),
    };
  },

  initActivatePage: function (pageId) {
    const thisApp = this;

    for (const page of thisApp.dom.subPages) {
      page.classList.add(select.hidden);
    }
    for (const page of thisApp.dom.subPages) {
      let pageAttributes = page.getAttribute('id');
      if (pageAttributes == pageId) {
        page.classList.remove(select.hidden);
      }
    }
  },

  initPageListener: function () {
    const thisApp = this;
    const links = document.querySelectorAll(select.links);

    for (const link of links) {
      link.addEventListener('click', function (event) {
        const clickedElement = event.target.getAttribute('href').substring(1);
        thisApp.initActivatePage(clickedElement);
      });
    }
  },
};

app.init();
