import { Stack, Typography, Box } from '@mui/material';

export default function ClientsSection() {
  return (
    <Stack spacing={3} sx={{ px: { xs: 2, md: 5 }, py: 8, alignItems: 'center' }}>
      <Typography variant="h2" sx={{ color: 'text.primary', textAlign: 'center' }}>
        Happy Clients
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: 'grey.400', textAlign: 'center', maxWidth: 600 }}
      >
        There are many variations of passages of Lorem Ipsum available,
        <br />
        but the majority have suffered alteration.
      </Typography>

      <Box
        component="img"
        src="/images/client-logos.svg"
        alt="Client logos"
        sx={{
          width: '100%',
          maxWidth: 1320,
          height: 'auto',
          mt: 3,
        }}
      />
    </Stack>
  );
}