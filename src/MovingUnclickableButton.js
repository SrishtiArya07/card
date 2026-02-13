import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MovingUnclickableButton = () => {
  const [position, setPosition] = useState(null); // null = start inline

  const moveButton = () => {
    const buttonHeight = 40;
    const buttonWidth = 100;

    const newTop = Math.floor(Math.random() * (window.innerHeight - buttonHeight - 20));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - buttonWidth - 20));

    setPosition({
      top: `${newTop}px`,
      left: `${newLeft}px`,
    });
  };

  return (
    <Button
      variant="contained"
      color="error"
      onMouseEnter={moveButton}
      onClick={(e) => e.preventDefault()}
      sx={{
        transition: 'all 0.4s ease-out',
        ...(position
          ? { position: 'absolute', top: position.top, left: position.left }
          : {}), // inline until hovered
      }}
    >
      No!
    </Button>
  );
};

export default MovingUnclickableButton;