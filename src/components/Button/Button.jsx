import React from 'react'

const Button = (text, clickHandler) => {
  return <Button onClick={clickHandler}>{text}</Button>
}

export default Button