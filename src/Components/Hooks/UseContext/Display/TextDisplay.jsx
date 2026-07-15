import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';


const TextDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        fontSize: theme.fontSize,
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      This text changes color, background and font size!
    </div>
  );
}

export default TextDisplay