import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepages/homepage.component.jsx";
import "./App.css";
const MyComponent = () => {
  const location = useLocation();
  console.log(location);
  // location.pathname is '/users/new'
  return (
    <div>
      <Link to={`${location.pathname}/14`}>ffg</Link>
      <Link to={`${location.pathname}/15`}>ffg</Link>
      <Link to={`${location.pathname}/16`}>ffg</Link>
      <Link to={`${location.pathname}/17`}>ffg</Link>
    </div>
  );
};
const MyComponent2 = () => {
  const location1 = useLocation();

  // location.pathname is '/users/new'
  return (
    <div>
      <span>Path is: {location1.pathname}</span>
    </div>
  );
};

function Invoices() {
  const history = useNavigate();
  return (
    <div>
      <button onClick={() => history("/")}>home page</button>
    </div>
  );
}
function IdDenty() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1> http://localhost:3000/invoices/{params.Id} does exist</h1>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/:Id" element={<IdDenty />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/uselocationtest" element={<MyComponent />} />
      <Route path="/uselocationtest/14" element={<MyComponent2 />} />
    </Routes>
  );
}

export default App;
