import React from 'react';
import { createRoot } from 'react-dom/client';
import LiquidEther from './LiquidEther';
import BorderGlow from './BorderGlow';
import './BorderGlow.css';

const mountNode = document.querySelector('#liquid-ether-root');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function LiquidEtherBackground() {
  return (
    <LiquidEther
      colors={['#16d9e3', '#6d4aff', '#c58f9d']}
      mouseForce={14}
      cursorSize={86}
      isViscous={false}
      viscous={24}
      iterationsViscous={20}
      iterationsPoisson={24}
      resolution={0.42}
      isBounce={false}
      autoDemo
      autoSpeed={0.32}
      autoIntensity={1.55}
      takeoverDuration={0.35}
      autoResumeDelay={3600}
      autoRampDuration={0.9}
    />
  );
}

if (mountNode && !reduceMotion.matches) {
  const root = createRoot(mountNode);
  let hasMounted = false;

  const mountBackground = () => {
    if (hasMounted) return;
    hasMounted = true;
    root.render(<LiquidEtherBackground />);
  };

  const updateVisibility = () => {
    const hero = document.querySelector('#home');
    if (!hero) return;

    const isBelowHero = window.scrollY >= hero.offsetHeight * 0.72;
    mountNode.classList.toggle('is-visible', isBelowHero);
    if (isBelowHero) mountBackground();
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();
}

const glowTargets = [
  {
    element: document.querySelector('#terminal .grid'),
    props: {
      borderRadius: 2,
      edgeSensitivity: 32,
      glowRadius: 34,
      glowIntensity: 0.72,
      fillOpacity: 0.1,
      colors: ['#16d9e3', '#6d4aff', '#c58f9d']
    }
  },
  ...[...document.querySelectorAll('.project-card')].map((element, index) => ({
    element,
    props: {
      borderRadius: 2,
      edgeSensitivity: 38,
      glowRadius: 30,
      glowIntensity: 0.78,
      fillOpacity: 0.09,
      animated: true,
      colors:
        index < 2
          ? ['#16d9e3', '#6d4aff', '#c58f9d']
          : ['#6d4aff', '#c58f9d', '#16d9e3']
    }
  }))
];

glowTargets.forEach(({ element, props }) => {
  if (!element) return;
  element.style.position = 'relative';
  element.style.isolation = 'isolate';

  const overlay = document.createElement('div');
  overlay.className = 'border-glow-mount';
  overlay.style.position = 'absolute';
  overlay.style.inset = '0';
  overlay.style.zIndex = '3';
  overlay.style.pointerEvents = 'none';
  element.appendChild(overlay);

  createRoot(overlay).render(
    <BorderGlow
      {...props}
      passiveOverlay
      className="passive-glow-overlay"
    />
  );
});
