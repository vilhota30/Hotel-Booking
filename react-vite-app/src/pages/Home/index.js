import { Footer, Header, PageLayout } from '../../components';
import { Box, Typography, useTheme } from '@mui/material';
import Filter from '../../components/Filter/Filter';
import { Card } from '../../components/HotelList/Card';
import BackToTop from '../../components/BackToTop/BackToTop';
import { useSelector } from 'react-redux';

const hotelItem = {
      id: "ebfb5c4f2e79471dbb5cf61e",
      name: "Dicki - Predovic",
      city: "Runolfsdottirfield",
      phone_number: "1-522-883-8808",
      photo: "https://picsum.photos/seed/vaVnItR/140/140",
    };

export function HomePage() {
  const theme = useTheme();
  const hotels = useSelector((state) => state.hotels.data);
  console.log(hotels);

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Filter />
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Travel With{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Booking
            </Box>
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            architecto at, ea eius ex harum, libero minus, nam nihil nisi
            sapiente vel voluptatum. Aperiam, ducimus, nihil. Consequuntur ea
            error necessitatibus!
          </Typography>
            <Card hotel={hotelItem} />
          <BackToTop />
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}