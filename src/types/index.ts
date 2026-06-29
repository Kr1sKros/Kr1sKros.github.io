export type Language = 'en' | 'nb' | 'nn' | 'pl'
export type Theme = 'light' | 'dark'

export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  techStack: string[]
  category: string
  image?: string
  imageAlt: string
  links: {
    caseStudy?: string
    github?: string
    demo?: string
  }
}

export interface Experience {
  id: string
  roleKey: string
  company: string
  period: string
  descriptionKey: string
  type: 'work' | 'education'
  current?: boolean
  logo?: { initials: string; color: string; image?: string }
  expandable?: boolean
}

export interface BscCourse {
  code: string
  name: string
  url: string | null
  description: string
  skills: string[]
}

export interface BscSemester {
  number: number
  label: string
  period: string
  courses: BscCourse[]
}

export interface SkillGroup {
  categoryKey: string
  skills: string[]
  color: string
  dot: string
}

export interface Hobby {
  id: string
  titleKey: string
  descriptionKey: string
  traits: string[]
  icon: string
  gradient: string
  accentColor: string
}

export interface NavItem {
  labelKey: string
  href: string
}
