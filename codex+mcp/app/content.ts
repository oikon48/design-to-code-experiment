export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#blog', label: 'Blog' }
] as const;

export const stats = [
  { label: 'Experience', value: '15 Y.' },
  { label: 'Projects completed', value: '250+' },
  { label: 'Happy clients', value: '58' }
] as const;

export const processSteps = [
  {
    title: '1. Research',
    description:
      'Discovery sprints, interviews, and user research help us understand the problem space and opportunities.',
    accent: true
  },
  {
    title: '2. Design',
    description:
      'Wireframes, design systems, and prototypes bring your vision to life with inclusive experiences.'
  },
  {
    title: '3. Analyse',
    description: 'Decisions are validated through usability testing, analytics, and iterative feedback loops.'
  },
  {
    title: '4. Launch',
    description: 'Deployment, documentation, and optimisation keep your product performing reliably at scale.'
  }
] as const;

export const services = [
  {
    title: 'User experience (UX)',
    description: 'Experience audits, user journeys, personas, and rapid prototyping aligned with your goals.',
    active: true
  },
  {
    title: 'User interface (UI)',
    description: 'High-fidelity design with scalable systems, accessible components, and motion guidance.'
  },
  {
    title: 'Web development',
    description: 'Production-ready front-end engineering with progressive enhancement and performance best practices.'
  }
] as const;

export const projects = [
  {
    title: 'Product admin dashboard',
    category: 'UI / UX design',
    body: 'A comprehensive analytics and operations dashboard for a fast-growing SaaS platform.'
  },
  {
    title: 'Mobile banking redesign',
    category: 'Product design',
    body: 'A reimagined mobile experience that boosts conversion and user confidence for a fintech leader.'
  },
  {
    title: 'Healthcare portal',
    category: 'UX research',
    body: 'Data-informed journeys that streamline care management for clinicians and patients alike.'
  },
  {
    title: 'Premium retail e-commerce',
    category: 'Web development',
    body: 'Component-driven storefront with elevated brand storytelling and performance.'
  },
  {
    title: 'Enterprise component library',
    category: 'Design systems',
    body: 'Modular design language that empowers distributed teams with a single source of truth.'
  },
  {
    title: 'AI knowledge platform',
    category: 'Product strategy',
    body: 'Facilitated zero-to-one discovery and MVP execution for a machine learning knowledge hub.'
  }
] as const;

export const posts = [
  {
    title: 'Design critiques that build trust with stakeholders',
    meta: '22 Oct, 2023 · 246 comments'
  },
  {
    title: 'Applying Jobs to Be Done to accelerate discovery',
    meta: '10 Sep, 2023 · 108 comments'
  },
  {
    title: 'Prototype smarter: how to choose the right fidelity',
    meta: '18 Aug, 2023 · 92 comments'
  },
  {
    title: 'Design system governance for fast-moving teams',
    meta: '30 Jul, 2023 · 64 comments'
  }
] as const;

export const clients = ['Google', 'Dribbble', 'LinkedIn', 'Amazon', 'Medium', 'Spotify'] as const;

export const contactCards = [
  {
    label: 'Address',
    value: 'New Mexico 31134',
    accent: true
  },
  {
    label: 'Email',
    value: 'mymail@mail.com'
  },
  {
    label: 'Call me',
    value: '00-1234 00000'
  }
] as const;

export const aboutSocialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#', primary: true },
  { label: 'Behance', href: '#' }
] as const;

export const contactSocialLinks = [
  { label: 'Instagram', href: '#', primary: true },
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' }
] as const;

export const testimonial = {
  quote:
    '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.”',
  author: 'Esther Howard',
  role: 'Managing Director, ABC Company'
};
