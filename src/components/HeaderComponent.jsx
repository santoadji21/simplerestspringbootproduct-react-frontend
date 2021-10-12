import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="mb-4">
          <nav className="navbar justify-content-center navbar-expand-md navbar-dark bg-dark">
            <div>
              <a
                href="https://github.com/santoadji21/springboot-simplerest-api"
                className="navbar-brand "
              >
                Simple Rest Api Product Springboot
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
