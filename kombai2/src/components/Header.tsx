import { AppBar, Toolbar, Stack, Typography, Box } from '@mui/material';

export default function Header() {
  const menuItems = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services', 'Contact'];

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 }, py: 2 }}>
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
          <Typography variant="h4" sx={{ color: 'text.primary' }}>
            Brooklyn
          </Typography>
        </Stack>

        <Stack direction="row" spacing={4} alignItems="center">
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: index === menuItems.length - 1 ? 'white' : 'text.secondary',
                cursor: 'pointer',
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}