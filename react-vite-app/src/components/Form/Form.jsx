import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Form.module.scss';

export const Form = ({ onClose, onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phonenumber: ''
    }
  });

  const handleFormSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Box className={styles['register-form']} sx={{ position: 'relative'}}>
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        <CloseIcon sx={{color: 'black'}} />
      </IconButton>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box className={styles['form-group']}>
          <Typography variant="h6">First Name</Typography>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'First Name is required',
              minLength: { value: 5, message: 'First Name should be at least 5 characters' },
              maxLength: { value: 12, message: 'First Name should not exceed 12 characters' },
              pattern: { value: /^[a-zA-Z]+$/, message: 'First Name should only contain letters' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                fullWidth
                className={styles['form-control']}
              />
            )}
          />
        </Box>

        <Box className={styles['form-group']}>
          <Typography variant="h6">Last Name</Typography>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'Last Name is required',
              minLength: { value: 5, message: 'Last Name should be at least 5 characters' },
              maxLength: { value: 12, message: 'Last Name should not exceed 12 characters' },
              pattern: { value: /^[a-zA-Z]+$/, message: 'Last Name should only contain letters' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                fullWidth
                className={styles['form-control']}
              />
            )}
          />
        </Box>

        <Box className={styles['form-group']}>
          <Typography variant="h6">Email</Typography>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: { value: /^[a-zA-Z0-9._%+-]+@gmail.com$/, message: 'Invalid email format. Must be gmail.com' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                className={styles['form-control']}
              />
            )}
          />
        </Box>

        <Box className={styles['form-group']}>
          <Typography variant="h6">Phone number</Typography>
          <Controller
            name="phonenumber"
            control={control}
            rules={{
              required: 'Phone number is required',
              minLength: { value: 1, message: 'Phone number should be at least 1 character' },
              maxLength: { value: 10, message: 'Phone number should not exceed 10 characters' },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                type="number"
                autoComplete="on"
                error={!!errors.phonenumber}
                helperText={errors.phonenumber?.message}
                fullWidth
              />
            )}
          />
        </Box>

        <Box className={styles['form-group']}>
          <Button type="submit" variant="contained" color="primary" className={styles['btn-submit']}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
