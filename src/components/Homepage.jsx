import React, { Component } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Data from "./data";
import { getStores, getStoresFBR } from "./utils/storeServices";

class Homepage extends Component {
  state = {
    stores: getStores(),
    storesFBR: getStoresFBR(),

    mainHeading: {
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: 10,
    },
    authorize: 0,
  };
  render() {
    this.fbrKeys();
    this.fbrValues();
    return (
      <>
        <h1 style={this.state.mainHeading}>All Store Details</h1>

        <Dropdown className="text-center">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Store Name
          </Dropdown.Toggle>

          <Dropdown.Menu className="bg-secondary text-white">
            {this.state.stores.map((name) => (
              <Dropdown.Item onClick={() => this.show(name.id, name.name)}>
                {name.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {this.state.authorize === 0 ? (
          ""
        ) : (
          <Data
            store={this.state.stores.find(
              (item) => item.id === this.state.authorize
            )}
            fbr={this.state.storesFBR.find(
              (item) => item.id === this.state.authorize
            )}
            fbrKeys={this.fbrKeys()}
            fbrValues={this.fbrValues()}
          />
        )}
      </>
    );
  }

  fbrKeys = () => {
    let storeFBR = this.state.storesFBR.find(
      (item) => item.id === this.state.authorize
    );
    let keys = [];
    for (let key in storeFBR) keys.push(key);
    keys.shift();
    return keys;
  };
  fbrValues = () => {
    let storeFBR = this.state.storesFBR.find(
      (item) => item.id === this.state.authorize
    );
    let values = [];
    for (let value in storeFBR) values.push(storeFBR[value]);
    values.shift();
    return values;
  };

  show = (id, name) => {
    console.log(id, name);
    this.setState({ authorize: id });
  };
}

export default Homepage;
