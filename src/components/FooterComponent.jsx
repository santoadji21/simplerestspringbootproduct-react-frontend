import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer text-center mb-5 mt-3">
          <span className="text-muted">
            All Rights Reserved {new Date().getFullYear()} @Santoadji21
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
