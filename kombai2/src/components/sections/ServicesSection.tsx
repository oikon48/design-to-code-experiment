import { Paper, Stack, Typography, Button, Box } from '@mui/material';
import ServiceCard from '../cards/ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'User Experience (UX)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
      highlighted: true,
    },
    {
      title: 'User Interface (UI)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
      highlighted: false,
    },
    {
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
      highlighted: false,
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'grey.50',
        py: 8,
        px: { xs: 2, md: 5 },
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 18 }}>
        <Stack spacing={4} sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <Typography variant="h2" sx={{ color: 'text.secondary' }}>
              What I do?
            </Typography>

            <Stack spacing={2}>
              <Typography variant="body1" sx={{ color: 'grey.400' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius
                eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
                Suspendis imperdiet,
              </Typography>

              <Typography variant="body1" sx={{ color: 'grey.500' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius
                eget velit non.
              </Typography>
            </Stack>
          </Stack>

          <Button
            variant="contained"
            sx={{
              alignSelf: 'flex-start',
              px: 3,
              py: 1.5,
              borderRadius: '4px',
            }}
          >
            Say Hello!
          </Button>
        </Stack>

        <Box sx={{ flex: 1 }}>
          <Stack spacing={3}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                highlighted={service.highlighted}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}