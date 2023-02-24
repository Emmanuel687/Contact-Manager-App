import React from "react";
// Onchange triggers when a value input is changed

class AddContact extends React.Component {
  // Stores current State
  state = {
    name: "",
    email: "",
  };
  // OnSubmit Function
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              // Update Current State
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              // Update Current State
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <button className="ui button blue">Add </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
