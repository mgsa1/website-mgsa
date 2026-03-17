export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Gas leakage sensing — 0 to mass production',
    description:
      'Full NPI lifecycle from R&D to mass production for the Asian market. UL-certified, 10M+ units/yr.',
    tags: ['NPI', 'Hardware', 'Supply Chain'],
    year: '2022–2024',
  },
  {
    title: 'HW/SW sensor-fusion platform',
    description:
      'Invented algorithm suite bridging ML, UX and R&D — shifting a sensor company from component supplier to solutions provider.',
    tags: ['AI', 'Hardware', 'Product'],
    year: '2024',
  },
  {
    title: 'Robotic manufacturing system',
    description:
      '0→1 robotic startup at Harvard: architecture, prototyping, and pilots delivered to Energy and Transport customers.',
    tags: ['Robotics', 'Research', '0→1'],
    year: '2021–2022',
  },
  {
    title: 'AI indoor navigation robot',
    description:
      'Autonomous navigation and path planning for a robot operating in crowded indoor scenes.',
    tags: ['AI', 'Robotics', 'EPFL'],
    year: '2021',
  },
  {
    title: 'G3 Greenbox',
    description:
      'Cut geotechnical data-collection costs 100× with proprietary hardware integrated into construction workflows.',
    tags: ['Hardware', 'Founder', 'Deep Tech'],
    year: '2017–2019',
  },
];
