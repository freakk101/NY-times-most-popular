import React from "react";
import searchIcon from "../search.png";

export default function Nav(props) {
  console.log(props.showBack);
  return (
    <nav>
      {props.showBack ? (
        <div className="back" onClick={() => props.onBack()}>
          {"<<<"}
        </div>
      ) : (
        <div className="hamburger">
          <div />
          <div />
          <div />
        </div>
      )}

      <h4>NY Time Most Popular</h4>
      <img src={searchIcon} alt="" height="20px" />
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
}
