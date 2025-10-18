import { Paper, Stack, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '../icons/DownloadIcon';

export default function AboutSection() {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: { xs: 2, md: 5 },
        my: 8,
        p: { xs: 4, md: 8 },
        borderRadius: '16px',
        boxShadow: '0px 36px 105px rgba(43, 56, 76, 0.10)',
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 17 }} alignItems="center">
        <Box
          component="img"
          src="/images/about-profile-social.svg"
          alt="About Profile"
          sx={{
            width: { xs: '100%', md: 424 },
            height: { xs: 'auto', md: 504 },
          }}
        />

        <Stack spacing={4} sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ color: 'text.primary' }}>
            I am Professional User Experience Designer
          </Typography>

          <Stack spacing={2}>
            <Typography variant="body1" sx={{ color: 'grey.600' }}>
              I design and develop services for customers specializing creating stylish, modern
              websites, web services and online stores. My passion is to design digital user
              experiences.
            </Typography>

            <Typography variant="body1" sx={{ color: 'grey.600' }}>
              I design and develop services for customers specializing creating stylish, modern
              websites, web services.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              variant="text"
              sx={{
                color: 'primary.main',
                px: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              My Project
            </Button>

            <Button
              variant="outlined"
              startIcon={<DownloadIcon width={20} height={20} color="#A53DFF" />}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 2,
                py: 1,
                borderRadius: '4px',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(165, 61, 255, 0.04)',
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}