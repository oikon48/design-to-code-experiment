import { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import BlogCard from '../cards/BlogCard';
import PaginationDots from '../common/PaginationDots';

export default function BlogSection() {
  const [activePage, setActivePage] = useState(0);

  const blogs = [
    { image: '/images/blog-1.jpg', date: '22 Oct, 2020', comments: 246 },
    { image: '/images/blog-2.jpg', date: '22 Oct, 2020', comments: 246 },
    { image: '/images/blog-3.jpg', date: '22 Oct, 2020', comments: 246 },
    { image: '/images/blog-4.jpg', date: '22 Oct, 2020', comments: 246 },
  ];

  return (
    <Stack spacing={6} sx={{ px: { xs: 2, md: 5 }, py: 8 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" sx={{ color: 'text.secondary', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
          Blog
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'grey.400', textAlign: 'center', maxWidth: 600, fontFamily: "'Public Sans', sans-serif", lineHeight: '26px' }}
        >
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {blogs.map((blog, index) => (
          <BlogCard key={index} image={blog.image} date={blog.date} comments={blog.comments} />
        ))}
      </Box>

      <PaginationDots total={3} active={activePage} onChange={setActivePage} />
    </Stack>
  );
}