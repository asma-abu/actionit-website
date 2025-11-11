export interface Feature {
  id: string;
  title: string;
  description: string;
  ctaText?: string;
}

export interface TeamType {
  id: string;
  name: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Integration {
  id: string;
  name: string;
  logo?: string;
}

export interface PainPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface Step {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EnterpriseBenefit {
  id: string;
  title: string;
  description: string;
}

export interface VideoTab {
  id: string;
  label: string;
  icon: string;
  videoUrl: string;
}

