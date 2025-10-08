import { Card, CardContent, Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '6px',
  boxShadow: '0px 32px 96px rgba(28, 25, 25, 0.16)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '5px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px 0 0 6px',
  },
}));

interface ServiceCardProps {
  title: string;
  description: string;
  highlighted?: boolean;
}

export default function ServiceCard({ title, description, highlighted = false }: ServiceCardProps) {
  return (
    <StyledCard sx={{ boxShadow: highlighted ? 6 : 3 }}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: 'grey.500',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </StyledCard>
  );
}