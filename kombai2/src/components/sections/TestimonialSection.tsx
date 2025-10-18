import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import PaginationDots from '../common/PaginationDots';

export default function TestimonialSection() {
  const [activePage, setActivePage] = useState(0);

  return (
    <Stack spacing={6} sx={{ px: { xs: 2, md: 5 }, py: 8, alignItems: 'center' }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Testimonial
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

      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 900 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#2B384C',
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
          }}
        >
          "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec
          semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in.
          Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut
          sapien. Morbi ornare elit at libero suscipit porta."
        </Typography>

        <Stack spacing={1} alignItems="center">
          <Typography variant="subtitle1" sx={{ color: 'black' }}>
            Esther Howard
          </Typography>

          <Typography variant="subtitle2" sx={{ color: 'black' }}>
            Managing Director, ABC company
          </Typography>
        </Stack>
      </Stack>

      <PaginationDots total={3} active={activePage} onChange={setActivePage} />
    </Stack>
  );
}