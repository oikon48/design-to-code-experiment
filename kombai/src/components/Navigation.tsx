import { AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
}));

const LogoCircle = styled(Typography)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '24px',
  fontWeight: 500,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '8px 24px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.9,
  },
}));

const menuItems = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'];

export default function Navigation() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 10 } }}>
        <Logo onClick={() => scrollToSection('home')}>
          <LogoCircle>B</LogoCircle>
          <Typography
            variant="h4"
            sx={{
              color: 'text.primary',
              fontFamily: "'Work Sans', sans-serif",
            }}
          >
            Brooklyn
          </Typography>
        </Logo>
        
        <Stack direction="row" spacing={3} alignItems="center">
          {menuItems.map((item) => (
            <NavButton key={item} onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </NavButton>
          ))}
          <ContactButton onClick={() => scrollToSection('contact')}>
            Contact
          </ContactButton>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
}