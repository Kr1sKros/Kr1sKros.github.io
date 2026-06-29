import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    categoryKey: 'skills.frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS'],
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    dot: 'bg-blue-500',
  },
  {
    categoryKey: 'skills.backend',
    skills: ['ASP.NET', 'Node.js', 'Firebase', 'REST APIs'],
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
  {
    categoryKey: 'skills.design',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'UI/UX Design', 'Graphic Design', 'Typography'],
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    dot: 'bg-pink-500',
  },
  {
    categoryKey: 'skills.tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'QEMU'],
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    dot: 'bg-orange-500',
  },
  {
    categoryKey: 'skills.systems',
    skills: ['C', 'Assembly', 'Memory Paging', 'Interrupt Handling', 'Operating Systems'],
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    dot: 'bg-purple-500',
  },
]
