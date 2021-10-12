import React, { Component } from "react";
import ProductService from "../services/ProductService";

class ListProductComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    ProductService.deleteProducts(id).then((res) => {
        const products = this.state.product
        products.filter((p) => p.id !== id);
      this.setState({
        product: products
      });
    });
  }

  viewProduct(id) {
    this.props.history.push(`/view/${id}`);
  }

  editProduct(id) {
    this.props.history.push(`/update/${id}`);
  }

  componentDidMount() {
    ProductService.getProducts().then((res) => {
      this.setState({ product: res.data });
    });
  }

  addProduct() {
    this.props.history.push("/create");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Product List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addProduct}>
            {" "}
            Add Product
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Product Name</th>
                <th> Product Description</th>
                <th> Product Price</th>
                <th> Product Amount</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.product.map((product) => (
                <tr key={product.id}>
                  <td> {product.name} </td>
                  <td> {product.description} </td>
                  <td> {product.price}</td>
                  <td> {product.amount}</td>
                  <td>
                    <button
                      onClick={() => this.editProduct(product.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteProduct(product.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewProduct(product.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListProductComponents;
