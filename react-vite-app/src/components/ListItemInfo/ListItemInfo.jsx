import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ListWithHeader = ({ items }) => {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        About Hotel
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListWithHeader;
