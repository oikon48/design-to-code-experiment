import { Paper, Stack, Typography, Box } from '@mui/material';

export default function Footer() {
  const menuItems = ['Home', 'About', 'Services', 'Process', 'Portfolio', 'Blog', 'Contact'];

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'grey.800',
        py: 4,
        px: { xs: 2, md: 5 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              B
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: 'white' }}>
            Brooklyn
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: 'grey.50',
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Typography variant="body2" sx={{ color: 'white' }}>
          Copyright © 2022 Picto.
        </Typography>
      </Stack>
    </Paper>
  );
}