import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardItem,
  Footer,
  Header,
  PageLayout,
} from '../../components';
import { Box, Typography, useTheme } from '@mui/material';
import { FETCH_HOTEL_BY_ID_REQUEST } from '../../store/hotels/hotels.actions';
import { useParams } from 'react-router-dom';

export function HotelItem() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const hotel = useSelector((state) => state.hotels.hotel);
  const loading = useSelector((state) => state.hotels.loading);
  const error = useSelector((state) => state.hotels.error);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(FETCH_HOTEL_BY_ID_REQUEST({ id }));


    return () => {
      controller.abort();
    };
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hotel) {
    return <div>No hotel data available.</div>;
  }

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
            }}
          >
            Your hotel{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              {hotel?.name}
            </Box>
          </Typography>
          <CardItem hotelItem={hotel} />
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}