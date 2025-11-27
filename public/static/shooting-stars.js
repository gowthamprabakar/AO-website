// Shooting Stars Effect - Client-side implementation
// Creates animated shooting stars across the screen

class ShootingStar {
  constructor(options = {}) {
    this.minSpeed = options.minSpeed || 10;
    this.maxSpeed = options.maxSpeed || 30;
    this.minDelay = options.minDelay || 1200;
    this.maxDelay = options.maxDelay || 4200;
    this.starColor = options.starColor || '#9E00FF';
    this.trailColor = options.trailColor || '#2EB9DF';
    this.starWidth = options.starWidth || 10;
    this.starHeight = options.starHeight || 1;
    
    this.stars = [];
    this.nextStarId = 0;
  }

  getRandomStartPoint() {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * window.innerWidth;

    switch (side) {
      case 0:
        return { x: offset, y: 0, angle: 45 };
      case 1:
        return { x: window.innerWidth, y: offset, angle: 135 };
      case 2:
        return { x: offset, y: window.innerHeight, angle: 225 };
      case 3:
        return { x: 0, y: offset, angle: 315 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  }

  createStar() {
    const { x, y, angle } = this.getRandomStartPoint();
    const star = {
      id: this.nextStarId++,
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed,
      distance: 0
    };
    
    this.stars.push(star);
    
    const randomDelay = Math.random() * (this.maxDelay - this.minDelay) + this.minDelay;
    setTimeout(() => this.createStar(), randomDelay);
  }

  updateStars() {
    this.stars = this.stars.filter(star => {
      const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
      const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
      const newDistance = star.distance + star.speed;
      const newScale = 1 + newDistance / 100;

      if (
        newX < -20 ||
        newX > window.innerWidth + 20 ||
        newY < -20 ||
        newY > window.innerHeight + 20
      ) {
        return false;
      }

      star.x = newX;
      star.y = newY;
      star.distance = newDistance;
      star.scale = newScale;

      return true;
    });
  }

  render(svg, gradientId) {
    // Clear existing stars
    const existingStars = svg.querySelectorAll('.shooting-star');
    existingStars.forEach(star => star.remove());

    // Render current stars
    this.stars.forEach(star => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.classList.add('shooting-star');
      rect.setAttribute('x', star.x);
      rect.setAttribute('y', star.y);
      rect.setAttribute('width', this.starWidth * star.scale);
      rect.setAttribute('height', this.starHeight);
      rect.setAttribute('fill', `url(#${gradientId})`);
      rect.setAttribute('transform', 
        `rotate(${star.angle}, ${star.x + (this.starWidth * star.scale) / 2}, ${star.y + this.starHeight / 2})`
      );
      svg.appendChild(rect);
    });
  }
}

class ShootingStarsBackground {
  constructor(containerId, layers = []) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.layers = layers.map((config, index) => ({
      shooter: new ShootingStar(config),
      gradientId: `gradient-${index}`
    }));

    this.svg = null;
    this.animationFrame = null;
    
    this.init();
  }

  init() {
    this.createSVG();
    this.createGradients();
    this.startAnimation();
    
    // Start creating stars for each layer
    this.layers.forEach(layer => {
      layer.shooter.createStar();
    });
  }

  createSVG() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('class', 'shooting-stars-svg');
    this.svg.style.cssText = 'position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';
    
    // Create defs element
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    this.svg.appendChild(defs);
    
    this.container.appendChild(this.svg);
  }

  createGradients() {
    const defs = this.svg.querySelector('defs');
    
    this.layers.forEach((layer, index) => {
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', layer.gradientId);
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('style', `stop-color: ${layer.shooter.trailColor}; stop-opacity: 0`);

      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('style', `stop-color: ${layer.shooter.starColor}; stop-opacity: 1`);

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
    });
  }

  startAnimation() {
    const animate = () => {
      this.layers.forEach(layer => {
        layer.shooter.updateStars();
        layer.shooter.render(this.svg, layer.gradientId);
      });
      
      this.animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.svg) {
      this.svg.remove();
    }
  }
}

// Initialize shooting stars for orbital timeline
let shootingStarsInstance = null;

function initShootingStars() {
  const container = document.getElementById('orbital-timeline-container');
  if (!container) return;

  // Create starfield background
  const starfield = document.createElement('div');
  starfield.className = 'shooting-stars-starfield';
  starfield.style.cssText = `
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.4), rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, rgba(255,255,255,0.25), rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.4), rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.35), rgba(0,0,0,0)),
      radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.25), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 200px 50px, rgba(255,255,255,0.3), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 250px 100px, rgba(255,255,255,0.3), rgba(0,0,0,0)),
      radial-gradient(1px 1px at 300px 150px, rgba(255,255,255,0.2), rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 350px 350px;
    animation: twinkle 5s ease-in-out infinite;
    opacity: 0.4;
    pointer-events: none;
    z-index: 0;
  `;
  
  container.insertBefore(starfield, container.firstChild);

  // Add radial gradient overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%);
    pointer-events: none;
    z-index: 0;
  `;
  container.insertBefore(overlay, container.firstChild);

  // Initialize shooting stars with multiple layers
  shootingStarsInstance = new ShootingStarsBackground('orbital-timeline-container', [
    {
      starColor: '#9E00FF',
      trailColor: '#2EB9DF',
      minSpeed: 15,
      maxSpeed: 35,
      minDelay: 1000,
      maxDelay: 3000,
      starWidth: 10,
      starHeight: 1
    },
    {
      starColor: '#FF0099',
      trailColor: '#FFB800',
      minSpeed: 10,
      maxSpeed: 25,
      minDelay: 2000,
      maxDelay: 4000,
      starWidth: 8,
      starHeight: 1
    },
    {
      starColor: '#00FF9E',
      trailColor: '#00B8FF',
      minSpeed: 20,
      maxSpeed: 40,
      minDelay: 1500,
      maxDelay: 3500,
      starWidth: 12,
      starHeight: 1
    }
  ]);

  // Add twinkle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.4; }
      50% { opacity: 0.7; }
      100% { opacity: 0.4; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize when DOM is ready and after orbital timeline
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initShootingStars, 500);
  });
} else {
  setTimeout(initShootingStars, 500);
}
