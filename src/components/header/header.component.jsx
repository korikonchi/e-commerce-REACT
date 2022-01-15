import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <ButtonLink
        className="nav-icon option "
        to="/"
        swap
        icon="home"
        label=" Home"
      />

      <nav className="options">
        <ButtonLink
          className="nav-icon option "
          to="/shop"
          icon="home"
          label=" shop"
        />

        <ButtonLink
          className="nav-icon option "
          to="/contact"
          icon="home"
          label=" contact"
        />
        <ButtonLink
          className="nav-icon option "
          to="/register"
          icon="user"
          label=" user"
        />
      </nav>
    </div>
  );
};
export default Header;

const ButtonLink = ({ className, icon, to, label, swap = false }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(to);
  };
  return (
    <button className={className} onClick={navigateTo}>
      <span>
        {label && swap && label}
        {icon && <Icon i={icon} />}
        {label && !swap && label}
      </span>
    </button>
  );
};
