import React, { Component } from "react";
import Table from "react-bootstrap/Table";
class Data extends Component {
  state = {};
  container = {
    margin: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "5px",
  };
  box1 = {
    boxShadow: "0 0 20px 10px #f3f3f3",
    padding: "3px",
  };
  box2 = {
    boxShadow: "0 0 20px 10px #f3f3f3",
    padding: "3px",
  };
  containerFBR = {
    margin: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "5px",
    boxShadow: "0 0 20px 10px #f3f3f3",
  };
  boxFBR1 = {
    padding: "3px",
  };
  boxFBR2 = {
    padding: "3px",
  };
  render() {
    console.log(this.props.fbr);
    return (
      <>
        <div>
          <h1 className="text-center bg-success p-1 m-2">
            {this.props.store.name}
          </h1>
          <h2 className="m-2 p-2 bg-danger">
            <marquee>
              Store Code:{" "}
              <span className="text-white">{this.props.store.code}</span> |
              Region:{" "}
              <span className="text-white">{this.props.store.region}</span>
            </marquee>
          </h2>
        </div>
        {/*  Main Container */}
        <div style={this.container}>
          {/* Anydesks */}
          <div style={this.box1}>
            <h3 className="text-center bg-dark text-white">V9 Anydesk</h3>
            <h4 className="text-center">{this.props.store.v9}</h4>
            <h3 className="text-center bg-dark text-white">Prism Anydesk</h3>
            <h4 className="text-center">{this.props.store.prism}</h4>
          </div>
          {/* Passwords */}
          <div style={this.box2}>
            <h3 className="text-center bg-dark text-white">User Password</h3>
            <h4 className="text-center">{this.props.store.userPass}</h4>
            <h3 className="text-center bg-dark text-white">
              Administrator Password
            </h3>
            <h4 className="text-center">{this.props.store.adminPass}</h4>
          </div>
        </div>

        {/* FBR Container */}
        <h2 className="bg-dark text-center text-white">FBR ID DETAILS</h2>
        <div style={this.containerFBR}>
          <div style={this.boxFBR1}>
            {this.props.fbrKeys.map((e) => (
              <h3 className="bg-primary text-white">{e}</h3>
            ))}
          </div>
          <div style={this.boxFBR2}>
            {this.props.fbrValues.map((e) => (
              <h3 className="bg-primary text-white">{e}</h3>
            ))}
          </div>
        </div>

        {/* {(() => {
          for (let i = 0; i < 20; i++) return <h3>{this.props.fbrKeys[i]}</h3>;
        })()} */}
      </>
    );
  }
}

export default Data;
