import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px (ignored when the user prefers reduced motion) */
  y?: number;
}

/**
 * Scroll-into-view reveal, done in CSS + a tiny inline script (see
 * REVEAL_SCRIPT). The server HTML is visible: content is only hidden once the
 * script has marked <html class="js">, so crawlers, link previews and visitors
 * whose JS fails still see every section. It fires before React hydrates.
 */
export function Reveal({ children, className = '', delay = 0, y = 28 }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` } as CSSProperties}
      // The inline script adds `is-in` before hydration
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}

/** Runs in <head>: hides .reveal elements and fades them in as they scroll into view. */
export const REVEAL_SCRIPT = `(function(){var d=document.documentElement;if(!('IntersectionObserver' in window))return;d.classList.add('js');var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -60px 0px'});function scan(){document.querySelectorAll('.reveal:not(.is-in)').forEach(function(el){io.observe(el)})}document.addEventListener('DOMContentLoaded',function(){scan();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true})})})();`;
