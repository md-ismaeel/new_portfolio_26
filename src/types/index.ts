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
    id: string
    title: string
    excerpt: string
    content: string
    image?: string
    tags: string[]
    published: boolean
    createdAt: Date
    updatedAt: Date
    readingTime: number
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