import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { auth } from "../../firebase/firebase.utils";
import "./header.style.scss";

const Header = ({ currentUSer }) => {
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
          icon="contact"
          label=" contact"
        />
        <ButtonLink
          className="nav-icon option "
          to="/register"
          icon="user"
          label=" user"
        />
        {currentUSer ? (
          <ButtonLink
            className="nav-icon option "
            action="action"
            to="/"
            icon="close"
            label=" sign-out"
          />
        ) : (
          <ButtonLink
            className="nav-icon option "
            to="/register"
            icon="chevronUpClient"
            label=" sign-In"
          />
        )}
      </nav>
    </div>
  );
};
export default Header;

const ButtonLink = ({ className, icon, to, label, swap = false, action }) => {
  const navigate = useNavigate();

  const actionBtn = () => {
    {
      action ? auth.signOut() : navigate(to);
    }
  };
  return (
    <button className={className} onClick={actionBtn}>
      <span>
        {label && swap && label}
        {icon && <Icon i={icon} />}
        {label && !swap && label}
      </span>
    </button>
  );
};
