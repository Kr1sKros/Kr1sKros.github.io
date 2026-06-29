import type { BscSemester } from '../types'

export const indokSemesters: BscSemester[] = [
  {
    number: 1,
    label: 'Semester 1',
    period: 'Fall 2026',
    courses: [
      {
        code: 'IND416',
        name: 'Project Management & Procurement',
        url: 'https://www.uia.no/english/studies/courses/2026/autumn/ind416.html',
        description: 'Covers project management phases (initiation, planning, execution, closure) alongside procurement analysis in international value chains, combining theoretical frameworks with real-world cases and simulation exercises.',
        skills: ['Project Management', 'Procurement Planning', 'Stakeholder Analysis', 'Agile & Waterfall', 'Portfolio Management'],
      },
      {
        code: 'IND417',
        name: 'Bedriftsøkonomisk analyse 1',
        url: 'https://www.uia.no/studier/emner/2026/host/ind417.html',
        description: 'Introduces business economics fundamentals including market theory, cost analysis (Activity Based Costing), financial reporting, investment calculations, and risk assessment to support organisational decision-making.',
        skills: ['Cost Analysis', 'Financial Decision-Making', 'Investment Valuation', 'Budgeting', 'Risk Management'],
      },
      {
        code: 'IND418',
        name: 'Kontinuerlig forbedring og Lean',
        url: 'https://www.uia.no/studier/emner/2026/host/ind418.html',
        description: 'Provides practical instruction in Lean and continuous improvement methodologies within modern contexts that include AI, digitalization, and automation, emphasising the interplay between people, technology, and organisations.',
        skills: ['Lean', 'Process Optimisation', 'Continuous Improvement', 'Change Management', 'Data-Driven Analysis'],
      },
      {
        code: 'ING400',
        name: 'Forhandling og avtaleprosesser i ingeniørprosjekter',
        url: 'https://www.uia.no/studier/emner/2026/host/ing400.html',
        description: 'Covers negotiation mechanisms, regulatory frameworks, and contract management in engineering projects, applying behavioural and communication insights to agreement processes.',
        skills: ['Contract Negotiation', 'Regulatory Compliance', 'Stakeholder Communication', 'Engineering Procurement'],
      },
      {
        code: 'IKT466',
        name: 'Introduction to Machine Learning',
        url: 'https://www.uia.no/english/studies/courses/2026/autumn/ikt466.html',
        description: 'Provides a deep understanding of machine learning and deep learning principles — both theoretical foundations and practical applications — with hands-on implementation of classical and neural-network models in Python.',
        skills: ['Machine Learning', 'Deep Learning', 'Python', 'Neural Networks', 'Data Analysis'],
      },
    ],
  },
  {
    number: 2,
    label: 'Semester 2',
    period: 'Spring 2027',
    courses: [
      {
        code: 'IND415',
        name: 'Ledelse og organisasjonsteori',
        url: 'https://www.uia.no/studier/emner/2027/var/ind415.html',
        description: 'Provides foundational knowledge in organisational and leadership theories, equipping students with a practical toolkit of concepts and models relevant to exercising leadership at various organisational levels.',
        skills: ['Leadership Theory', 'Organisational Analysis', 'Strategic Management', 'Sustainability', 'Reflective Practice'],
      },
      {
        code: 'IND419',
        name: 'Prosjekterings- og engineeringsledelse',
        url: 'https://www.uia.no/studier/emner/2027/var/ind419.html',
        description: 'Covers advanced development processes — design, engineering, and product development — with emphasis on managing engineering projects using Lean, Agile, and process-innovation techniques.',
        skills: ['Engineering Design Management', 'Lean Design', 'Agile', 'Process Innovation', 'Risk Management'],
      },
      {
        code: 'IND421',
        name: 'Corporate Economic Analysis II',
        url: 'https://www.uia.no/english/studies/courses/2027/spring/ind421.html',
        description: 'Explores management control systems including cost management, performance measurement, and the Balanced Scorecard, while examining digitalization, sustainability, and ethics in management accounting.',
        skills: ['Management Accounting', 'Cost Management', 'Balanced Scorecard', 'Performance Management', 'Sustainability Reporting'],
      },
      {
        code: 'IKT469',
        name: 'Deep Neural Networks',
        url: 'https://www.uia.no/english/studies/courses/2027/spring/ikt469.html',
        description: 'Covers advanced deep learning architectures including transformer models, multimodal representation learning, generative models, and explainability methods, with a focus on contemporary optimisation strategies.',
        skills: ['Deep Learning', 'Transformers', 'Generative AI', 'Multimodal Learning', 'Model Explainability'],
      },
    ],
  },
  {
    number: 3,
    label: 'Semester 3',
    period: 'Fall 2027',
    courses: [
      {
        code: 'ME-425',
        name: 'Metode',
        url: 'https://www.uia.no/studier/emner/2026/host/me-425.html',
        description: 'Develops students\' ability to critically evaluate research methods and conduct empirical studies, covering research design, methodology selection, data generation and interpretation, research ethics, and academic writing.',
        skills: ['Research Methodology', 'Research Design', 'Qualitative & Quantitative Analysis', 'Academic Writing', 'Research Ethics'],
      },
      {
        code: 'IKT433',
        name: 'Distributed and Big Data Systems',
        url: 'https://www.uia.no/english/studies/courses/2027/spring/ikt433.html',
        description: 'Examines the main classes of distributed computing approaches alongside cloud computing infrastructure and big data analysis techniques, teaching students to apply distributed principles to solve problems at scale.',
        skills: ['Distributed Computing', 'Big Data', 'Cloud Computing', 'System Architecture', 'Data Partitioning'],
      },
    ],
  },
  {
    number: 4,
    label: 'Semester 4',
    period: 'Spring 2028',
    courses: [
      {
        code: 'IND590',
        name: 'Master\'s Thesis',
        url: 'https://www.uia.no/studier/emner/2027/var/ind590.html',
        description: 'An independent supervised research project in which students develop a research question, theoretical framework, and methodology, culminating in a written thesis and oral examination.',
        skills: ['Research Design', 'Scientific Writing', 'Independent Project Management', 'Critical Analysis', 'Academic Communication'],
      },
    ],
  },
]
