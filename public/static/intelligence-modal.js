// Intelligence Modal - Interactive popup for industry selection
// Shows 4 industry categories when Intelligence button is clicked

class IntelligenceModal {
  constructor() {
    this.isOpen = false;
    this.modal = null;
    this.overlay = null;
    
    this.industries = [
      {
        id: 'healthcare',
        title: 'Biologic & Health',
        subtitle: 'Oncology, Triage, R&D',
        badgeText: 'Intelligence',
        badgeColor: '#00FF94',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
      },
      {
        id: 'insurance',
        title: 'Risk & Capital',
        subtitle: 'Underwriting, Claims, Fraud',
        badgeText: 'Intelligence',
        badgeColor: '#3B82F6',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
      },
      {
        id: 'manufacturing',
        title: 'Physical Operations',
        subtitle: 'Digital Twins, Supply Chain',
        badgeText: 'Intelligence',
        badgeColor: '#F59E0B',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05))'
      },
      {
        id: 'telecom',
        title: 'Connectivity Grid',
        subtitle: 'AIOps, 5G Slicing',
        badgeText: 'Intelligence',
        badgeColor: '#8B5CF6',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))'
      }
    ];
    
    this.init();
  }

  init() {
    this.createModal();
    this.attachEventListeners();
  }

  createModal() {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'intelligence-modal-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(12px);
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;

    // Create modal container
    this.modal = document.createElement('div');
    this.modal.className = 'intelligence-modal';
    this.modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      z-index: 9999;
      max-width: 1200px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    `;

    // Modal content
    this.modal.innerHTML = `
      <div style="
        background: rgba(5, 5, 5, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 48px;
        position: relative;
      ">
        <!-- Close button -->
        <button class="intelligence-modal-close" style="
          position: absolute;
          top: 24px;
          right: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        " onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'">
          <i class="fas fa-times"></i>
        </button>

        <!-- Header -->
        <div style="text-align: center; margin-bottom: 48px;">
          <h2 style="
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 700;
            color: white;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
          ">Intelligence by Industry</h2>
          <p style="
            font-size: 18px;
            color: rgba(255, 255, 255, 0.6);
            max-width: 600px;
            margin: 0 auto;
          ">Choose your domain to explore autonomous AI solutions</p>
        </div>

        <!-- Industry Grid -->
        <div class="intelligence-modal-grid" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        ">
          ${this.industries.map((industry, index) => this.createIndustryCard(industry, index)).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    document.body.appendChild(this.modal);
  }

  createIndustryCard(industry, index) {
    return `
      <div class="intelligence-card" data-industry="${industry.id}" style="
        position: relative;
        aspect-ratio: 1;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        background: ${industry.gradient};
        animation: fadeInUp 0.4s ease-out ${index * 0.1}s backwards;
      ">
        <!-- Background Image -->
        <div style="
          position: absolute;
          inset: 0;
          background-image: url('${industry.image}');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transition: all 0.5s ease;
        " class="industry-card-bg"></div>

        <!-- Gradient Overlay -->
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(5, 5, 5, 0.3) 0%, rgba(5, 5, 5, 0.9) 100%);
        "></div>

        <!-- Content -->
        <div style="
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        ">
          <!-- Badge -->
          <div style="
            display: inline-block;
            padding: 6px 12px;
            border-radius: 50px;
            font-size: 11px;
            margin-bottom: 16px;
            width: fit-content;
            background: ${industry.badgeColor}20;
            color: ${industry.badgeColor};
            border: 1px solid ${industry.badgeColor}40;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
          ">
            <i class="fas fa-brain" style="margin-right: 6px;"></i>
            ${industry.badgeText}
          </div>

          <!-- Title -->
          <h3 style="
            font-size: 24px;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
          ">${industry.title}</h3>

          <!-- Subtitle -->
          <p style="
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.5;
          ">${industry.subtitle}</p>
        </div>

        <!-- Hover Glow -->
        <div class="industry-card-glow" style="
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: ${industry.badgeColor};
          filter: blur(100px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        "></div>
      </div>
    `;
  }

  attachEventListeners() {
    // Close button
    const closeBtn = this.modal.querySelector('.intelligence-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    // Overlay click to close
    this.overlay.addEventListener('click', () => this.close());

    // Prevent modal content clicks from closing
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Industry card clicks
    const cards = this.modal.querySelectorAll('.intelligence-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const industry = card.dataset.industry;
        this.handleIndustryClick(industry);
      });

      // Hover effects
      card.addEventListener('mouseenter', () => {
        const bg = card.querySelector('.industry-card-bg');
        const glow = card.querySelector('.industry-card-glow');
        if (bg) bg.style.opacity = '0.3';
        if (glow) glow.style.opacity = '0.3';
        card.style.transform = 'translateY(-4px)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      });

      card.addEventListener('mouseleave', () => {
        const bg = card.querySelector('.industry-card-bg');
        const glow = card.querySelector('.industry-card-glow');
        if (bg) bg.style.opacity = '0.15';
        if (glow) glow.style.opacity = '0';
        card.style.transform = 'translateY(0)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      });
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  handleIndustryClick(industry) {
    console.log('Navigate to:', industry);
    // Navigate to industry page
    window.location.href = `/${industry}`;
  }

  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
    
    // Show overlay
    this.overlay.style.pointerEvents = 'auto';
    this.overlay.style.opacity = '1';
    
    // Show modal
    this.modal.style.pointerEvents = 'auto';
    setTimeout(() => {
      this.modal.style.opacity = '1';
      this.modal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
  }

  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    document.body.style.overflow = '';
    
    // Hide modal
    this.modal.style.opacity = '0';
    this.modal.style.transform = 'translate(-50%, -50%) scale(0.9)';
    
    // Hide overlay
    this.overlay.style.opacity = '0';
    
    setTimeout(() => {
      this.overlay.style.pointerEvents = 'none';
      this.modal.style.pointerEvents = 'none';
    }, 300);
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .intelligence-modal::-webkit-scrollbar {
    width: 8px;
  }

  .intelligence-modal::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  .intelligence-modal::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  .intelligence-modal::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
document.head.appendChild(style);

// Initialize modal
let intelligenceModal = null;

function initIntelligenceModal() {
  intelligenceModal = new IntelligenceModal();
  
  // Attach to Intelligence button in nav
  const intelligenceBtn = document.getElementById('intelligence-btn');
  if (intelligenceBtn) {
    intelligenceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      intelligenceModal.toggle();
    });
  } else {
    console.warn('Intelligence button not found. Retrying...');
    // Retry after a short delay if button not found
    setTimeout(() => {
      const btn = document.getElementById('intelligence-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          intelligenceModal.toggle();
        });
      }
    }, 500);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntelligenceModal);
} else {
  initIntelligenceModal();
}

// Export for external use
window.intelligenceModal = intelligenceModal;
