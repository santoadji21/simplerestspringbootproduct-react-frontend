import React, { Component } from "react";
import ProductService from "../services/ProductService";

class UpdateProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      description: "",
      price: "",
      amount: "",
    };
    this.changeProductName = this.changeProductName.bind(this);
    this.changeProductDescription = this.changeProductDescription.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    ProductService.getproductById(this.state.id).then((res) => {
      let product = res.data;
      this.setState({
        name: product.name,
        description: product.description,
        price: product.price,
        amount: product.amount
      });
      console.log(product)
    });

  }

  updateProduct = (e) => {
    e.preventDefault();
    let product = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      amount: this.state.amount,
    };
    console.log("product => " + JSON.stringify(product));
    console.log("id => " + JSON.stringify(this.state.id));
    ProductService.updateProduct(product, this.state.id).then((res) => {
      this.props.history.push("/");
    });
  };

  changeProductName = (event) => {
    this.setState({ name: event.target.value });
  };

  changeProductDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeProductPrice = (event) => {
    this.setState({ price: event.target.value });
  };

  changeProductAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update product</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Product Name: </label>
                    <input
                      placeholder="Product Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeProductName}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Description : </label>
                    <input
                      placeholder="Product Description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeProductDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Price: </label>
                    <input
                      placeholder="Product Price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changeProductPrice}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Amount: </label>
                    <input
                      placeholder="Product Amount"
                      name="price"
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.changeProductAmount}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateProduct}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProductComponent;
