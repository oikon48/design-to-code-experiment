import { useState } from 'react';
import { Stack, TextField, Button, Typography } from '@mui/material';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface FormData {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  budget?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <Stack spacing={6} sx={{ flex: 1 }}>
      <Typography variant="body1" sx={{ color: 'grey.400' }}>
        There are many variations of passages of Lorem Ipsu available,but the majority have
        suffered alte.
      </Typography>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Name*"
          value={formData.name}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name}
          variant="standard"
          InputProps={{
            sx: {
              '&:after': {
                borderBottomColor: 'primary.main',
                borderBottomWidth: '1.5px',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'grey.500',
              '&.Mui-focused': {
                color: 'primary.main',
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Email*"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          variant="standard"
          InputProps={{
            sx: {
              '&:after': {
                borderBottomColor: 'grey.100',
                borderBottomWidth: '1.5px',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'grey.500',
            },
          }}
        />

        <TextField
          fullWidth
          label="Location"
          value={formData.location}
          onChange={handleChange('location')}
          variant="standard"
          InputProps={{
            sx: {
              '&:after': {
                borderBottomColor: 'grey.100',
                borderBottomWidth: '1.5px',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'grey.500',
            },
          }}
        />

        <Stack direction="row" spacing={3}>
          <TextField
            fullWidth
            label="Budget*"
            value={formData.budget}
            onChange={handleChange('budget')}
            error={!!errors.budget}
            helperText={errors.budget}
            variant="standard"
            InputProps={{
              sx: {
                '&:after': {
                  borderBottomColor: 'grey.100',
                  borderBottomWidth: '1.5px',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'grey.500',
              },
            }}
          />

          <TextField
            fullWidth
            label="Subject*"
            value={formData.subject}
            onChange={handleChange('subject')}
            error={!!errors.subject}
            helperText={errors.subject}
            variant="standard"
            InputProps={{
              sx: {
                '&:after': {
                  borderBottomColor: 'grey.100',
                  borderBottomWidth: '1.5px',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'grey.500',
              },
            }}
          />
        </Stack>

        <TextField
          fullWidth
          label="Message*"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          error={!!errors.message}
          helperText={errors.message}
          variant="standard"
          InputProps={{
            sx: {
              '&:after': {
                borderBottomColor: 'grey.100',
                borderBottomWidth: '1.5px',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'grey.500',
            },
          }}
        />

        <Button
          variant="contained"
          endIcon={<ArrowRightIcon width={20} height={20} color="#FFFFFF" />}
          onClick={handleSubmit}
          sx={{
            alignSelf: 'flex-start',
            px: 3,
            py: 1.5,
            borderRadius: '4px',
          }}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}