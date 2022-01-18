import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss";
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
    console.log("submit");
  };
  handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value, name);
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton btnGoogle onClick={SignInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
