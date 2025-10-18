import { Card, CardContent, Stack, Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';

interface ProcessCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ProcessCard({ icon, title, description }: ProcessCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        boxShadow: '32px 32px 124px rgba(43, 56, 76, 0.10)',
        p: 2,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={3}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '8px',
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>

          <Stack spacing={1.5}>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              {title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'grey.600', lineHeight: '24px' }}>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}