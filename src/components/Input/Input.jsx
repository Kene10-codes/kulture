import React from "react";

const Input = (type, onChange, style, rest) => {
  return <input style={style} type={type} onChange={onChange} {...rest} />;
};

export default Input;
