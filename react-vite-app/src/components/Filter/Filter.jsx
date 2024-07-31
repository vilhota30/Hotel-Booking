import React, { useState } from 'react';
import BasicSelect from '../../components/Select/Select';
import { Button, Grid, Box } from '@mui/material';
import DatePickerStart from '../../components/DatePickers/DatePickersStart';
import DatePickerEnd from '../../components/DatePickers/DatePickersEnd';
import CheckboxGroup from '../../components/CheckBox/CheckBox';
import { useDispatch } from 'react-redux';
import { FILTER_HOTELS_ACTION } from '../../store';

export default function Filter() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checked, setChecked] = useState({ adult: false, children: false });

  const handleSubmit = () => {
    const filterParams = {
      city,
      startDate,
      endDate,
      checked,
    };

    console.log('Фільтр параметри:', filterParams);
    dispatch(FILTER_HOTELS_ACTION(filterParams));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <BasicSelect value={city} onChange={(e) => setCity(e.target.value)} />
        </Grid>
        <Grid item>
          <DatePickerStart value={startDate} onChange={(date) => setStartDate(date)} />
        </Grid>
        <Grid item>
          <DatePickerEnd value={endDate} onChange={(date) => setEndDate(date)} />
        </Grid>
        <Grid item>
          <CheckboxGroup value={checked} onChange={(newChecked) => setChecked(newChecked)} />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
