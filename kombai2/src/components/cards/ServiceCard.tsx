import { Card, CardContent, Stack, Typography, Box } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
  highlighted?: boolean;
}

export default function ServiceCard({ title, description, highlighted = false }: ServiceCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '6px',
        boxShadow: highlighted ? '0px 32px 96px rgba(28, 25, 25, 0.16)' : 'none',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {highlighted && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 5,
            backgroundColor: 'primary.main',
            borderRadius: '6px 0 0 6px',
          }}
        />
      )}

      <CardContent sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ color: 'text.primary' }}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'grey.700', fontFamily: 'Poppins, sans-serif', lineHeight: '24px' }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}