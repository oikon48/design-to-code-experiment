import { Card, CardMedia, CardContent, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[50]}`,
  boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const MetaText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '14px',
  fontWeight: 400,
}));

interface BlogCardProps {
  image: string;
  date: string;
  comments: string;
  title: string;
}

export default function BlogCard({ image, date, comments, title }: BlogCardProps) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="226"
        image={image}
        alt={title}
      />
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <MetaText>{date}</MetaText>
            <MetaText>/</MetaText>
            <MetaText>{comments}</MetaText>
          </Stack>
          <Typography
            sx={{
              color: 'text.secondary',
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '24px',
            }}
          >
            {title}
          </Typography>
        </Stack>
      </CardContent>
    </StyledCard>
  );
}