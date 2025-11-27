import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

// Layout component
const Layout: FC = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Assured Outcomes - We Architect Assured Outcomes</title>
        <meta name="description" content="Deploy 80+ autonomous AI agents across Healthcare, Insurance, Manufacturing, and Telecom. We replace uncertainty with guaranteed performance." />
        <link rel="stylesheet" href="/static/globals.css" />
        <link rel="stylesheet" href="/static/orbital-timeline.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="/static/shader-hero.js" defer></script>
        <script src="/static/orbital-timeline.js" defer></script>
        <script src="/static/shooting-stars.js" defer></script>
        <script src="/static/intelligence-modal.js" defer></script>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .gradient-text {
            background: linear-gradient(90deg, #00FF94, #3B82F6, #F59E0B, #8B5CF6);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient 8s ease infinite;
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          .animation-delay-800 {
            animation-delay: 0.8s;
          }
        `}</style>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}

// Floating Navigation
const FloatingNav: FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '100px',
      padding: '8px 16px',
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s'
      }}>
        <i class="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
        Assured Outcomes
      </button>
      <button id="intelligence-btn" style={{
        padding: '8px 16px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s',
        cursor: 'pointer'
      }}>
        <i class="fas fa-brain" style={{ marginRight: '8px' }}></i>
        Intelligence
      </button>
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s'
      }}>
        <i class="fas fa-gamepad" style={{ marginRight: '8px' }}></i>
        Playground
      </button>
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s'
      }}>
        <i class="fas fa-file-alt" style={{ marginRight: '8px' }}></i>
        Manifesto
      </button>
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s'
      }}>
        <i class="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
        Trust
      </button>
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        background: 'white',
        color: '#050505',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.3s'
      }}>
        <i class="fas fa-rocket" style={{ marginRight: '8px' }}></i>
        Deploy
      </button>
    </nav>
  )
}

// Hero Section with Shader Background
const Hero: FC = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 32px 80px',
      position: 'relative',
      overflow: 'hidden',
      background: '#000000'
    }}>
      {/* WebGL Shader Canvas Background */}
      <canvas 
        id="shader-hero-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          touchAction: 'none',
          zIndex: 0
        }}
      ></canvas>
      
      {/* Content Container with higher z-index */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

      {/* Trust Badge */}
      <div class="animate-fade-in-down" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        padding: '8px 20px',
        marginBottom: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#00FF94',
        backdropFilter: 'blur(12px)'
      }}>
        <i class="fas fa-shield-alt"></i>
        <span>SOC2 Type II Certified</span>
      </div>

      {/* Main Headline */}
      <h1 style={{
        fontSize: 'clamp(48px, 12vw, 140px)',
        fontWeight: '700',
        lineHeight: '1',
        textAlign: 'center',
        marginBottom: '24px',
        letterSpacing: '-0.02em'
      }}>
        <div class="animate-fade-in-up animation-delay-200">We Architect</div>
        <div class="gradient-text animate-fade-in-up animation-delay-400">Assured Outcomes</div>
      </h1>

      {/* Subtitle */}
      <p class="animate-fade-in-up animation-delay-600" style={{
        fontSize: 'clamp(16px, 2vw, 20px)',
        lineHeight: '1.6',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        maxWidth: '800px',
        marginBottom: '48px'
      }}>
        Deploy 80+ autonomous AI agents across Healthcare, Insurance, Manufacturing, and Telecom. We replace uncertainty with guaranteed performance.
      </p>

      {/* CTA Buttons */}
      <div class="animate-fade-in-up animation-delay-800" style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={{
          background: 'white',
          color: '#050505',
          padding: '16px 32px',
          borderRadius: '50px',
          fontSize: '16px',
          fontWeight: '600',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s',
          border: 'none',
          cursor: 'pointer'
        }}>
          Deploy Intelligence
          <i class="fas fa-arrow-right"></i>
        </button>
        <button style={{
          background: 'rgba(255, 255, 255, 0.05)',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '50px',
          fontSize: '16px',
          fontWeight: '600',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}>
          <i class="fas fa-play"></i>
          Enter Playground
        </button>
      </div>

      {/* Stats Panel */}
      <div style={{
        marginTop: '80px',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '32px',
        maxWidth: '800px',
        width: '100%'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '36px',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #00FF94, #00D47F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>80+</div>
          <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>Specialized AI Agents</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '36px',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #3B82F6, #2563EB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>4</div>
          <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>Industries</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '36px',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #F59E0B, #D97706)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Zero</div>
          <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>Touch</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '36px',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #8B5CF6, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>50%</div>
          <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>Faster</div>
        </div>
      </div>
      </div> {/* Close content container */}
    </section>
  )
}

// Industries Section
const IndustriesSection: FC = () => {
  const industries = [
    {
      title: 'Healthcare',
      subtitle: 'Biologic Intelligence',
      color: '#00FF94',
      icon: 'fa-dna',
      description: 'Oncology, Triage, R&D',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      link: '/healthcare'
    },
    {
      title: 'Insurance',
      subtitle: 'Risk & Capital',
      color: '#3B82F6',
      icon: 'fa-shield-alt',
      description: 'Underwriting, Claims, Fraud',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      link: '/insurance'
    },
    {
      title: 'Manufacturing',
      subtitle: 'Physical Ops',
      color: '#F59E0B',
      icon: 'fa-industry',
      description: 'Digital Twins, Supply Chain',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      link: '/manufacturing'
    },
    {
      title: 'Telecom',
      subtitle: 'Connectivity',
      color: '#8B5CF6',
      icon: 'fa-signal',
      description: 'AIOps, 5G Slicing',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
      link: '/telecom'
    }
  ]

  return (
    <section style={{
      padding: '100px 32px',
      background: '#050505'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '700',
            marginBottom: '16px'
          }}>Intelligence by Industry</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>Choose your domain to explore autonomous AI solutions</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {industries.map((industry) => (
            <a href={industry.link} style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: `linear-gradient(135deg, ${industry.color}10 0%, transparent 100%)`,
              textDecoration: 'none',
              color: 'white',
              display: 'block'
            }} class="industry-card">
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                inset: '0',
                backgroundImage: `url(${industry.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.2',
                transition: 'all 0.5s'
              }}></div>

              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(to top, #050505 0%, rgba(5, 5, 5, 0.8) 50%, transparent 100%)'
              }}></div>

              {/* Content */}
              <div style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '32px'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  marginBottom: '16px',
                  width: 'fit-content',
                  background: `${industry.color}20`,
                  color: industry.color,
                  border: `1px solid ${industry.color}40`
                }}>
                  <i class={`fas ${industry.icon}`} style={{ marginRight: '8px' }}></i>
                  {industry.subtitle}
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>{industry.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>{industry.description}</p>
              </div>

              {/* Hover Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: industry.color,
                filter: 'blur(100px)',
                opacity: '0',
                transition: 'opacity 0.5s',
                pointerEvents: 'none'
              }} class="industry-glow"></div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Add hover styles */}
      <style>{`
        .industry-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .industry-card:hover .industry-glow {
          opacity: 0.2;
        }
        .industry-card:hover > div:first-child {
          opacity: 0.4;
        }
      `}</style>
    </section>
  )
}

// Footer Component
const Footer: FC = () => {
  return (
    <footer style={{
      padding: '64px 32px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '40px',
        padding: '64px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'radial-gradient(circle at 20% -20%, rgba(255, 255, 255, 0.06), transparent 60%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative' }}>
          <h2 style={{
            fontSize: 'clamp(40px, 8vw, 120px)',
            lineHeight: '0.9',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            marginBottom: '64px'
          }}>
            <div>Ready to architect</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>assured outcomes?</div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Email */}
            <div>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>Get Started</p>
              <a href="mailto:hello@assuredoutcomes.ai" style={{
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'color 0.3s'
              }}>
                <i class="fas fa-envelope"></i>
                hello@assuredoutcomes.ai
              </a>
            </div>

            {/* Schedule */}
            <div>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>Schedule a Briefing</p>
              <button style={{
                background: 'white',
                color: '#050505',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer'
              }}>
                <i class="fas fa-calendar"></i>
                Book a Meeting
              </button>
            </div>

            {/* Social */}
            <div>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>Connect With Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  color: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  color: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  color: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
            marginTop: '32px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              marginBottom: '32px'
            }}>
              {/* Navigation */}
              <div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>Explore Intelligence</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '14px' }}>
                  <a href="/healthcare">Healthcare</a>
                  <a href="/insurance">Insurance</a>
                  <a href="/manufacturing">Manufacturing</a>
                  <a href="/telecom">Telecom</a>
                  <a href="/playground">Playground</a>
                  <a href="/manifesto">Manifesto</a>
                  <a href="/trust">Trust Center</a>
                  <a href="/deploy">Deploy</a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>Compliance & Legal</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">SOC 2 Type II Report</a>
                  <a href="#">HIPAA Compliance</a>
                </div>
              </div>
            </div>

            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              © 2025 Assured Outcomes — Architecting Intelligence for the Real Economy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Crafting Digital Experiences Section
const CraftingExperiencesSection: FC = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '96px 32px',
      backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp?w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)',
      maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '80px auto 160px',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'start'
        }}
        class="lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div style={{
            gridColumn: 'span 7 / span 7',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Trust Badge */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px'
              }}>
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  AWARD-WINNING DESIGN
                  <i class="fas fa-award" style={{ color: '#00FF94' }}></i>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(36px, 8vw, 96px)',
              lineHeight: '0.9',
              fontWeight: '500',
              letterSpacing: '-0.02em',
              WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)',
              maskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)'
            }}>
              Crafting Digital<br />
              <span class="gradient-text">Experiences</span><br />
              That Matter
            </h2>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px'
            }}>
              We design interfaces that combine beauty with functionality, creating valuable experiences that users love and businesses thrive on.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                background: 'white',
                color: '#050505',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '5.7px 5.7px 8.6px rgba(0, 0, 0, 0.07), 13.7px 13.7px 10.9px rgba(0, 0, 0, 0.099), 25.7px 25.7px 20.5px rgba(0, 0, 0, 0.123), 45.8px 45.8px 36.6px rgba(0, 0, 0, 0.147), 85.8px 85.8px 68.5px rgba(0, 0, 0, 0.176), 205px 205px 163.4px rgba(0, 0, 0, 0.246)'
              }}>
                View Portfolio
                <i class="fas fa-arrow-right"></i>
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <i class="fas fa-video"></i>
                Watch Showreel
              </button>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div style={{
            gridColumn: 'span 5 / span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Stats Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(15, 15, 35, 0.5) 50%, rgba(15, 15, 35, 0.9) 100%)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              boxShadow: '0px 0px 30px rgba(0,255,148,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: 'rgba(0, 255, 148, 0.1)',
                  border: '1px solid rgba(0, 255, 148, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i class="fas fa-rocket" style={{ color: '#00FF94', fontSize: '20px' }}></i>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '500', color: 'white' }}>150+</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Projects Delivered</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Client Satisfaction</span>
                  <span style={{ fontSize: '14px', color: '#00FF94' }}>100%</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, #00FF94, #00D47F)', borderRadius: '9999px' }}></div>
                </div>
              </div>

              <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)', margin: '16px 0' }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ textAlign: 'center', flex: 1, padding: '8px', borderRadius: '16px', transition: 'all 0.3s', cursor: 'pointer' }}
                  onmouseover="this.style.background='rgba(255,255,255,0.05)'"
                  onmouseout="this.style.background='transparent'">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>5+</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years</div>
                </div>
                <div style={{ width: '1px', background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent)' }}></div>
                <div style={{ textAlign: 'center', flex: 1, padding: '8px', borderRadius: '16px', transition: 'all 0.3s', cursor: 'pointer' }}
                  onmouseover="this.style.background='rgba(255,255,255,0.05)'"
                  onmouseout="this.style.background='transparent'">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>24/7</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</div>
                </div>
                <div style={{ width: '1px', background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent)' }}></div>
                <div style={{ textAlign: 'center', flex: 1, padding: '8px', borderRadius: '16px', transition: 'all 0.3s', cursor: 'pointer' }}
                  onmouseover="this.style.background='rgba(255,255,255,0.05)'"
                  onmouseout="this.style.background='transparent'">
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>100%</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quality</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 255, 148, 0.1)',
                  border: '1px solid rgba(0, 255, 148, 0.2)',
                  color: '#00FF94'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00FF94', animation: 'pulse 2s ease-in-out infinite' }}></div>
                  HIPAA COMPLIANT
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  color: '#93C5FD'
                }}>
                  SOC 2 TYPE II
                </span>
              </div>
            </div>

            {/* Partners/Powered By Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(15, 15, 35, 0.5) 50%, rgba(15, 15, 35, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.049)'
            }}>
              <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'rgba(255, 255, 255, 0.8)' }}>Powered By</h3>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}>
                <style>{`
                  @keyframes marquee-logos {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
                <div style={{ display: 'flex', gap: '24px', animation: 'marquee-logos 30s linear infinite' }}>
                  <div style={{ display: 'flex', gap: '48px', flexShrink: 0, alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>VERTEX AI</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>PYTORCH</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>SNOWFLAKE</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>TENSORFLOW</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>NVIDIA</span>
                  </div>
                  <div style={{ display: 'flex', gap: '48px', flexShrink: 0, alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>VERTEX AI</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>PYTORCH</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>SNOWFLAKE</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>TENSORFLOW</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.15em' }}>NVIDIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Orbital Timeline Section - Our Offerings
const OrbitalTimelineSection: FC = () => {
  return (
    <section style={{
      padding: '100px 32px',
      background: '#000000',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'center'
        }}
        class="lg:grid-cols-2">
          
          {/* Left Column - Orbital Visualization */}
          <div style={{
            position: 'relative',
            minHeight: '600px'
          }}>
            <div id="orbital-timeline-container" style={{
              width: '100%',
              height: '600px',
              position: 'relative'
            }}></div>
          </div>

          {/* Right Column - Description */}
          <div style={{
            color: 'white',
            padding: '32px'
          }}>
            <div style={{
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(0, 255, 148, 0.1)',
                border: '1px solid rgba(0, 255, 148, 0.2)',
                borderRadius: '50px',
                fontSize: '12px',
                color: '#00FF94',
                marginBottom: '24px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                <i class="fas fa-atom"></i>
                <span>Our Offering Universe</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                80+ AI Solutions<br />
                <span style={{
                  background: 'linear-gradient(90deg, #00FF94, #3B82F6, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Orbiting Your Success</span>
              </h2>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '32px'
              }}>
                Our autonomous AI agents orbit around your business needs, each one a specialized solution designed to deliver guaranteed outcomes. Click any node to explore specific capabilities and see how they interconnect to form a comprehensive intelligence ecosystem.
              </p>
            </div>

            {/* Feature List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(0, 255, 148, 0.1)',
                  border: '1px solid rgba(0, 255, 148, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i class="fas fa-network-wired" style={{ color: '#00FF94', fontSize: '20px' }}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Interconnected Intelligence</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
                    Each solution is designed to work in harmony with others, creating a synergistic effect that amplifies results across your organization.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i class="fas fa-rocket" style={{ color: '#3B82F6', fontSize: '20px' }}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Autonomous Operation</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
                    Our AI agents operate independently, making intelligent decisions 24/7 without human intervention, ensuring consistent and reliable outcomes.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i class="fas fa-chart-line" style={{ color: '#8B5CF6', fontSize: '20px' }}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Guaranteed Outcomes</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
                    We don't just promise results—we architect them. Each solution comes with measurable KPIs and guaranteed performance benchmarks.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Ready to explore?
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s'
                }}>
                  View All Solutions
                  <i class="fas fa-arrow-right"></i>
                </button>
                <button style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s'
                }}>
                  <i class="fas fa-phone"></i>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Home Page
const Home: FC = () => {
  return (
    <Layout>
      <FloatingNav />
      <Hero />
      <IndustriesSection />
      <CraftingExperiencesSection />
      <OrbitalTimelineSection />
      <Footer />
    </Layout>
  )
}

// Healthcare Page Components
const HealthcareHero: FC = () => {
  return (
    <section id="geometric-hero-container" style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#030303'
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(0, 255, 148, 0.05), transparent 50%), radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.05), transparent 50%)',
        filter: 'blur(60px)'
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        textAlign: 'center'
      }}>
        {/* Badge */}
        <div class="geometric-content-item geometric-content-item-0" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'rgba(0, 255, 148, 0.08)',
          border: '1px solid rgba(0, 255, 148, 0.3)',
          borderRadius: '50px',
          marginBottom: '48px',
          boxShadow: '0 0 20px rgba(0, 255, 148, 0.2)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#00FF94',
            boxShadow: '0 0 10px rgba(0, 255, 148, 0.6)'
          }}></div>
          <span style={{
            fontSize: '13px',
            color: '#00FF94',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}>Biologic Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 class="geometric-content-item geometric-content-item-1" style={{
          fontSize: 'clamp(40px, 8vw, 96px)',
          fontWeight: '700',
          marginBottom: '32px',
          lineHeight: '1.1',
          letterSpacing: '-0.02em'
        }}>
          <span style={{
            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.8))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>From Reactive Care to</span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #00FF94, rgba(255, 255, 255, 0.9), #00FF94)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Assured Health</span>
        </h1>

        {/* Subtitle */}
        <p class="geometric-content-item geometric-content-item-2" style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255, 255, 255, 0.6)',
          marginBottom: '48px',
          lineHeight: '1.7',
          maxWidth: '800px',
          margin: '0 auto 48px'
        }}>
          Deploy autonomous AI agents across oncology, drug discovery, population health, and clinical operations—measured in outcomes, not hours.
        </p>

        {/* Stats Card */}
        <div class="geometric-content-item geometric-content-item-2" style={{
          display: 'inline-block',
          background: 'rgba(0, 30, 20, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 255, 148, 0.3)',
          borderRadius: '24px',
          padding: '40px 80px',
          marginTop: '24px',
          boxShadow: '0 8px 32px rgba(0, 255, 148, 0.15), inset 0 1px 0 rgba(0, 255, 148, 0.1)'
        }}>
          <div style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#00FF94',
            lineHeight: '1',
            marginBottom: '12px',
            textShadow: '0 0 30px rgba(0, 255, 148, 0.5)'
          }}>50%</div>
          <div style={{
            fontSize: '20px',
            color: 'white',
            fontWeight: '600',
            marginBottom: '6px',
            letterSpacing: '0.02em'
          }}>Faster Time-to-Insight</div>
          <div style={{
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.6)',
            letterSpacing: '0.05em'
          }}>From Weeks to Days</div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, #030303, transparent, rgba(3, 3, 3, 0.8))',
        pointerEvents: 'none'
      }}></div>
    </section>
  )
}

const SolutionMatrixSection: FC = () => {
  const solutions = [
    {
      category: 'Precision Medicine & R&D',
      icon: 'fa-dna',
      title: 'Oncology Precision Engine',
      description: 'Real-time synthesis of clinical notes, genomics, and imaging.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Vertex AI', 'spaCy', 'BERT', 'Python'],
      metric: '50% Faster Time-to-Insight',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Drug Discovery',
      icon: 'fa-flask',
      title: 'In Silico R&D Lab',
      description: 'Simulate and predict drug candidates before the lab.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
      tags: ['PyTorch', 'TensorFlow', 'BioNeMo'],
      metric: '40-60% Reduction in Time-to-Candidate',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Clinical Care',
      icon: 'fa-user-md',
      title: 'Population Risk Radar',
      description: 'Predictive risk stratification & population health management.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      tags: ['Snowflake', 'dbt', 'ML Models'],
      metric: '22% Reduction in Preventable Admissions',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Medical Imaging',
      icon: 'fa-brain',
      title: 'Computer Vision Diagnostics',
      description: 'Automated medical imaging & pathology analysis.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      tags: ['MONAI', 'AWS SageMaker', 'Docker'],
      metric: 'FDA SaMD Ready',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Patient Engagement',
      icon: 'fa-comments',
      title: 'Secure Patient Messaging',
      description: 'Meet patients on WhatsApp & Viber with HIPAA-compliant AI triage.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      tags: ['Twilio', 'Redis', 'GPT-4'],
      metric: '33% Reduction in No-Shows',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Clinical Documentation',
      icon: 'fa-file-medical',
      title: 'Ambient Clinical Scribe',
      description: 'Give clinicians back their time with AI documentation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Whisper', 'GPT-4', 'FHIR'],
      metric: '2hrs Saved per Shift',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Revenue Operations',
      icon: 'fa-dollar-sign',
      title: 'Autonomous Revenue Cycle',
      description: 'Cognition coding and denial management at scale.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      tags: ['ICD-10', 'CPT', 'NLP'],
      metric: '30% Reduction in DNFB Days',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    },
    {
      category: 'Clinical Trials',
      icon: 'fa-clipboard-check',
      title: 'Clinical Trial Data Fabric',
      description: 'Central nervous system for clinical evidence.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
      tags: ['CDISC', 'EDC', 'Databricks'],
      metric: 'Regulatory Ready',
      metricColor: '#00FF94',
      gradient: 'linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 255, 148, 0.05))'
    }
  ];

  return (
    <section style={{
      padding: '120px 32px',
      background: '#050505',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>Solution Matrix</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Highly interactive intelligence cards for every healthcare challenge</p>
        </div>

        {/* Solutions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '32px'
        }}>
          {solutions.map((solution, index) => (
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative'
            }}
            class="solution-card">
              {/* Image Background */}
              <div style={{
                height: '220px',
                backgroundImage: `url(${solution.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: solution.gradient
                }}></div>
                
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 255, 148, 0.3)',
                  borderRadius: '50px',
                  fontSize: '12px',
                  color: '#00FF94'
                }}>
                  <i class={`fas ${solution.icon}`}></i>
                  <span>{solution.category}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '24px'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>{solution.title}</h3>
                
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>{solution.description}</p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {solution.tags.map(tag => (
                    <span style={{
                      padding: '6px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: '500'
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Metric */}
                <div style={{
                  padding: '16px',
                  background: 'rgba(0, 255, 148, 0.08)',
                  border: '1px solid rgba(0, 255, 148, 0.2)',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: solution.metricColor,
                  textAlign: 'center'
                }}>{solution.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add hover effect styles */}
      <style>{`
        .solution-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 255, 148, 0.3);
          box-shadow: 0 20px 60px rgba(0, 255, 148, 0.15);
        }
      `}</style>
    </section>
  )
}

// Healthcare Page Layout
const HealthcarePage: FC = () => {
  return (
    <Layout>
      <FloatingNav />
      <HealthcareHero />
      <SolutionMatrixSection />
      <Footer />
      <script src="/static/geometric-hero.js" defer></script>
    </Layout>
  )
}

// Routes
app.get('/', (c) => {
  return c.html(<Home />)
})

app.get('/healthcare', (c) => {
  return c.html(<HealthcarePage />)
})

export default app
