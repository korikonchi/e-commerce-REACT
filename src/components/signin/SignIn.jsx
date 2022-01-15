import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    console.log(this.state);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value, name);
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default SignIn;
