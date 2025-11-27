// Radial Orbital Timeline - Client-side implementation
// Interactive orbital visualization for company offerings

class OrbitalTimeline {
  constructor(containerId, data) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.data = data;
    this.expandedItems = {};
    this.rotationAngle = 0;
    this.autoRotate = true;
    this.pulseEffect = {};
    this.activeNodeId = null;
    this.animationFrame = null;
    this.nodeRefs = {};
    
    this.init();
  }

  init() {
    this.render();
    this.startAutoRotation();
    this.attachEventListeners();
  }

  startAutoRotation() {
    const rotate = () => {
      if (this.autoRotate) {
        this.rotationAngle = (this.rotationAngle + 0.3) % 360;
        this.updateNodePositions();
      }
      this.animationFrame = requestAnimationFrame(rotate);
    };
    rotate();
  }

  stopAutoRotation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  calculateNodePosition(index, total) {
    const angle = ((index / total) * 360 + this.rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  }

  toggleItem(id) {
    // Close all other items
    Object.keys(this.expandedItems).forEach(key => {
      if (parseInt(key) !== id) {
        this.expandedItems[parseInt(key)] = false;
      }
    });

    // Toggle current item
    this.expandedItems[id] = !this.expandedItems[id];

    if (this.expandedItems[id]) {
      this.activeNodeId = id;
      this.autoRotate = false;
      
      // Highlight related items
      const item = this.data.find(i => i.id === id);
      if (item && item.relatedIds) {
        item.relatedIds.forEach(relId => {
          this.pulseEffect[relId] = true;
        });
      }
    } else {
      this.activeNodeId = null;
      this.autoRotate = true;
      this.pulseEffect = {};
    }

    this.updateNodes();
  }

  updateNodePositions() {
    this.data.forEach((item, index) => {
      const node = this.nodeRefs[item.id];
      if (!node) return;

      const position = this.calculateNodePosition(index, this.data.length);
      const isExpanded = this.expandedItems[item.id];

      node.style.transform = `translate(${position.x}px, ${position.y}px)`;
      node.style.zIndex = isExpanded ? 200 : position.zIndex;
      node.style.opacity = isExpanded ? 1 : position.opacity;
    });
  }

  updateNodes() {
    this.data.forEach(item => {
      const node = this.nodeRefs[item.id];
      if (!node) return;

      const isExpanded = this.expandedItems[item.id];
      const isRelated = this.pulseEffect[item.id];
      
      const circle = node.querySelector('.orbit-node-circle');
      const card = node.querySelector('.orbit-card');
      
      // Update circle appearance
      if (isExpanded) {
        circle.className = 'orbit-node-circle expanded';
      } else if (isRelated) {
        circle.className = 'orbit-node-circle related';
      } else {
        circle.className = 'orbit-node-circle';
      }

      // Show/hide card
      if (card) {
        card.style.display = isExpanded ? 'block' : 'none';
      }
    });
  }

  attachEventListeners() {
    // Click outside to close
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container || e.target.classList.contains('orbit-container')) {
        this.expandedItems = {};
        this.activeNodeId = null;
        this.pulseEffect = {};
        this.autoRotate = true;
        this.updateNodes();
      }
    });
  }

  getStatusClass(status) {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  }

  render() {
    const orbitHTML = `
      <div class="orbit-container">
        <!-- Center Core -->
        <div class="orbit-center">
          <div class="orbit-center-pulse"></div>
          <div class="orbit-center-pulse delay"></div>
          <div class="orbit-center-core"></div>
        </div>

        <!-- Orbit Ring -->
        <div class="orbit-ring"></div>

        <!-- Nodes -->
        <div class="orbit-nodes">
          ${this.data.map((item, index) => this.renderNode(item, index)).join('')}
        </div>
      </div>
    `;

    this.container.innerHTML = orbitHTML;

    // Store node references
    this.data.forEach(item => {
      this.nodeRefs[item.id] = this.container.querySelector(`[data-node-id="${item.id}"]`);
    });

    // Attach node click handlers
    this.data.forEach(item => {
      const node = this.nodeRefs[item.id];
      if (node) {
        node.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleItem(item.id);
        });
      }
    });

    // Initial position update
    this.updateNodePositions();
  }

  renderNode(item, index) {
    return `
      <div class="orbit-node" data-node-id="${item.id}">
        <div class="orbit-node-glow" style="width: ${item.energy * 0.5 + 40}px; height: ${item.energy * 0.5 + 40}px;"></div>
        
        <div class="orbit-node-circle">
          <i class="${item.iconClass}"></i>
        </div>
        
        <div class="orbit-node-title">${item.title}</div>
        
        <div class="orbit-card">
          <div class="orbit-card-connector"></div>
          <div class="orbit-card-header">
            <span class="orbit-card-status ${this.getStatusClass(item.status)}">
              ${item.status === 'completed' ? 'COMPLETE' : item.status === 'in-progress' ? 'IN PROGRESS' : 'AVAILABLE'}
            </span>
            <span class="orbit-card-date">${item.date}</span>
          </div>
          <h3 class="orbit-card-title">${item.title}</h3>
          <p class="orbit-card-content">${item.content}</p>
          
          <div class="orbit-card-energy">
            <div class="orbit-card-energy-label">
              <i class="fas fa-bolt"></i>
              <span>Impact Level</span>
            </div>
            <span class="orbit-card-energy-value">${item.energy}%</span>
          </div>
          <div class="orbit-card-energy-bar">
            <div class="orbit-card-energy-fill" style="width: ${item.energy}%"></div>
          </div>
          
          ${item.relatedIds && item.relatedIds.length > 0 ? `
            <div class="orbit-card-related">
              <div class="orbit-card-related-header">
                <i class="fas fa-link"></i>
                <span>Related Services</span>
              </div>
              <div class="orbit-card-related-items">
                ${item.relatedIds.map(relId => {
                  const relItem = this.data.find(i => i.id === relId);
                  return relItem ? `
                    <button class="orbit-card-related-btn" onclick="orbitalTimeline.toggleItem(${relId})">
                      ${relItem.title}
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  ` : '';
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  destroy() {
    this.stopAutoRotation();
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

// Initialize when DOM is ready
let orbitalTimeline = null;

function initOrbitalTimeline() {
  const timelineData = [
    {
      id: 1,
      title: "Healthcare AI",
      date: "20 Solutions",
      content: "Oncology data modernization, triage automation, clinical trial optimization, and R&D acceleration across 20 specialized healthcare use cases.",
      category: "Healthcare",
      iconClass: "fas fa-heartbeat",
      relatedIds: [2, 3],
      status: "completed",
      energy: 95
    },
    {
      id: 2,
      title: "Insurance AI",
      date: "20 Solutions",
      content: "Risk assessment automation, claims processing, fraud detection, and underwriting intelligence across 20 insurance-specific applications.",
      category: "Insurance",
      iconClass: "fas fa-shield-alt",
      relatedIds: [1, 3, 4],
      status: "completed",
      energy: 90
    },
    {
      id: 3,
      title: "Manufacturing AI",
      date: "20 Solutions",
      content: "Digital twin technology, supply chain optimization, predictive maintenance, and quality control across 20 manufacturing scenarios.",
      category: "Manufacturing",
      iconClass: "fas fa-industry",
      relatedIds: [2, 4],
      status: "in-progress",
      energy: 85
    },
    {
      id: 4,
      title: "Telecom AI",
      date: "20 Solutions",
      content: "AIOps automation, 5G network slicing, customer experience optimization, and infrastructure management across 20 telecom use cases.",
      category: "Telecom",
      iconClass: "fas fa-signal",
      relatedIds: [3, 5],
      status: "completed",
      energy: 88
    },
    {
      id: 5,
      title: "Custom Solutions",
      date: "Unlimited",
      content: "Tailored AI solutions designed specifically for your industry challenges. We architect bespoke autonomous agents that guarantee measurable outcomes.",
      category: "Custom",
      iconClass: "fas fa-cogs",
      relatedIds: [1, 2, 3, 4],
      status: "pending",
      energy: 100
    }
  ];

  orbitalTimeline = new OrbitalTimeline('orbital-timeline-container', timelineData);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOrbitalTimeline);
} else {
  initOrbitalTimeline();
}
