import axios from "axios";

const PRODUCT_API = "http://127.0.0.1:8080/API/products";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_API);
  }

  createProduct(product) {
    return axios.post(PRODUCT_API, product);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API + "/" + productId);
  }

  updateProduct(product, productId) {
    return axios.put(PRODUCT_API + "/" + productId, product);
  }

  deleteProduct(productId) {
    return axios.delete(PRODUCT_API + "/" + productId);
  }
}

export default new ProductService();
