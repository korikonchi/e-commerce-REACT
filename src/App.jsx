import {
  Routes,
  Route,
  Link,
  // useParams,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepages/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import "./App.css";

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
      <Route path="*" element={<NotFound />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
