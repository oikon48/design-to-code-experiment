import { Paper, Stack, Typography, Box } from '@mui/material';
import ContactForm from '../forms/ContactForm';
import ContactInfoCard from '../cards/ContactInfoCard';
import LocationIcon from '../icons/LocationIcon';

export default function ContactSection() {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: { xs: 2, md: 5 },
        my: 8,
        p: { xs: 4, md: 6 },
        borderRadius: '15px',
        boxShadow: '0px 59px 124px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
        <Stack spacing={4.5} sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <Typography variant="h3" sx={{ color: 'text.primary', fontSize: '38px' }}>
              Let's discuss your Project
            </Typography>

            <Typography variant="body1" sx={{ color: 'grey.400' }}>
              There are many variations of passages of Lorem Ipsu available. but the majority have
              suffered alte.
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <ContactInfoCard
              icon={<LocationIcon width={17} height={20} color="#A53DFF" />}
              label="Address:"
              value="New Mexico 31134"
            />

            <ContactInfoCard
              icon={<LocationIcon width={17} height={20} color="#A53DFF" />}
              label="My Email:"
              value="mymail@mail.com"
            />

            <ContactInfoCard
              icon={<LocationIcon width={17} height={20} color="#A53DFF" />}
              label="Call Me Now:"
              value="00-1234 00000"
            />
          </Stack>

          <Box
            component="img"
            src="/images/social-media-icons.svg"
            alt="Social media"
            sx={{
              width: 288,
              height: 48,
            }}
          />
        </Stack>

        <ContactForm />
      </Stack>
    </Paper>
  );
}