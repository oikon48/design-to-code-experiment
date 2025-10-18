import { Card, Stack, Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';

interface ContactInfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function ContactInfoCard({ icon, label, value }: ContactInfoCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '10px',
        boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
        p: 2.5,
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '8px',
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'grey.700' }}>
            {label}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}