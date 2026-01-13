import type { ReactNode } from 'react';

// Button Types
export interface ButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'large';
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Card Types
export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

// Badge Types
export interface BadgeProps {
  children: ReactNode;
  pulse?: boolean;
  className?: string;
}

// Accordion Types
export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

// Section Tag Types
export interface SectionTagProps {
  children: ReactNode;
  className?: string;
}

// Code Block Types
export interface CodeBlockProps {
  code: string;
  language: 'nodejs' | 'python' | 'curl';
  className?: string;
}

// Feature Types
export interface Feature {
  id: string;
  titleKey: string;
  descKey: string;
  pattern: 'waves' | 'circles' | 'grid' | 'dots' | 'blob' | 'lines';
  size?: 'default' | 'large';
}

// Stat Types
export interface Stat {
  target: number;
  prefix?: string;
  suffix?: string;
  labelKey: string;
  decimals?: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

// Pricing Plan Types
export interface PricingPlan {
  nameKey: string;
  price?: string;
  priceKey?: string;
  descKey: string;
  features: readonly string[];
  ctaKey: string;
  featured?: boolean;
  variant: 'primary' | 'outline';
}

// FAQ Item Types
export interface FaqItem {
  questionKey: string;
  answerKey: string;
}

// Integration Types
export interface Integration {
  name: string;
  icon: string;
}

// Location Types
export interface Location {
  cityKey: string;
  addressKey: string;
}

// Nav Link Types
export interface NavLink {
  labelKey: string;
  href: string;
}

// Social Link Types
export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

// Locale Types
export type Locale = 'en' | 'ar';

// Direction Types
export type Direction = 'ltr' | 'rtl';
