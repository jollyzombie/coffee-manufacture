export const homePageName = 'home';

export const select = {
  templateOf: {
    productItem: '#template-products',
  },
  containerOf: {
    productsContainer: '[data-container="productsContainer"]',
  },
  product: '#products',
  contact: '#contact',
  home: '#home',
  footer: 'footer',
  about: '#about',
  pages: '#home, #products, #contact',
  links: '.nav-link',
  hidden: 'hidden',
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    data: 'data',
  },
};

export const templates = {
  productItem: Handlebars.compile(document.querySelector(select.templateOf.productItem).innerHTML),
};
