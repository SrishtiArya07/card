import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import shyGif from './././shy.gif';
import yesGif from './././yes.gif';   // ✅ Import your yes.gif
import Box from '@mui/material/Box';
import MovingUnclickableButton from './MovingUnclickableButton';
import React, { useState } from 'react';

function App() {
  const [showYesGif, setShowYesGif] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavenderblush',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Valentine Card */}
      {!showYesGif && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 450 }}
              image={shyGif}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="hotpink">
                Would you be my Valentine?
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Valentine's Day is a capitalist propaganda marketed by companies to sell their products in the name of love. But would you still fall for it if it'd make me happy? If so, you get the honor of being my Valentine, my baby!
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowYesGif(true)} // ✅ Show GIF on click
              >
                Yes
              </Button>
              <MovingUnclickableButton />
            </CardActions>
          </Card>
        </Box>
      )}

      {/* Overlay GIF when Yes is clicked */}
      {showYesGif && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <img src={yesGif} alt="Yes" style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </Box>
      )}
    </Box>
  );
}

export default App;