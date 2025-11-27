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

// Healthcare Engagement Section
const HealthcareEngagementSection: FC = () => {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '96px',
      paddingBottom: '96px',
      marginTop: '96px',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gap: '48px',
          gridTemplateColumns: '1fr',
          alignItems: 'start'
        }}
        class="lg:grid-cols-2">
          {/* Left Content */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px',
              background: 'rgba(0, 255, 148, 0.1)',
              border: '1px solid rgba(0, 255, 148, 0.2)',
              padding: '6px 12px',
              backdropFilter: 'blur(12px)',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'
            }}>
              <span style={{
                fontSize: '12px',
                color: 'rgba(0, 255, 148, 0.9)',
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}>Transforming healthcare in 50+ institutions</span>
              <span style={{
                display: 'inline-flex',
                width: '20px',
                height: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                <i class="fas fa-arrow-right" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
              </span>
            </div>

            {/* Headline */}
            <h2 style={{
              marginTop: '20px',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: 'white',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'
            }}>
              We turn reactive healthcare into <span style={{
                background: 'linear-gradient(90deg, #00FF94, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>proactive outcomes</span>
            </h2>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              marginTop: '24px',
              lineHeight: '1.7',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'
            }}>
              Deploy autonomous AI agents across clinical operations, drug discovery, and patient care—measured in lives saved and outcomes improved, not hours logged.
            </p>

            {/* CTA Buttons */}
            <div style={{
              marginTop: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'
            }}>
              <a href="/deploy" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#00FF94',
                color: '#000000',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '1px solid rgba(0, 255, 148, 0.3)',
                boxShadow: '0 2.8px 2.2px rgba(0, 255, 148, 0.034), 0 6.7px 5.3px rgba(0, 255, 148, 0.048), 0 12.5px 10px rgba(0, 255, 148, 0.06)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onmouseover="this.style.background='rgba(0, 255, 148, 0.9)'"
              onmouseout="this.style.background='#00FF94'">
                Schedule Consultation
                <i class="fas fa-calendar-check" style={{ fontSize: '14px' }}></i>
              </a>
              <a href="/trust" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'"
              onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'">
                Our Compliance
                <i class="fas fa-shield-alt" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}></i>
              </a>
            </div>

            {/* Metrics */}
            <div style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 255, 148, 0.1)',
                  border: '1px solid rgba(0, 255, 148, 0.2)'
                }}>
                  <i class="fas fa-heartbeat" style={{ fontSize: '16px', color: '#00FF94' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>50M+</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Patient interactions processed</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 255, 148, 0.1)',
                  border: '1px solid rgba(0, 255, 148, 0.2)'
                }}>
                  <i class="fas fa-check-circle" style={{ fontSize: '16px', color: '#00FF94' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>99.9%</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Clinical accuracy rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Grid */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.55s both'
            }}>
              {/* Card 1 */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(0, 255, 148, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)'
              }}>
                <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80" 
                  alt="Doctor with stethoscope examining patient" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(0, 255, 148, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>HIPAA-First Architecture</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>Security and compliance built into every layer.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80" 
                  alt="Brain MRI scan and medical AI technology" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '16px'
                }}>
                  <div style={{
                    borderRadius: '50px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '6px 12px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <i class="fas fa-sparkles" style={{ fontSize: '12px', color: 'white' }}></i>
                      FDA SaMD Ready
                    </span>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>Evidence-Based AI</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>Every recommendation backed by clinical data.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Full Width */}
              <div style={{
                position: 'relative',
                gridColumn: 'span 2 / span 2',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=1600&q=80" 
                  alt="Modern hospital hallway with advanced technology" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.5',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    padding: '16px',
                    backdropFilter: 'blur(12px)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'white'
                      }}>Real-Time Clinical Intelligence</p>
                      <p style={{
                        marginTop: '4px',
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>From patient intake to discharge planning.</p>
                    </div>
                    <span style={{
                      display: 'inline-flex',
                      width: '36px',
                      height: '36px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }}>
                      <i class="fas fa-bolt" style={{ fontSize: '16px', color: 'white' }}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
      <HealthcareEngagementSection />
      <Footer />
      <script src="/static/geometric-hero.js" defer></script>
    </Layout>
  )
}

// Insurance Page Components
const InsuranceHero: FC = () => {
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
        background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.05), transparent 50%), radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.05), transparent 50%)',
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
          background: 'rgba(59, 130, 246, 0.08)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '50px',
          marginBottom: '48px',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#3B82F6',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
          }}></div>
          <span style={{
            fontSize: '13px',
            color: '#3B82F6',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}>Risk & Capital Intelligence</span>
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
          }}>From Manual Underwriting to</span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #3B82F6, rgba(255, 255, 255, 0.9), #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Predictive Precision</span>
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
          Deploy autonomous AI agents across underwriting, claims processing, fraud detection, and risk modeling—measured in accuracy and speed, not human hours.
        </p>

        {/* Stats Card */}
        <div class="geometric-content-item geometric-content-item-2" style={{
          display: 'inline-block',
          background: 'rgba(0, 20, 40, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '24px',
          padding: '40px 80px',
          marginTop: '24px',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#3B82F6',
            lineHeight: '1',
            marginBottom: '12px',
            textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
          }}>70%</div>
          <div style={{
            fontSize: '20px',
            color: 'white',
            fontWeight: '600',
            marginBottom: '6px',
            letterSpacing: '0.02em'
          }}>Faster Claims Processing</div>
          <div style={{
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.6)',
            letterSpacing: '0.05em'
          }}>From Days to Hours</div>
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

const InsuranceSolutionsSection: FC = () => {
  const solutions = [
    {
      category: 'Underwriting Intelligence',
      icon: 'fa-chart-line',
      title: 'Automated Risk Assessment',
      description: 'Real-time analysis of risk factors across multiple data sources.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['GPT-4', 'Actuarial Models', 'BigQuery'],
      metric: '60% Faster Underwriting',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Claims Processing',
      icon: 'fa-file-invoice-dollar',
      title: 'Intelligent Claims Automation',
      description: 'Automated claims intake, validation, and adjudication.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      tags: ['OCR', 'NLP', 'RPA'],
      metric: '70% Reduction in Processing Time',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Fraud Detection',
      icon: 'fa-shield-alt',
      title: 'Anomaly Detection Engine',
      description: 'Real-time fraud detection across claims and applications.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      tags: ['ML Models', 'Graph DB', 'Pattern Recognition'],
      metric: '85% Fraud Detection Rate',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Customer Service',
      icon: 'fa-comments',
      title: 'AI Claims Assistant',
      description: '24/7 intelligent chatbot for policy and claims inquiries.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      tags: ['GPT-4', 'Sentiment Analysis', 'Multi-channel'],
      metric: '90% Query Resolution',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Policy Management',
      icon: 'fa-file-contract',
      title: 'Dynamic Pricing Engine',
      description: 'AI-powered premium calculation and policy recommendations.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
      tags: ['Actuarial AI', 'Market Data', 'Risk Scoring'],
      metric: '25% Better Risk Pricing',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Regulatory Compliance',
      icon: 'fa-balance-scale',
      title: 'Compliance Monitor',
      description: 'Automated regulatory reporting and compliance tracking.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      tags: ['RegTech', 'Document AI', 'Audit Trail'],
      metric: '100% Compliance Rate',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Loss Prevention',
      icon: 'fa-exclamation-triangle',
      title: 'Predictive Loss Modeling',
      description: 'Forecast and prevent losses before they occur.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Time Series', 'Weather API', 'IoT Data'],
      metric: '40% Reduction in Losses',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
    },
    {
      category: 'Reinsurance',
      icon: 'fa-handshake',
      title: 'Reinsurance Optimizer',
      description: 'Optimize reinsurance placement and treaty management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['Portfolio Analysis', 'Risk Transfer', 'Capital Model'],
      metric: 'Treaty Optimization',
      metricColor: '#3B82F6',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))'
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
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>Insurance AI Solutions</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Comprehensive intelligence for every insurance workflow</p>
        </div>

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
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '50px',
                  fontSize: '12px',
                  color: '#3B82F6'
                }}>
                  <i class={`fas ${solution.icon}`}></i>
                  <span>{solution.category}</span>
                </div>
              </div>

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

                <div style={{
                  padding: '16px',
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
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

      <style>{`
        .solution-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
        }
      `}</style>
    </section>
  )
}

const InsuranceEngagementSection: FC = () => {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '96px',
      paddingBottom: '96px',
      marginTop: '96px',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gap: '48px',
          gridTemplateColumns: '1fr',
          alignItems: 'start'
        }}
        class="lg:grid-cols-2">
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              padding: '6px 12px',
              backdropFilter: 'blur(12px)',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'
            }}>
              <span style={{
                fontSize: '12px',
                color: 'rgba(59, 130, 246, 0.9)',
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}>Powering 200+ insurance carriers globally</span>
              <span style={{
                display: 'inline-flex',
                width: '20px',
                height: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                <i class="fas fa-arrow-right" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
              </span>
            </div>

            <h2 style={{
              marginTop: '20px',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: 'white',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'
            }}>
              We turn complex risk into <span style={{
                background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>clear decisions</span>
            </h2>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              marginTop: '24px',
              lineHeight: '1.7',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'
            }}>
              Deploy autonomous AI agents across underwriting, claims, fraud detection, and risk modeling—measured in accuracy and profitability, not processing time.
            </p>

            <div style={{
              marginTop: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'
            }}>
              <a href="/deploy" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#3B82F6',
                color: '#000000',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 2.8px 2.2px rgba(59, 130, 246, 0.034), 0 6.7px 5.3px rgba(59, 130, 246, 0.048)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                Request Demo
                <i class="fas fa-play-circle" style={{ fontSize: '14px' }}></i>
              </a>
              <a href="/trust" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                SOC 2 Certified
                <i class="fas fa-certificate" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}></i>
              </a>
            </div>

            <div style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <i class="fas fa-file-invoice" style={{ fontSize: '16px', color: '#3B82F6' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>100M+</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Claims processed annually</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <i class="fas fa-dollar-sign" style={{ fontSize: '16px', color: '#3B82F6' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>$50B+</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Premiums under management</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.55s both'
            }}>
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)'
              }}>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                  alt="Business professional analyzing insurance data" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>Predictive Underwriting</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>AI-powered risk assessment in real-time.</p>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                  alt="Fraud detection and security analytics" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '16px'
                }}>
                  <div style={{
                    borderRadius: '50px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '6px 12px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <i class="fas fa-shield-alt" style={{ fontSize: '12px', color: 'white' }}></i>
                      Real-time
                    </span>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>Fraud Detection</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>85% fraud detection accuracy.</p>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative',
                gridColumn: 'span 2 / span 2',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
                  alt="Insurance analytics dashboard" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.5',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    padding: '16px',
                    backdropFilter: 'blur(12px)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'white'
                      }}>Automated Claims Processing</p>
                      <p style={{
                        marginTop: '4px',
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>From submission to payout in hours.</p>
                    </div>
                    <span style={{
                      display: 'inline-flex',
                      width: '36px',
                      height: '36px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }}>
                      <i class="fas fa-robot" style={{ fontSize: '16px', color: 'white' }}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

// Insurance Page Layout
const InsurancePage: FC = () => {
  return (
    <Layout>
      <FloatingNav />
      <InsuranceHero />
      <InsuranceSolutionsSection />
      <InsuranceEngagementSection />
      <Footer />
      <script src="/static/geometric-hero.js" defer></script>
    </Layout>
  )
}

// Manufacturing Page Components
const ManufacturingHero: FC = () => {
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
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.05), transparent 50%), radial-gradient(ellipse at bottom right, rgba(234, 88, 12, 0.05), transparent 50%)',
        filter: 'blur(60px)'
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        textAlign: 'center'
      }}>
        <div class="geometric-content-item geometric-content-item-0" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '50px',
          marginBottom: '48px',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#F59E0B',
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.6)'
          }}></div>
          <span style={{
            fontSize: '13px',
            color: '#F59E0B',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}>Physical Operations Intelligence</span>
        </div>

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
          }}>From Reactive Maintenance to</span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #F59E0B, rgba(255, 255, 255, 0.9), #F59E0B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Predictive Operations</span>
        </h1>

        <p class="geometric-content-item geometric-content-item-2" style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255, 255, 255, 0.6)',
          marginBottom: '48px',
          lineHeight: '1.7',
          maxWidth: '800px',
          margin: '0 auto 48px'
        }}>
          Deploy autonomous AI agents across production lines, supply chains, quality control, and digital twins—measured in uptime and efficiency, not downtime.
        </p>

        <div class="geometric-content-item geometric-content-item-2" style={{
          display: 'inline-block',
          background: 'rgba(40, 30, 0, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '24px',
          padding: '40px 80px',
          marginTop: '24px',
          boxShadow: '0 8px 32px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(245, 158, 11, 0.1)'
        }}>
          <div style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#F59E0B',
            lineHeight: '1',
            marginBottom: '12px',
            textShadow: '0 0 30px rgba(245, 158, 11, 0.5)'
          }}>40%</div>
          <div style={{
            fontSize: '20px',
            color: 'white',
            fontWeight: '600',
            marginBottom: '6px',
            letterSpacing: '0.02em'
          }}>Reduction in Downtime</div>
          <div style={{
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.6)',
            letterSpacing: '0.05em'
          }}>Predictive Maintenance at Scale</div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, #030303, transparent, rgba(3, 3, 3, 0.8))',
        pointerEvents: 'none'
      }}></div>
    </section>
  )
}

// Manufacturing Features - Alternating Layout
const ManufacturingFeaturesSection: FC = () => {
  const features = [
    {
      title: 'Digital Twin Platform',
      description: 'Create virtual replicas of your entire production line. Monitor, simulate, and optimize operations in real-time before implementing changes on the factory floor.',
      icon: 'fa-cube',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80',
      tags: ['IoT', 'Unity3D', 'Azure Digital Twins'],
      metric: '99.5% Simulation Accuracy',
      color: '#F59E0B',
      reverse: false
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Prevent equipment failures before they happen. Our AI analyzes sensor data, vibration patterns, and historical performance to predict maintenance needs.',
      icon: 'fa-wrench',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      tags: ['Time Series', 'Anomaly Detection', 'Edge Computing'],
      metric: '40% Downtime Reduction',
      color: '#EA580C',
      reverse: true
    },
    {
      title: 'Quality Control Vision',
      description: 'Automated defect detection with computer vision. Inspect 100% of products at production speed with superhuman accuracy.',
      icon: 'fa-eye',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
      tags: ['Computer Vision', 'TensorFlow', 'Edge AI'],
      metric: '99.9% Defect Detection',
      color: '#F59E0B',
      reverse: false
    },
    {
      title: 'Supply Chain Optimizer',
      description: 'End-to-end visibility and optimization across your supply chain. Predict disruptions, optimize inventory, and automate procurement.',
      icon: 'fa-truck',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
      tags: ['Optimization', 'Forecasting', 'ERP Integration'],
      metric: '30% Inventory Reduction',
      color: '#EA580C',
      reverse: true
    }
  ];

  return (
    <section style={{
      padding: '120px 32px',
      background: '#050505',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>Manufacturing Intelligence Platform</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>From factory floor to supply chain, AI that understands operations</p>
        </div>

        {/* Alternating Feature Blocks */}
        {features.map((feature, index) => (
          <div key={index} style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '120px'
          }}
          class="lg:grid-cols-2">
            {/* Image Side */}
            <div style={{
              order: feature.reverse ? 2 : 1,
              position: 'relative',
              height: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: `1px solid ${feature.color}40`,
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <img src={feature.image} 
                alt={feature.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: '0.7'
                }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${feature.color}20, transparent 70%)`
              }}></div>
              
              {/* Floating Metric Badge */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '16px 24px',
                borderRadius: '16px',
                border: `1px solid ${feature.color}60`
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: feature.color,
                  marginBottom: '4px'
                }}>{feature.metric.split(' ')[0]}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>{feature.metric.split(' ').slice(1).join(' ')}</div>
              </div>
            </div>

            {/* Content Side */}
            <div style={{
              order: feature.reverse ? 1 : 2,
              padding: feature.reverse ? '0 48px 0 0' : '0 0 0 48px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `${feature.color}20`,
                border: `1px solid ${feature.color}40`,
                marginBottom: '24px'
              }}>
                <i class={`fas ${feature.icon}`} style={{ 
                  fontSize: '28px', 
                  color: feature.color 
                }}></i>
              </div>

              <h3 style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>{feature.title}</h3>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.7',
                marginBottom: '28px'
              }}>{feature.description}</p>

              {/* Tech Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px'
              }}>
                {feature.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '500'
                  }}>{tag}</span>
                ))}
              </div>

              <a href="/deploy" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: feature.color,
                color: '#000000',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}>
                Learn More
                <i class="fas fa-arrow-right" style={{ fontSize: '14px' }}></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Manufacturing Solutions Grid - 3 Column Layout
const ManufacturingSolutionsGrid: FC = () => {
  const solutions = [
    {
      icon: 'fa-robot',
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks and workflows.',
      color: '#F59E0B'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Production Analytics',
      description: 'Real-time OEE and performance metrics.',
      color: '#EA580C'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Safety Monitoring',
      description: 'AI-powered workplace safety systems.',
      color: '#F59E0B'
    },
    {
      icon: 'fa-battery-three-quarters',
      title: 'Energy Optimization',
      description: 'Reduce energy costs with AI insights.',
      color: '#EA580C'
    },
    {
      icon: 'fa-warehouse',
      title: 'Warehouse Intelligence',
      description: 'Smart inventory and logistics management.',
      color: '#F59E0B'
    },
    {
      icon: 'fa-users-cog',
      title: 'Workforce Optimization',
      description: 'Skill matching and scheduling AI.',
      color: '#EA580C'
    }
  ];

  return (
    <section style={{
      padding: '100px 32px',
      background: '#030303',
      position: 'relative'
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
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>Additional Capabilities</h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>Comprehensive AI tools for modern manufacturing</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {solutions.map((solution, index) => (
            <div key={index} style={{
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            class="manufacturing-solution-card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: `${solution.color}20`,
                border: `1px solid ${solution.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <i class={`fas ${solution.icon}`} style={{ 
                  fontSize: '24px', 
                  color: solution.color 
                }}></i>
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '12px'
              }}>{solution.title}</h3>

              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: '1.6'
              }}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .manufacturing-solution-card:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </section>
  )
}

// Manufacturing Engagement Section
const ManufacturingEngagementSection: FC = () => {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '96px',
      paddingBottom: '96px',
      marginTop: '96px',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gap: '48px',
          gridTemplateColumns: '1fr',
          alignItems: 'start'
        }}
        class="lg:grid-cols-2">
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              padding: '6px 12px',
              backdropFilter: 'blur(12px)',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'
            }}>
              <span style={{
                fontSize: '12px',
                color: 'rgba(245, 158, 11, 0.9)',
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}>Trusted by 500+ manufacturers worldwide</span>
              <span style={{
                display: 'inline-flex',
                width: '20px',
                height: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                <i class="fas fa-arrow-right" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
              </span>
            </div>

            <h2 style={{
              marginTop: '20px',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: 'white',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'
            }}>
              We turn factories into <span style={{
                background: 'linear-gradient(90deg, #F59E0B, #EA580C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>intelligent operations</span>
            </h2>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              marginTop: '24px',
              lineHeight: '1.7',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'
            }}>
              Deploy autonomous AI agents across production, quality control, and supply chain—measured in uptime, efficiency, and zero defects.
            </p>

            <div style={{
              marginTop: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'
            }}>
              <a href="/deploy" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#F59E0B',
                color: '#000000',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 2.8px 2.2px rgba(245, 158, 11, 0.034)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                Schedule Tour
                <i class="fas fa-industry" style={{ fontSize: '14px' }}></i>
              </a>
              <a href="/trust" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                ISO 27001 Certified
                <i class="fas fa-certificate" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}></i>
              </a>
            </div>

            <div style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.2)'
                }}>
                  <i class="fas fa-cogs" style={{ fontSize: '16px', color: '#F59E0B' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>10K+</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Connected machines</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.2)'
                }}>
                  <i class="fas fa-clock" style={{ fontSize: '16px', color: '#F59E0B' }}></i>
                </div>
                <div>
                  <p style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>99.7%</p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}>Average uptime achieved</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              animation: 'fadeSlideIn 0.5s ease-in-out 0.55s both'
            }}>
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)'
              }}>
                <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80" 
                  alt="Manufacturing robotics and automation" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>Digital Twin Technology</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>Virtual factory simulations.</p>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(234, 88, 12, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                  alt="Quality control inspection systems" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.6',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '16px'
                }}>
                  <div style={{
                    borderRadius: '50px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '6px 12px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <i class="fas fa-eye" style={{ fontSize: '12px', color: 'white' }}></i>
                      AI-Powered
                    </span>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '16px',
                    border: '1px solid rgba(234, 88, 12, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>Quality Vision</p>
                    <p style={{
                      marginTop: '4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>99.9% defect detection.</p>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative',
                gridColumn: 'span 2 / span 2',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80" 
                  alt="Supply chain and logistics optimization" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.5',
                    position: 'absolute'
                  }} />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    padding: '16px',
                    backdropFilter: 'blur(12px)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'white'
                      }}>Supply Chain Intelligence</p>
                      <p style={{
                        marginTop: '4px',
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>End-to-end visibility and optimization.</p>
                    </div>
                    <span style={{
                      display: 'inline-flex',
                      width: '36px',
                      height: '36px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }}>
                      <i class="fas fa-truck-loading" style={{ fontSize: '16px', color: 'white' }}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

// Manufacturing Page Layout
const ManufacturingPage: FC = () => {
  return (
    <Layout>
      <FloatingNav />
      <ManufacturingHero />
      <ManufacturingFeaturesSection />
      <ManufacturingSolutionsGrid />
      <ManufacturingEngagementSection />
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

app.get('/insurance', (c) => {
  return c.html(<InsurancePage />)
})

app.get('/manufacturing', (c) => {
  return c.html(<ManufacturingPage />)
})

export default app
