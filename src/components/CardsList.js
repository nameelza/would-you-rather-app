import React, { Component } from "react";
import { connect } from "react-redux";

class CardsList extends Component {
  render() {
    return (
      <div>
        <h3>List</h3>
      </div>
    );
  }
}

export default connect()(CardsList);
