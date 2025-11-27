// Geometric Hero - Elegant floating shapes for Healthcare page
// Pure JavaScript implementation for Cloudflare Pages compatibility

class GeometricShape {
  constructor(config) {
    this.width = config.width || 400;
    this.height = config.height || 100;
    this.rotate = config.rotate || 0;
    this.gradient = config.gradient || 'rgba(0, 255, 148, 0.15)';
    this.position = config.position;
    this.delay = config.delay || 0;
    
    this.element = null;
    this.animationStarted = false;
  }
  
  createElement() {
    // Create container
    const container = document.createElement('div');
    container.className = 'geometric-shape';
    container.style.cssText = `
      position: absolute;
      ${this.position};
      opacity: 0;
      transform: translateY(-150px) rotate(${this.rotate - 15}deg);
      transition: opacity 1.2s ease-out, transform 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96);
      will-change: transform, opacity;
    `;
    
    // Create inner animated element
    const inner = document.createElement('div');
    inner.className = 'geometric-shape-inner';
    inner.style.cssText = `
      position: relative;
      width: ${this.width}px;
      height: ${this.height}px;
      animation: geometric-float 12s ease-in-out infinite;
    `;
    
    // Create the actual shape
    const shape = document.createElement('div');
    shape.className = 'geometric-shape-element';
    shape.style.cssText = `
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: linear-gradient(to right, ${this.gradient}, transparent);
      backdrop-filter: blur(2px);
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
    `;
    
    // Add radial highlight
    const highlight = document.createElement('div');
    highlight.style.cssText = `
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%);
      pointer-events: none;
    `;
    
    shape.appendChild(highlight);
    inner.appendChild(shape);
    container.appendChild(inner);
    
    this.element = container;
    return container;
  }
  
  show() {
    setTimeout(() => {
      if (this.element) {
        this.element.style.opacity = '1';
        this.element.style.transform = `translateY(0) rotate(${this.rotate}deg)`;
        this.animationStarted = true;
      }
    }, this.delay);
  }
}

class GeometricHero {
  constructor() {
    this.shapes = [];
    this.container = null;
    this.init();
  }
  
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.create());
    } else {
      this.create();
    }
  }
  
  create() {
    const heroContainer = document.getElementById('geometric-hero-container');
    if (!heroContainer) return;
    
    // Create shapes container
    this.container = document.createElement('div');
    this.container.className = 'geometric-shapes-wrapper';
    this.container.style.cssText = `
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    `;
    
    // Define shapes configuration
    const shapesConfig = [
      {
        width: 600,
        height: 140,
        rotate: 12,
        gradient: 'rgba(0, 255, 148, 0.15)',
        position: 'left: -10%; top: 20%;',
        delay: 300
      },
      {
        width: 500,
        height: 120,
        rotate: -15,
        gradient: 'rgba(59, 130, 246, 0.15)',
        position: 'right: 0%; top: 75%;',
        delay: 500
      },
      {
        width: 300,
        height: 80,
        rotate: -8,
        gradient: 'rgba(139, 92, 246, 0.15)',
        position: 'left: 10%; bottom: 10%;',
        delay: 400
      },
      {
        width: 200,
        height: 60,
        rotate: 20,
        gradient: 'rgba(245, 158, 11, 0.15)',
        position: 'right: 20%; top: 15%;',
        delay: 600
      },
      {
        width: 150,
        height: 40,
        rotate: -25,
        gradient: 'rgba(6, 182, 212, 0.15)',
        position: 'left: 25%; top: 10%;',
        delay: 700
      }
    ];
    
    // Create all shapes
    shapesConfig.forEach(config => {
      const shape = new GeometricShape(config);
      const element = shape.createElement();
      this.container.appendChild(element);
      this.shapes.push(shape);
    });
    
    // Add to hero
    heroContainer.appendChild(this.container);
    
    // Start animations
    this.startAnimations();
  }
  
  startAnimations() {
    // Trigger show animations
    this.shapes.forEach(shape => shape.show());
  }
  
  destroy() {
    if (this.container) {
      this.container.remove();
    }
    this.shapes = [];
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes geometric-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
  }
  
  @keyframes geometric-fade-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .geometric-content-item {
    opacity: 0;
    animation: geometric-fade-up 1s cubic-bezier(0.25, 0.4, 0.25, 1) forwards;
  }
  
  .geometric-content-item-0 {
    animation-delay: 0.5s;
  }
  
  .geometric-content-item-1 {
    animation-delay: 0.7s;
  }
  
  .geometric-content-item-2 {
    animation-delay: 0.9s;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .geometric-shape {
      transform: scale(0.6) !important;
    }
  }
`;
document.head.appendChild(style);

// Initialize
let geometricHero = null;

function initGeometricHero() {
  geometricHero = new GeometricHero();
}

// Auto-initialize if on healthcare page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGeometricHero);
} else {
  initGeometricHero();
}

// Export for external use
window.geometricHero = geometricHero;
