import React, { Component } from "react";

class New extends Component {
  render() {
    return (
      <div>
        <h1>Create New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form>
          <input type="text" placeholder="Option One" />
          <h4>OR</h4>
          <input type="text" placeholder="Option Two" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default New;