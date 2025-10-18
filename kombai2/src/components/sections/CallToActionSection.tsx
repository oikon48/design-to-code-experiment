import { Paper, Stack, Typography, Button } from '@mui/material';
import ArrowRightIcon from '../icons/ArrowRightIcon';

export default function CallToActionSection() {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'secondary.main',
        py: 10,
        px: { xs: 2, md: 5 },
        textAlign: 'center',
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography variant="h2" sx={{ color: 'white' }}>
          Do you have Project Idia?
          <br />
          Let's discuss your project!
        </Typography>

        <Typography variant="body1" sx={{ color: 'grey.300', maxWidth: 600 }}>
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowRightIcon width={12} height={12} color="#FFFFFF" />}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: '4px',
          }}
        >
          Let's work Together
        </Button>
      </Stack>
    </Paper>
  );
}