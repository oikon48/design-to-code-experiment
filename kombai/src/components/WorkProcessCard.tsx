import { Card, CardContent, Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '32px 32px 124px rgba(43, 56, 76, 0.10)',
  padding: theme.spacing(4),
  height: '100%',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '12px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

interface WorkProcessCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function WorkProcessCard({ icon, title, description }: WorkProcessCardProps) {
  return (
    <StyledCard>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Stack spacing={2}>
          <IconWrapper>{icon}</IconWrapper>
          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: 'grey.400',
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
}