import { select, settings, templates } from './settings.js';
import utils from './utils.js';

class Products {
  constructor() {
    const thisProducts = this;

    thisProducts.getData();
  }

  getData() {
    const thisProducts = this;
    const url =  settings.db.url + '/' + settings.db.data;

    fetch(url)
      .then(function(Response){
        return Response.json();
      })
      .then(function(data){
        const serverData = data;
        thisProducts.getProducts(serverData);
      });
  }

  getProducts(thisData) {

    const thisProduct = this;
    const generatedHTML = templates.productItem(thisData);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelectorAll(select.containerOf.productsContainer);

    for (const containers of productsContainer) {
      containers.appendChild(thisProduct.element.cloneNode(true));
    }
  }
}

export default Products;