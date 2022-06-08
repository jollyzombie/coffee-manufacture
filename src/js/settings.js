export const select = {
  templateOf: {
    productItem: '#template-products',
  },
  containerOf: {
    data: '[data-container="productsContainer"]',
    pages: '#home, #products, #contact',
    home: '#home',
    contact: '#contact',
    products: '#products',
    startPages: '#products, #contact'
  },
  nav: {
    links: '.nav-link a',
  },
  class: {
    hidden: 'hidden',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
  },
};

export const templates = {
  productItem: Handlebars.compile(document.querySelector(select.templateOf.productItem).innerHTML),
};
