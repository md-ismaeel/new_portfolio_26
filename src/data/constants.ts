import { Github, Linkedin, type LucideIcon, Mail, Twitter } from 'lucide-react';
import resume from "@/resume/Ismail_FullStack_Resume.pdf";

export const SITE_CONFIG = {
    name: "Md Ismail",
    title: "Md Ismail - Full Stack Developer",
    description: "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    url: "https://yourportfolio.com",
    avatar: '/assets/ismail-profile.jpg',
    ogImage: "https://yourportfolio.com/og-image.jpg",
    author: {
        name: "Md Ismail",
        email: "mdismaeelkhan345@gmail.com",
        github: "https://github.com/md-ismaeel",
        linkedin: "https://linkedin.com/in/md-ismaeel",
        twitter: "https://twitter.com/impossibel_br0",
    },
    portfolio: "/assets/Portfolio.png",
    // resumeLink: `https://drive.google.com/file/d/1SdSJ4uS7-sRHOvCo-C0qFfw0SKJGe7nw/view?usp=drive_link`
    resumeLink: resume
};

export const roles: string[] = ["Full Stack Developer", "Front End Developer", "Programmer"]

interface NavigationItem {
    name: string;
    href: string;
    external?: boolean;
}

// Updated navigation to use hash links for smooth scrolling
export const navigation: NavigationItem[] = [
    { name: "Home", href: "/home" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
]

interface socialLinksProps {
    name: string;
    href: string;
    icon: LucideIcon;
    color: string
}

export const socialLinks: socialLinksProps[] = [
    {
        name: 'GitHub',
        href: SITE_CONFIG.author.github,
        icon: Github,
        color: 'hover:text-gray-600'
    },
    {
        name: 'LinkedIn',
        href: SITE_CONFIG.author.linkedin,
        icon: Linkedin,
        color: 'hover:text-blue-600'
    },
    {
        name: 'Twitter',
        href: SITE_CONFIG.author.twitter,
        icon: Twitter,
        color: 'hover:text-blue-400'
    },
    {
        name: 'Email',
        href: `mailto:${SITE_CONFIG.author.email}`,
        icon: Mail,
        color: 'hover:text-red-500'
    }
];

interface footerLinksProps {
    title: string;
    links: { name: string; href: string }[];
}

export const footerLinks: footerLinksProps[] = [
    {
        title: 'Navigation',
        links: [
            { name: "Home", href: "/" },
            { name: "Skills", href: "/skills" },
            { name: "Projects", href: "/projects" },
            { name: "Experience", href: "/experience" },
            { name: "Contact", href: "/contact" }
        ]
    },

];