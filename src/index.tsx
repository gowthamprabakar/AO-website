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
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
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
      <button style={{
        padding: '8px 16px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '14px',
        transition: 'all 0.3s'
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

// Hero Section
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
      background: 'linear-gradient(135deg, #1a0a2e 0%, #0f0f23 50%, #050505 100%)'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 255, 148, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s'
      }}></div>

      {/* Trust Badge */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        padding: '8px 20px',
        marginBottom: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#00FF94'
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
        <div>We Architect</div>
        <div class="gradient-text">Assured Outcomes</div>
      </h1>

      {/* Subtitle */}
      <p style={{
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
      <div style={{
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
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'
    },
    {
      title: 'Insurance',
      subtitle: 'Risk & Capital',
      color: '#3B82F6',
      icon: 'fa-shield-alt',
      description: 'Underwriting, Claims, Fraud',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      title: 'Manufacturing',
      subtitle: 'Physical Ops',
      color: '#F59E0B',
      icon: 'fa-industry',
      description: 'Digital Twins, Supply Chain',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    {
      title: 'Telecom',
      subtitle: 'Connectivity',
      color: '#8B5CF6',
      icon: 'fa-signal',
      description: 'AIOps, 5G Slicing',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
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
            <div style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: `linear-gradient(135deg, ${industry.color}10 0%, transparent 100%)`
            }}>
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
              }}></div>
            </div>
          ))}
        </div>
      </div>
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
                  <a href="#">Healthcare</a>
                  <a href="#">Insurance</a>
                  <a href="#">Manufacturing</a>
                  <a href="#">Telecom</a>
                  <a href="#">Playground</a>
                  <a href="#">Manifesto</a>
                  <a href="#">Trust Center</a>
                  <a href="#">Deploy</a>
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

// Main Home Page
const Home: FC = () => {
  return (
    <Layout>
      <FloatingNav />
      <Hero />
      <IndustriesSection />
      <Footer />
    </Layout>
  )
}

// Routes
app.get('/', (c) => {
  return c.html(<Home />)
})

export default app
