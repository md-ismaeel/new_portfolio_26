export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    image: string
    images?: string[]
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    featured: boolean
    category: "web" | "full-stack" | "mobile" | "desktop" | "design"
    createdAt: Date
    updatedAt: Date
    type: string
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    featured: boolean;
}

export interface Skill {
    name: string
    level: number
    category: "frontend" | "backend" | "database" | "tool",
    icon?: string
}

export interface Experience {
    id: string
    company: string
    position: string
    duration: string
    description: string[]
    technologies: string[]
    current: boolean
    logo: string
}

export interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}