import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailForm from '../NewsSubscribe/NewsSubscribe';

export function Footer(props) {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        backgroundColor: 'background.paper', 
        borderTop: '1px solid #e0e0e0' 
      }} 
      {...props}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Contacts
          </Typography>
          <Typography variant="body2">
            <strong>Phone:</strong> +1 234 567 890
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong> contactbooking@gmail.com
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
            <Link href="https://instagram.com" target="_blank" rel="noopener">
              <InstagramIcon />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener">
              <FacebookIcon />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
            <EmailForm />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Hotel Policies
          </Typography>
          <Typography variant="body2">
            <strong>Check-in:</strong> After 15:00
          </Typography>
          <Typography variant="body2">
            <strong>Check-out:</strong> Before 12:00
          </Typography>
          <Typography variant="body2">
            <strong>Pets:</strong> Pets not allowed
          </Typography>
          <Typography variant="body2">
            <strong>Smoking:</strong> No-smoking in the room
          </Typography>
          <Typography variant="body2">
            <strong>Child(ren):</strong> under the age of 6 are/is free of charge per room
          </Typography>
        </Grid>
      </Grid>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        align="center" 
        sx={{ marginTop: 2 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          vilhota30
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}