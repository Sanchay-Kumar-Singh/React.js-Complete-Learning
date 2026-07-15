import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginBottom: "20px",fontSize:"50px",color:"red"}}>
      Change Theme
    </button>
  );
}

export default ThemeButton