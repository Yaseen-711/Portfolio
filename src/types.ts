export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  repoUrl: string;
  category: 'C' | 'Hackathon' | 'ML API' | 'Systems';
  longDescription?: string;
  highlights?: string[];
  techStack?: { label: string; items: string[] }[];
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  details?: string;
  period: string;
  grade?: string;
}

export interface Certification {
  id: string;
  organization: string;
  date: string;
  title: string;
  credentialId: string;
  fullCredentialId: string;
  verifyUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  username: string;
}
