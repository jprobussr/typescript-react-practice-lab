export type Profile = {
  id: number;
  name: string;
  role: string;
  location: string;
  isOnline: boolean;
  skills: string[];
};

export const profiles: Profile[] = [
  {
    id: 1,
    name: 'John Probus',
    role: 'Front-End Developer',
    location: 'Murray, KY',
    isOnline: true,
    skills: ['React', 'TypeScript', 'CSS'],
  },
  {
    id: 2,
    name: 'Maya Chen',
    role: 'UI Engineer',
    location: 'Remote',
    isOnline: false,
    skills: ['Vue', 'Accessibility', 'Design Systems'],
  },
  {
    id: 3,
    name: 'Carlos Rivera',
    role: 'React Developer',
    location: 'Austin, TX',
    isOnline: true,
    skills: ['React', 'APIs', 'Testing'],
  },
];
