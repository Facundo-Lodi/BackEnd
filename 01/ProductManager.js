class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, stock, author) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      stock,
      author
    };

    if (this.products.length === 0) {
      product.code = 1;
    } else {
      product.code = this.products[this.products.length - 1].code + 1;
    }

    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(code) {
    const productById = this.products.find(product => product.code == code);

    return productById ? productById : "Not found";
  }
}

const productManager = new ProductManager();

productManager.addProduct("Siega", "En un mundo perfecto, los humanos no mueren. Pero en el mundo de El Segador, los segadores son los únicos que terminan con la vida, para mantener el equilibrio.", 15, "Siega.jpg", 100, "Neal Shusterman");
productManager.addProduct("Nimbo", "Continuación de Siega, donde las reglas del mundo de los segadores están cambiando.", 18, "Nimbo.jpg", 50, "Neal Shusterman");

console.log(productManager.getProducts());
console.log(productManager.getProductById(2));