import { Card, CardContent, Stack, Typography, Box } from '@mui/material';

interface BlogCardProps {
  image: string;
  date: string;
  comments: number;
}

export default function BlogCard({ image, date, comments }: BlogCardProps) {
  return (
    <Card
      sx={{
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'grey.50',
        overflow: 'hidden',
        boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Blog post"
        sx={{
          width: '100%',
          height: 226,
          objectFit: 'cover',
        }}
      />

      <CardContent sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="caption" sx={{ color: 'grey.400' }}>
              {date}
            </Typography>
            <Typography variant="caption" sx={{ color: 'grey.400' }}>
              /
            </Typography>
            <Typography variant="caption" sx={{ color: 'grey.400' }}>
              {comments} Comments
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Lorem ipsum dolor sit consea. Nulla purus arcu
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}