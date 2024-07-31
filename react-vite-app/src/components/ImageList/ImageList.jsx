import * as React from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import hotel from '../../assets/hotel.jpg';
import hotel2 from '../../assets/hotel2.jpg';
import hotel3 from '../../assets/hotel3.jpg';
import hotel4 from '../../assets/hotel4.jpg';
import hotel5 from '../../assets/hotel5.jpg';
import hotel6 from '../../assets/hotel6.jpg';
import hotel7 from '../../assets/hotel7.jpg';
import hotel8 from '../../assets/hotel8.jpg';
import hotel9 from '../../assets/hotel9.jpg';


const itemData = [
  {
    img: `${hotel}`,
    title: 'Hotel',
    author: 'Author 1',
  },
  {
    img: `${hotel2}`,
    title: 'Room',
    author: 'Author 2',
  },
  {
    img: `${hotel3}`,
    title: 'View',
    author: 'Author 3',
  },
  {
    img: `${hotel4}`,
    title: 'Service',
    author: 'Author 3',
  },
  {
    img: `${hotel5}`,
    title: 'Turkish cuisine',
    author: 'Author 3',
  },
  {
    img: `${hotel6}`,
    title: 'Seaside',
    author: 'Author 3',
  },
  {
    img: `${hotel7}`,
    title: 'The Ritz-Carlton',
    author: 'Author 3',
  },
  {
    img: `${hotel8}`,
    title: 'Bridge',
    author: 'Author 3',
  },
  {
    img: `${hotel9}`,
    title: 'Apartment',
    author: 'Author 3',
  },
];

export default function TitlebarImageList() {
  return (
    <Box>
      <Typography variant="h6" component="div" gutterBottom>
        Our Hotels
      </Typography>
      <Grid container spacing={2}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.img}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 200,
                overflow: 'hidden',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1,
                }}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
