// site.ts — ResumeProTips per-site config (Phase 1.2 shared library)
export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  logo?: { src: string; alt: string };
  nav: { href: string; label: string }[];
  footerColumns: { heading: string; links: { href: string; label: string }[] }[];
  social: { label: string; href: string }[];
  newsletter: { magnetName: string; valueProp: string; downloadUrl: string };
  legalNote: string;
}

export const site: SiteConfig = {
  name: 'ResumeProTips',
  tagline: 'Resume writing, career advice, and interview tips to land your next job.',
  url: 'https://resumeprotips.com',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/all-articles', label: 'Articles' },
    { href: '/about', label: 'About' },
  ],
  footerColumns: [
    {
      heading: 'Quick Links',
      links: [
        { href: '/all-articles', label: 'All Articles' },
        { href: '/about', label: 'About' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { href: '/checklist', label: 'Checklist' },
        { href: '/products', label: 'Products' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy' },
        { href: '/disclaimer', label: 'Disclaimer' },
      ],
    },
  ],
  social: [
    { label: 'X', href: 'https://x.com/ResumeProTips' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/resumeprotips' },
  ],
  newsletter: {
    magnetName: 'ATS Resume Checklist',
    valueProp: 'Get the free ATS Resume Checklist — the exact checklist recruiters and ATS bots scan for.',
    downloadUrl: '/downloads/ats-resume-checklist.html',
  },
  legalNote: 'Not affiliated with any employer or applicant tracking system.',
};
