import React, { Component } from "react";
import ProductService from "../services/ProductService";


class ViewProductComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      product: {},
    };
  }

  componentDidMount() {
    ProductService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Product Name </label>
              <div> {this.state.product.name}</div>
            </div>
            <div className="row">
              <label> Product Description </label>
              <div> {this.state.product.description}</div>
            </div>
            <div className="row">
              <label> products Price </label>
              <div> {this.state.product.price}</div>
            </div>
            <div className="row">
              <label> products Amount </label>
              <div> {this.state.product.amount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewProductComponents;
