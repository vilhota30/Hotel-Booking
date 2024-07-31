import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export default function EmailForm() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = (data) => {
    console.log('Submitted Email:', data.email);
    reset();
  };

  return (
    <Box sx={{ maxWidth: 400,}}>
      <Typography variant="h6" gutterBottom>
        Subscribe to our Newsletter
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: 'Invalid email format. Must be gmail.com'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Gmail"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ marginBottom: 2 }}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
