import { type Variants } from 'framer-motion';

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Scale up animation
 */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Stagger container for child animations
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item for use with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Hover scale effect
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

/**
 * Hover lift effect (translateY)
 */
export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

/**
 * Accordion content animation
 */
export const accordionContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

/**
 * Text reveal animation (character by character)
 */
export const textReveal: Variants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Button tap effect
 */
export const buttonTap = {
  scale: 0.98,
};

/**
 * Card hover animation with glow
 */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 0 0 rgba(0, 255, 136, 0)',
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 60px rgba(0, 255, 136, 0.15)',
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

/**
 * Page transition
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

/**
 * Navbar animation
 */
export const navbarAnimation: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      delay: 2.5,
    },
  },
};
