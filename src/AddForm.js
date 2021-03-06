import React from "react";
// import addItem from "./App";

export default class addForm extends React.Component {

  
  onSubmit(event) {
    event.preventDefault();
  
    const value = this.input.value;
    this.props.onSubmit(value);
   
  }

  render() {
    return (
      <form onSubmit={(e)=>this.onSubmit(e)}>
        <input
          type="text"
          name="itemEntry"
          ref={input => (this.input = input)}
        />
        <button type="submit">button</button>
      </form>
    );
  }
}
