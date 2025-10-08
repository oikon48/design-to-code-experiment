import { Stack, Typography } from '@mui/material';

interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <Stack spacing={1} alignItems="center">
      <Typography
        variant="h4"
        sx={{
          color: 'text.primary',
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '32px',
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: 'grey.300',
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '16px',
          fontWeight: 400,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}