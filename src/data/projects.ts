export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: 'esurf',
    description:
      'Interactive surfing simulator with physics-based wave generation and skill-based riding mechanics',
    tags: ['Software', 'Games'],
    year: '2026',
    url: 'https://esurf.vercel.app',
  },
  {
    title: 'RunningForm',
    description:
      'Using AI to help people stop getting injured running',
    tags: ['Software', 'AI'],
    year: '2026',
    url: 'https://runningform.vercel.app/history',
  },
  {
    title: 'Sensor stuff — Sensirion',
    description:
      'Led gas sensing product from R&D to mass production in new applications, UL-regulated and with global customers',
    tags: ['AI', 'Hardware', 'NPI', 'Product'],
    year: '2022–2024',
  },
  {
    title: 'Robotic manufacturing system — Harvard / Gencores',
    description:
      '0→1 robotic startup: architecture, prototyping, and pilots',
    tags: ['Robotics', 'Research', '0→1'],
    year: '2021–2022',
  },
  {
    title: 'AI indoor navigation — University of Toronto / Apple',
    description:
      'Autonomous navigation and path planning for robots in dynamic scenes',
    tags: ['AI', 'Robotics', 'Research'],
    year: '2020',
    url: 'https://machinelearning.apple.com/research/learning-spatiotemporal-occupancy',
  },
  {
    title: 'G3 Greenbox — Founder',
    description:
      'Founded and built a geotechnical analyser that cut field data-collection costs 100× with proprietary hardware integrated into construction workflows',
    tags: ['Hardware', 'Founder', 'Deep Tech'],
    year: '2017–2019',
  },
];
