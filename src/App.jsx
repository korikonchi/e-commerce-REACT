import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Register from "./pages/register/Register";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.unsubscribeFromAuth = null;
    this.state = {
      currentUSer: null,
    };
  }
  //any change on firebase from any source related with this app
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUSer: user });
      console.log(user);
      console.log(this.state);
    });
  }
  //sign out
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  NotFound() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <Link to="/">Go home</Link>
      </div>
    );
  }
  render() {
    return (
      <>
        <Header currentUSer={this.state.currentUSer} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<this.NotFound />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }
}

export default App;
