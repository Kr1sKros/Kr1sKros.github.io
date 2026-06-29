import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'publikum',
    titleKey: 'projects.publikum.title',
    descriptionKey: 'projects.publikum.description',
    techStack: ['React', 'TypeScript', 'JavaScript', 'Vite'],
    category: 'Research / Frontend',
    image: '/publikum.png',
    imageAlt: 'Publikum CSR vs SSR project screenshot',
    links: {
      caseStudy: '#',
      github: '#',
      demo: '#',
    },
  },
  {
    id: 'raydar',
    titleKey: 'projects.raydar.title',
    descriptionKey: 'projects.raydar.description',
    techStack: ['React', 'Firebase'],
    category: 'Mobile / Health',
    image: '/raydar.png',
    imageAlt: 'RayDar app screenshot',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 'gain',
    titleKey: 'projects.gain.title',
    descriptionKey: 'projects.gain.description',
    techStack: ['ASP.NET', 'Razor Pages', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web App / AI',
    image: '/gain.png',
    imageAlt: 'GAIN web app screenshot',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 'byte33',
    titleKey: 'projects.byte33.title',
    descriptionKey: 'projects.byte33.description',
    techStack: ['C', 'Assembly', 'QEMU'],
    category: 'Systems / Low-level',
    image: '/byte33.png',
    imageAlt: 'The Byte of 33 OS screenshot',
    links: {
      github: '#',
    },
  },
]
