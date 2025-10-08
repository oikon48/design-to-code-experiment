import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Paper,
  Divider,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from './Navigation';
import StatsCard from './StatsCard';
import WorkProcessCard from './WorkProcessCard';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';
import ServiceCard from './ServiceCard';
import ContactInfoItem from './ContactInfoItem';
import DownloadIcon from './icons/DownloadIcon';
import ResearchIcon from './icons/ResearchIcon';
import DesignIcon from './icons/DesignIcon';
import AnalyzeIcon from './icons/AnalyzeIcon';
import LaunchIcon from './icons/LaunchIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import LocationIcon from './icons/LocationIcon';
import SubmitArrowIcon from './icons/SubmitArrowIcon';

const HeroSection = styled(Box)({
  position: 'relative',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url(/assets/images/background-gradient.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.9,
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
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
    borderColor: theme.palette.primary.main,
  },
}));

const StatsContainer = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: '6px',
  backgroundColor: 'rgba(237, 216, 255, 0.50)',
  padding: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(3),
  alignItems: 'center',
}));

const ProfileImage = styled('img')({
  width: '100%',
  maxWidth: 536,
  height: 'auto',
  borderRadius: '25px',
  boxShadow: '0px 24px 116px rgba(43, 56, 76, 0.09)',
});

const AboutSection = styled(Paper)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0px 36px 105px rgba(43, 56, 76, 0.10)',
  padding: theme.spacing(8),
  marginTop: theme.spacing(8),
}));

const CTASection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(8, 4),
  textAlign: 'center',
  borderRadius: '8px',
}));

const WhatIDoSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(10, 0),
}));

const ContactSection = styled(Paper)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 59px 124px rgba(0, 0, 0, 0.12)',
  padding: theme.spacing(8),
  marginTop: theme.spacing(10),
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(10),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    color: theme.palette.text.disabled,
  },
  '& .MuiInput-underline:before': {
    borderBottom: `1.5px solid ${theme.palette.grey[100]}`,
  },
  '& .MuiInput-underline:after': {
    borderBottom: `1.5px solid ${theme.palette.primary.main}`,
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: `1.5px solid ${theme.palette.grey[100]}`,
  },
}));

export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    budget: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = () => {
    const errors = {
      name: !formData.name,
      email: !formData.email || !validateEmail(formData.email),
      budget: !formData.budget,
      subject: !formData.subject,
      message: !formData.message,
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((error) => error)) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <Box>
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection id="home">
        <Container maxWidth="xl">
          <Stack direction="row" spacing={10} alignItems="center" justifyContent="space-between">
            <Stack spacing={4} sx={{ maxWidth: 648 }}>
              <Typography variant="h1" sx={{ color: 'text.primary' }}>
                Hello, I'm
                <br />
                Brooklyn Gilbert
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.400' }}>
                I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to
                build immersive and beautiful web applications through carefully crafted code and
                user-centric design.
              </Typography>
              <PrimaryButton sx={{ alignSelf: 'flex-start' }}>Say Hello!</PrimaryButton>
              
              <StatsContainer>
                <StatsCard value="15 Y." label="Experience" />
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'white', borderWidth: 1.5 }} />
                <StatsCard value="250+" label="Project Completed" />
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'white', borderWidth: 1.5 }} />
                <StatsCard value="58" label="Happy Client" />
              </StatsContainer>
            </Stack>
            
            <ProfileImage src="/assets/images/profile-hero.png" alt="Brooklyn Gilbert" />
          </Stack>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Container maxWidth="xl" id="about">
        <AboutSection>
          <Stack direction="row" spacing={17} alignItems="center">
            <Box
              component="img"
              src="/assets/images/about-profile-social.svg"
              alt="Profile with social media"
              sx={{ width: 424, height: 504 }}
            />
            
            <Stack spacing={4} sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ color: 'text.primary' }}>
                I am Professional User Experience Designer
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ color: 'grey.400' }}>
                  I design and develop services for customers specializing creating stylish, modern
                  websites, web services and online stores. My passion is to design digital user
                  experiences.
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey.400' }}>
                  I design and develop services for customers specializing creating stylish, modern
                  websites, web services.
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={3}>
                <PrimaryButton>My Project</PrimaryButton>
                <OutlinedButton>
                  <DownloadIcon width={20} height={20} color="#A53DFF" />
                  Download CV
                </OutlinedButton>
              </Stack>
            </Stack>
          </Stack>
        </AboutSection>
      </Container>

      {/* Work Process Section */}
      <Container maxWidth="xl" sx={{ mt: 15 }} id="process">
        <Stack direction="row" spacing={18}>
          <Stack spacing={3} sx={{ maxWidth: 529 }}>
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              Work Process
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius
                eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
                Suspendis imperdiet,
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius
                eget velit non.
              </Typography>
            </Stack>
          </Stack>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3, flex: 1 }}>
            <WorkProcessCard
              icon={<ResearchIcon width={24} height={27} color="#FFFFFF" />}
              title="1. Research"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkProcessCard
              icon={<DesignIcon width={27} height={27} color="#FFFFFF" />}
              title="2. Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkProcessCard
              icon={<AnalyzeIcon width={27} height={27} color="#FFFFFF" />}
              title="2. Analyze"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkProcessCard
              icon={<LaunchIcon width={27} height={21} color="#FFFFFF" />}
              title="4. Launch"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </Box>
        </Stack>
      </Container>

      {/* Portfolio Section */}
      <Container maxWidth="xl" sx={{ mt: 15 }} id="portfolio">
        <Stack spacing={7}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              Portfolio
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'grey.200', maxWidth: 577 }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration.
            </Typography>
          </Stack>
          
          <Stack spacing={3}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
              <ProjectCard
                image="/assets/images/portfolio-1.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
              <ProjectCard
                image="/assets/images/portfolio-2.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
              <ProjectCard
                image="/assets/images/portfolio-3.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
              <ProjectCard
                image="/assets/images/portfolio-4.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
              <ProjectCard
                image="/assets/images/portfolio-5.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
              <ProjectCard
                image="/assets/images/portfolio-6.jpg"
                category="UI-UX DESIGN"
                title="Product Admin Dashboard"
                description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              />
            </Box>
          </Stack>
          
          <PrimaryButton sx={{ alignSelf: 'center' }}>More Project</PrimaryButton>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <CTASection>
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              sx={{
                color: 'primary.contrastText',
                maxWidth: 621,
              }}
            >
              Do you have Project Idia?
              <br />
              Let's discuss your project!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'grey.200',
                maxWidth: 581,
              }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration.
            </Typography>
            <OutlinedButton
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: 0.9,
                },
              }}
            >
              Let's work Together
              <ArrowRightIcon width={12} height={12} color="#FFFFFF" />
            </OutlinedButton>
          </Stack>
        </CTASection>
      </Container>

      {/* Blog Section */}
      <Container maxWidth="xl" sx={{ mt: 15 }} id="blog">
        <Stack spacing={7}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                color: 'text.primary',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Blog
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'grey.200',
                maxWidth: 540,
                fontFamily: "'Public Sans', sans-serif",
                lineHeight: '26px',
              }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration.
            </Typography>
          </Stack>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
            <BlogCard
              image="/assets/images/blog-1.jpg"
              date="22 Oct, 2020"
              comments="246 Comments"
              title="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
            <BlogCard
              image="/assets/images/blog-2.jpg"
              date="22 Oct, 2020"
              comments="246 Comments"
              title="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
            <BlogCard
              image="/assets/images/blog-3.jpg"
              date="22 Oct, 2020"
              comments="246 Comments"
              title="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
            <BlogCard
              image="/assets/images/blog-4.jpg"
              date="22 Oct, 2020"
              comments="246 Comments"
              title="Lorem ipsum dolor sit consea. Nulla purus arcu"
            />
          </Box>
          
          <Box
            component="img"
            src="/assets/images/pagination-dots.svg"
            alt="Pagination"
            sx={{ alignSelf: 'center', width: 70, height: 8 }}
          />
        </Stack>
      </Container>

      {/* What I Do Section */}
      <WhatIDoSection id="services" sx={{ mt: 15 }}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={18}>
            <Stack spacing={6.25} sx={{ maxWidth: 529 }}>
              <Stack spacing={3}>
                <Typography variant="h2" sx={{ color: 'text.secondary' }}>
                  What I do?
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ color: 'grey.200' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
                    varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac
                    vestibulum. Suspendis imperdiet,
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.200' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
                    varius eget velit non.
                  </Typography>
                </Stack>
              </Stack>
              <PrimaryButton sx={{ alignSelf: 'flex-start' }}>Say Hello!</PrimaryButton>
            </Stack>
            
            <Stack spacing={3} sx={{ flex: 1 }}>
              <ServiceCard
                title="User Experience (UX)"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
                highlighted
              />
              <ServiceCard
                title="User Interface (UI)"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
              />
              <ServiceCard
                title="Web Development"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
              />
            </Stack>
          </Stack>
        </Container>
      </WhatIDoSection>

      {/* Happy Clients Section */}
      <Container maxWidth="xl" sx={{ mt: 15 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            Happy Clients
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'grey.200', maxWidth: 577 }}
          >
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration.
          </Typography>
          <Box
            component="img"
            src="/assets/images/client-logos.svg"
            alt="Client logos"
            sx={{ width: '100%', maxWidth: 1320, height: 200, mt: 3 }}
          />
        </Stack>
      </Container>

      {/* Testimonial Section */}
      <Container maxWidth="xl" sx={{ mt: 15 }}>
        <Stack spacing={7}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ color: 'text.secondary' }}>
              Testimonial
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'grey.200', maxWidth: 577 }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration.
            </Typography>
          </Stack>
          
          <Stack spacing={3} alignItems="center">
            <Typography
              sx={{
                color: 'grey.700',
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '24px',
                maxWidth: 872,
                textAlign: 'center',
              }}
            >
              "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec
              semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in.
              Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut
              sapien. Morbi ornare elit at libero suscipit porta."
            </Typography>
            
            <Stack spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: 'common.black' }}>
                Esther Howard
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'common.black' }}>
                Managing Director, ABC company
              </Typography>
            </Stack>
          </Stack>
          
          <Box
            component="img"
            src="/assets/images/pagination-dots.svg"
            alt="Pagination"
            sx={{ alignSelf: 'center', width: 70, height: 8 }}
          />
        </Stack>
      </Container>

      {/* Contact Section */}
      <Container maxWidth="xl" id="contact">
        <ContactSection>
          <Stack direction="row" spacing={10}>
            <Stack spacing={4.375} sx={{ flex: 1 }}>
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'text.primary',
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: '38px',
                    fontWeight: 600,
                  }}
                >
                  Let's discuss your Project
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey.200' }}>
                  There are many variations of passages of Lorem Ipsu available. but the majority
                  have suffered alte.
                </Typography>
              </Stack>
              
              <Stack spacing={3}>
                <ContactInfoItem
                  icon={<LocationIcon width={17} height={20} color="#FFFFFF" />}
                  label="Address:"
                  value="New Mexico 31134"
                />
                <ContactInfoItem
                  icon={<LocationIcon width={17} height={20} color="#FFFFFF" />}
                  label="My Email:"
                  value="mymail@mail.com"
                />
                <ContactInfoItem
                  icon={<LocationIcon width={17} height={20} color="#FFFFFF" />}
                  label="Call Me Now:"
                  value="00-1234 00000"
                />
              </Stack>
              
              <Box
                component="img"
                src="/assets/images/social-media.svg"
                alt="Social media"
                sx={{ width: 288, height: 48 }}
              />
            </Stack>
            
            <Stack spacing={6.25} sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ color: 'grey.200' }}>
                There are many variations of passages of Lorem Ipsu available,but the majority have
                suffered alte.
              </Typography>
              
              <Stack spacing={3}>
                <StyledTextField
                  fullWidth
                  variant="standard"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={formErrors.name}
                />
                <StyledTextField
                  fullWidth
                  variant="standard"
                  placeholder="Email*"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={formErrors.email}
                />
                <StyledTextField
                  fullWidth
                  variant="standard"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
                
                <Stack direction="row" spacing={3}>
                  <StyledTextField
                    fullWidth
                    variant="standard"
                    placeholder="Budget*"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    error={formErrors.budget}
                  />
                  <StyledTextField
                    fullWidth
                    variant="standard"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    error={formErrors.subject}
                  />
                </Stack>
                
                <StyledTextField
                  fullWidth
                  variant="standard"
                  placeholder="Message*"
                  multiline
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  error={formErrors.message}
                />
                
                <Button
                  onClick={handleSubmit}
                  sx={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    textTransform: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    gap: 1.5,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: 0.9,
                    },
                  }}
                >
                  Submit
                  <SubmitArrowIcon width={20} height={20} color="#FFFFFF" />
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </ContactSection>
      </Container>

      {/* Footer */}
      <Footer>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={22.75} alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'primary.contrastText',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '24px',
                    fontWeight: 500,
                  }}
                >
                  B
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: 'primary.contrastText',
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Brooklyn
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={3.5}>
              {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: 'grey.50',
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            
            <Typography
              sx={{
                color: 'primary.contrastText',
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
              }}
            >
              Copyright © 2022 Picto.
            </Typography>
          </Stack>
        </Container>
      </Footer>
    </Box>
  );
}