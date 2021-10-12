import React, { Component } from "react";
import ProductService from "../services/ProductService";

class CreateProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      description: "",
      price: "",
      amount: ""
    };
    this.changeProductName = this.changeProductName.bind(this);
    this.changeProductDescription = this.changeProductDescription.bind(this);
    this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      ProductService.getProductById(this.state.id).then((res) => {
        let product = res.data;
        this.setState({
          name: product.name,
          description: product.description,
          price: product.price,
          amount: product.amount,
        });
      });
    }
  }
  saveOrUpdateProduct = (e) => {
    e.preventDefault();
    let product = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      amount: this.state.amount,
    };
    console.log("product => " + JSON.stringify(product));

    // step 5
    if (this.state.id === "_add") {
      ProductService.createProduct(product).then((res) => {
        this.props.history.push("/");
      });
    } else {
      ProductService.updateProduct(product, this.state.id).then((res) => {
        this.props.history.push("/");
      });
    }
  };

  changeProductName = (event) => {
    this.setState({ name: event.target.value });
  };

  changeProductDescription = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeProductPrice = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeProductAmount = (event) => {
    this.setState({ emailId: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Product</h3>;
    } else {
      return <h3 className="text-center">Update Product</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Product Name: </label>
                    <input
                      placeholder="Product Name"
                      name="name"
                      className="form-control"
                      // value={this.state.name}
                      onChange={this.changeProductName}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Description: </label>
                    <input
                      placeholder="Description"
                      name="lastName"
                      className="form-control"
                      // value={this.state.description}
                      onChange={this.changeProductDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Price: </label>
                    <input
                      placeholder="Price"
                      name="price"
                      className="form-control"
                      // value={this.state.price}
                      onChange={this.changeProductPrice}
                    />
                  </div>
                  <div className="form-group">
                    <label> Product Amount: </label>
                    <input
                      placeholder="Amount"
                      name="amount"
                      className="form-control"
                      // value={this.state.amount}
                      onChange={this.changeProductAmount}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateProduct}
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

export default CreateProductComponent;
