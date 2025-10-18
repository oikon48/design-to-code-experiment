import { Stack, Typography, Box } from '@mui/material';
import ProcessCard from '../cards/ProcessCard';
import ResearchIcon from '../icons/ResearchIcon';
import DesignIcon from '../icons/DesignIcon';
import AnalyzeIcon from '../icons/AnalyzeIcon';
import LaunchIcon from '../icons/LaunchIcon';

export default function WorkProcessSection() {
  const processes = [
    {
      icon: <ResearchIcon width={24} height={27} color="#A53DFF" />,
      title: '1. Research',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.',
    },
    {
      icon: <DesignIcon width={27} height={27} color="#A53DFF" />,
      title: '2. Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.',
    },
    {
      icon: <AnalyzeIcon width={27} height={27} color="#A53DFF" />,
      title: '2. Analyze',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.',
    },
    {
      icon: <LaunchIcon width={27} height={21} color="#A53DFF" />,
      title: '4. Launch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.',
    },
  ];

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 4, md: 18 }}
      sx={{ px: { xs: 2, md: 5 }, py: 8 }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>
          Work Process
        </Typography>

        <Stack spacing={2}>
          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget
            velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis
            imperdiet,
          </Typography>

          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget
            velit non.
          </Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 3,
          flex: 1,
        }}
      >
        {processes.map((process, index) => (
          <ProcessCard
            key={index}
            icon={process.icon}
            title={process.title}
            description={process.description}
          />
        ))}
      </Box>
    </Stack>
  );
}