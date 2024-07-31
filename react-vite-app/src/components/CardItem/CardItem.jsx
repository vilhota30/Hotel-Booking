import React, { useState, useRef } from 'react';
import { Box, Card as MUICard, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import { NavLink } from '../UI';
import { Form } from '../Form';
import CircularProgress from '@mui/material/CircularProgress';
import BasicModal from '../Notific/Notific';

export function CardItem({ hotelItem }) {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReserveClick = () => {
    setFormVisible(true);
  };

  const handleFormClose = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = () => {
    setFormVisible(false);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  if (!hotelItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavLink to={backLinkHref.current}>Back to hotels</NavLink>
      <BasicModal open={modalOpen} onClose={handleModalClose} />
      <MUICard sx={{ maxWidth: 345, width: 350 }}>
        {loading && (
          <Box
            sx={{
              position: 'relative',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <CardMedia
          component="img"
          alt={hotelItem.name}
          height="140"
          image={hotelItem.photo}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          sx={{ display: loading ? 'none' : 'block' }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {hotelItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {hotelItem.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {hotelItem.phone_number}
          </Typography>
        </CardContent>
        <Button
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            color: 'orange',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
          onClick={handleReserveClick}
        >
          Reserve hotel
        </Button>
      </MUICard>

      {formVisible && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Box sx={{ position: 'relative', width: 'fit-content', padding: 4, backgroundColor: 'white', borderRadius: 2 }}>
            <IconButton
              onClick={handleFormClose}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <Form onClose={handleFormClose} onSubmit={handleFormSubmit} />
          </Box>
        </Box>
      )}
    </>
  );
}