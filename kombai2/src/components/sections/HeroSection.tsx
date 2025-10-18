import { Stack, Typography, Button, Paper, Box, Divider } from '@mui/material';

export default function HeroSection() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={8}
      sx={{ px: { xs: 2, md: 5 }, py: 8, alignItems: 'center' }}
    >
      <Stack spacing={3} sx={{ flex: 1 }}>
        <Typography variant="h1" sx={{ color: 'text.primary' }}>
          Hello, I'm
          <br />
          Brooklyn Gilbert
        </Typography>

        <Typography variant="body1" sx={{ color: 'grey.600' }}>
          I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build
          immersive and beautiful web applications through carefully crafted code and user-centric
          design.
        </Typography>

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

        <Paper
          sx={{
            mt: 4,
            p: 2,
            borderRadius: '6px',
            border: '1px solid',
            borderColor: 'white',
            backgroundColor: 'rgba(237, 216, 255, 0.50)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Stack direction="row" spacing={0} divider={<Divider orientation="vertical" flexItem sx={{ borderWidth: '3px', borderColor: 'white' }} />}>
            <Stack spacing={1} sx={{ flex: 1, alignItems: 'center' }}>
              <Typography variant="h4" sx={{ color: 'text.primary' }}>
                15 Y.
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                Experience
              </Typography>
            </Stack>

            <Stack spacing={1} sx={{ flex: 1, alignItems: 'center' }}>
              <Typography variant="h4" sx={{ color: 'text.primary' }}>
                250+
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                Project Completed
              </Typography>
            </Stack>

            <Stack spacing={1} sx={{ flex: 1, alignItems: 'center' }}>
              <Typography variant="h4" sx={{ color: 'text.primary' }}>
                58
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                Happy Client
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>

      <Box
        component="img"
        src="/images/hero-profile.png"
        alt="Brooklyn Gilbert"
        sx={{
          width: { xs: '100%', md: 536 },
          height: { xs: 'auto', md: 636 },
          borderRadius: '25px',
          boxShadow: '0px 24px 116px rgba(43, 56, 76, 0.09)',
          objectFit: 'cover',
        }}
      />
    </Stack>
  );
}