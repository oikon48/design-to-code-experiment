import { Card, CardMedia, CardContent, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from './icons/ArrowRightIcon';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: '0px 12px 64px rgba(28, 25, 25, 0.12)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 24px 116px rgba(43, 56, 76, 0.15)',
  },
}));

const CategoryTag = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '12px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

const CaseStudyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primary.main}`,
  gap: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& svg': {
      fill: theme.palette.primary.contrastText,
    },
  },
}));

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

export default function ProjectCard({ image, category, title, description }: ProjectCardProps) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="248"
        image={image}
        alt={title}
        sx={{ borderRadius: '8px 8px 0 0' }}
      />
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={2.5}>
          <Stack spacing={0.5}>
            <CategoryTag>{category}</CategoryTag>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: 'grey.400',
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
            }}
          >
            {description}
          </Typography>
          <CaseStudyButton>
            Case Study
            <ArrowRightIcon width={12} height={12} color="#A53DFF" />
          </CaseStudyButton>
        </Stack>
      </CardContent>
    </StyledCard>
  );
}