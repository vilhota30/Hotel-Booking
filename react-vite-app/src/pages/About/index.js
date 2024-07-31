import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { PageLayout, Header, Footer } from '../../components';
import TitlebarImageList from '../../components/ImageList/ImageList'; 
import ListWithHeader from '../../components/ListItemInfo/ListItemInfo';

const items = [
  {
    "title": "Bleu Lounge & Grill,",
    "description": "Guests of The Ritz-Carlton, Istanbul can enjoy the Bosphorus view at the Bleu Lounge & Grill, which offers a Mediterranean-inspired menu, hookah service and a wide variety of cocktails. Live DJ performances are offered five times a week. The hotel's restaurant with a special Bosphorus view serves international cuisine prepared with Turkish style and locally sourced natural ingredients. You can also order from the organic Ritz-Kids kids menu." 
  },
  {
    "title": "The Club Lounge ",
    "description": "You can enjoy The Ritz-Carlton's Atelier Lounge, famous for its afternoon teas, fresh signature desserts or evening cocktails. Bleu Lounge & Grill has a comfortable environment during the day and a lively atmosphere at night. The Club Lounge on the 12th floor, with high speed WiFi, serves premium food and beverage five times a day." 
  },
  {
    "title": "SPA/RELAX",
    "description": "At The Ritz-Carlton, Istanbul's spa center, you can enjoy an authentic Turkish bath and a wide variety of facial, body and massage treatments. There is also an indoor pool surrounded by Byzantine columns and with a ceiling painting depicting the sky of Istanbul. The sun terrace has a pool, 3 hot tubs and two outdoor spa rooms." 
  },
  {
    "title": "Airport",
    "description": "Istanbul Airport is 50 km from the property." 
  },
  {
    "title": "Location",
    "description": "The Ritz-Carlton Istanbul is just a 15-minute drive away from the old city&#39;s famous attractions such as Sultanahmet, Topkapi Palace, Blue Mosque and Grand Bazaar." 
  },

];

export function About() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h1" gutterBottom>
          The Ritz-Carlton
          </Typography>
          <Typography component="div">
          <Typography variant="h4" component="h4">
            Located in the heart of the city in Istanbul, The Ritz-Carlton has a picturesque view of the city and the Bosphorus.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            You can benefit from free high speed internet access throughout the facility.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            All of The Ritz-Carlton accommodations are elegantly decorated with luxurious furniture, and the seating area with ornate drawers and comfortable armchairs stands out. The bathroom, made entirely of marble, includes a separate rain shower, deep bath, exclusive Asprey toiletries and soft terry bathrobes and slippers. You can sip your coffee in the Nespresso machine in your room while reading your free daily newspaper accompanied by the view.
          </Typography>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TitlebarImageList />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListWithHeader items={items} />
            </Grid>
          </Grid>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}