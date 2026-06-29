import type { Hobby } from '../types'

export const hobbies: Hobby[] = [
  {
    id: 'guitar',
    titleKey: 'hobbies.guitar.title',
    descriptionKey: 'hobbies.guitar.description',
    traits: ['Creativity', 'Rhythm', 'Focus'],
    icon: '🎸',
    gradient: 'from-amber-400 to-orange-500',
    accentColor: '#f59e0b',
  },
  {
    id: 'weightlifting',
    titleKey: 'hobbies.weightlifting.title',
    descriptionKey: 'hobbies.weightlifting.description',
    traits: ['Discipline', 'Progression', 'Consistency'],
    icon: '🏋️',
    gradient: 'from-slate-500 to-slate-700',
    accentColor: '#64748b',
  },
  {
    id: 'cycling',
    titleKey: 'hobbies.cycling.title',
    descriptionKey: 'hobbies.cycling.description',
    traits: ['Endurance', 'Exploration', 'Movement'],
    icon: '🚴',
    gradient: 'from-green-400 to-teal-500',
    accentColor: '#10b981',
  },
  {
    id: 'design',
    titleKey: 'hobbies.design.title',
    descriptionKey: 'hobbies.design.description',
    traits: ['Visual Thinking', 'Composition', 'Storytelling'],
    icon: '🎨',
    gradient: 'from-violet-500 to-purple-600',
    accentColor: '#8b5cf6',
  },
]
