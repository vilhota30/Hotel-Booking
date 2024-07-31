import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxGroup({ value, onChange }) {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onChange({ ...value, [name]: checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox name="adult" checked={value.adult} onChange={handleCheckboxChange} />}
        label="Adult"
      />
      <FormControlLabel
        control={<Checkbox name="children" checked={value.children} onChange={handleCheckboxChange} />}
        label="Children"
      />
    </FormGroup>
  );
}