import { Card, CardContent, Stack, Typography, Button, Box } from '@mui/material';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface ProjectCardProps {
  image: string;
  title: string;
}

export default function ProjectCard({ image, title }: ProjectCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'grey.100',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: 248,
          objectFit: 'cover',
        }}
      />

      <CardContent sx={{ p: 4 }}>
        <Stack spacing={2.5}>
          <Stack spacing={0.5}>
            <Typography
              variant="overline"
              sx={{ color: 'grey.400', letterSpacing: '0.5px' }}
            >
              UI-UX DESIGN
            </Typography>

            <Typography variant="h6" sx={{ color: 'text.primary', fontSize: '18px' }}>
              {title}
            </Typography>
          </Stack>

          <Typography
            variant="caption"
            sx={{ color: 'grey.600', lineHeight: '20px', fontSize: '14px' }}
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id
            imperdiet lacus.
          </Typography>

          <Button
            variant="text"
            endIcon={<ArrowRightIcon width={12} height={12} color="#A53DFF" />}
            sx={{
              color: 'primary.main',
              px: 0,
              justifyContent: 'flex-start',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            Case Study
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}