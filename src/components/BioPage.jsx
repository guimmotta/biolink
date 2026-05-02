import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/main.css'

// ── Ornament Divider ──────────────────────────────────────
function Divider() {
  return (
    <div className="divider" data-testid="divider">
      <div className="divider-line" />
      <div className="divider-diamond" />
      <div className="divider-line" />
    </div>
  )
}

// ── Hero Section ──────────────────────────────────────────
function HeroSection({ name, title }) {
  return (
    <section className="hero" data-testid="hero-section">
  <div className="hero-header">
    <h1 data-testid="hero-name">{name}</h1>
    <p data-testid="hero-title">{title}</p>
  </div>

  <div className="hero-photo-circle">
    <img src="/images/about.jpg" alt={name} />
  </div>

  {/* Seta FORA do círculo, absolute no hero */}
  <div className="hero-scroll-hint">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
</section>
  )
}

// ── About Section ─────────────────────────────────────────
function AboutSection({ about }) {
  return (
    <section className="about-section" data-testid="about-section">
      <h2 className="section-title">
        Sobre <span>mim</span>
      </h2>
      <p data-testid="about-text">{about}</p>
    </section>
  )
}

// ── Services Section ──────────────────────────────────────
function ServicesSection({ services }) {
  return (
    <section className="services-section" data-testid="services-section">
      <h2 className="section-title" style={{ marginBottom: 20 }}>
        Meus <span>serviços</span>
      </h2>
      {services.map((service) => (
        <a
          key={service.id}
          href={service.link}
          className="service-card"
          data-testid={`service-card-${service.id}`}
          style={{ background: service.bg }}
        >
          <div className="service-card-inner">
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <span className="service-arrow">→</span>
          </div>
        </a>
      ))}
    </section>
  )
}

// ── Links Section ─────────────────────────────────────────
function LinksSection({ links }) {
  return (
    <section className="links-section" data-testid="links-section">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className="link-btn"
          data-testid={`link-btn-${link.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-icon">{link.icon}</span>
          {link.label}
        </a>
      ))}
    </section>
  )
}

// ── CTA Section ───────────────────────────────────────────
function CtaSection({ cta }) {
  return (
    <section className="cta-section" data-testid="cta-section">
      <h2 className="section-title" style={{ fontStyle: 'normal', fontSize: '1.7rem' }}>
        Será um <em>prazer</em>
        <br />te ensinar!
      </h2>
      <p>{cta.text}</p>
    </section>
  )
}

// ── Bottom Photo + Contact ────────────────────────────────
function BottomSection({ name, contact }) {
  return (
    <>
      <div className="bottom-photo-wrap" data-testid="bottom-photo">
      <img src="/images/support.jpg" alt={name} />
        <div className="bottom-photo-overlay">
          <span style={{ color: '#faf8f4', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.04em' }}>
            {name}
          </span>
        </div>
      </div>
    </>
  )
}

// ── Contact Row ───────────────────────────────────────────
function ContactRow({ contact }) {
  return (
    <div className="contact-row" data-testid="contact-row">
      <a href={contact.instagram} className="contact-icon-btn" data-testid="contact-instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
        📸
      </a>
      <a href={contact.email} className="contact-icon-btn" data-testid="contact-email" title="E-mail">
        ✉️
      </a>
      <a href={contact.whatsapp} className="contact-icon-btn" data-testid="contact-whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        💬
      </a>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────
export default function BioPage() {
  const profile = useSelector((state) => state.profile)

  return (
    <>
      <main className="bio-page" data-testid="bio-page">
        <HeroSection name={profile.name} title={profile.title} />

        <Divider />

        <AboutSection about={profile.about} />

        <Divider />

        <ServicesSection services={profile.services} />

        <Divider />

        <CtaSection cta={profile.cta} />

        <Divider />

        <BottomSection name={profile.name} contact={profile.contact} />

      </main>
      
      <a
        href={profile.contact.whatsapp}
        className="whatsapp-float"
        data-testid="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero destravar meu inglês! 💬
      </a>
    </>
  )
}
