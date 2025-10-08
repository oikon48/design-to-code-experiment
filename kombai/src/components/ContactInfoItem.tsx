import { Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

interface ContactInfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        p: 2,
        borderRadius: '10px',
        boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
      }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Stack spacing={0.5} justifyContent="center">
        <Typography
          sx={{
            color: 'grey.500',
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            color: 'text.primary',
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}