import { Stack, Typography, Button, Box } from '@mui/material';
import ProjectCard from '../cards/ProjectCard';

export default function PortfolioSection() {
  const projects = [
    { image: '/images/portfolio-1.jpg', title: 'Product Admin Dashboard' },
    { image: '/images/portfolio-2.jpg', title: 'Product Admin Dashboard' },
    { image: '/images/portfolio-3.jpg', title: 'Product Admin Dashboard' },
    { image: '/images/portfolio-4.jpg', title: 'Product Admin Dashboard' },
    { image: '/images/portfolio-5.jpg', title: 'Product Admin Dashboard' },
    { image: '/images/portfolio-6.jpg', title: 'Product Admin Dashboard' },
  ];

  return (
    <Stack spacing={6} sx={{ px: { xs: 2, md: 5 }, py: 8 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" sx={{ color: 'text.primary', textAlign: 'center' }}>
          Portfolio
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'grey.400', textAlign: 'center', maxWidth: 600 }}
        >
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} title={project.title} />
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          alignSelf: 'center',
          px: 4,
          py: 1.5,
          borderRadius: '4px',
        }}
      >
        More Project
      </Button>
    </Stack>
  );
}