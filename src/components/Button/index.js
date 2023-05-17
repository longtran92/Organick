import React from "react";
import "./style.scss";

const Button = (props) => {
  const { btnType, btnText, btnIcon } = props;
  return (
    <button className={`btn-primary ${btnType}`}>
      <span>{btnText}</span>
      <div className="btn-icon">
        <img src={btnIcon} alt="" />
      </div>
    </button>
  );
};

export default Button;
