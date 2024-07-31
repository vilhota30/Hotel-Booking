import { Grid, Link, linkClasses } from '@mui/material';
import { Card } from './Card.jsx';
import { useSelector } from 'react-redux';
import { selectHotels } from '../../store';
import { useLocation } from 'react-router-dom';
import { NavLink } from '../UI/index.js';

export function List() {
  const hotels = useSelector(selectHotels);

 const location = useLocation();

  return (
    <Grid container spacing={2} justifyContent="center">
      {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel.id}>
             <NavLink state={{from: location}} key={hotel.id} to={`/hotels/${hotel.id}`}>
               <Card hotel={hotel} />
             </NavLink>
          </Grid>
      ))}
    </Grid>
  );
};
