import React from 'react';

/**
 * Heartland Sites — Websites for Local Service Businesses
 * Design overwritten via user-provided HTML design.
 * Preserving contact info:
 * - Phone: (515) 732-0833
 * - Email: contacts@heartlandservicegroup.com
 * - Meeting: https://calendly.com/contacts-heartlandservicegroup/30min
 */

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1B2A3B] font-sans leading-relaxed selection:bg-[#B5431A]/20">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500&display=swap');
        
        :root {
          --cream: #FAF7F2;
          --rust: #B5431A;
          --rust-light: #F0EAE2;
          --navy: #1B2A3B;
          --navy-mid: #2E4460;
          --gold: #C68B2F;
          --text: #1B2A3B;
          --muted: #5A6472;
          --border: rgba(27,42,59,0.12);
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }

        .font-serif { font-family: var(--serif); }
        .font-sans { font-family: var(--sans); }

        .nav-cta {
          background: var(--rust);
          color: #fff !important;
          padding: 0.5rem 1.25rem;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #9E3714; }

        .btn-primary {
          background: var(--rust);
          color: #fff;
          padding: 0.875rem 2rem;
          border-radius: 4px;
          font-family: var(--sans);
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
          border: none;
          cursor: pointer;
          display: inline-block;
        }
        .btn-primary:hover { background: #9E3714; }

        .btn-ghost {
          color: var(--navy);
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid var(--navy);
          padding-bottom: 1px;
        }

        .hero-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(27,42,59,0.08);
        }

        .card-topbar {
          background: var(--navy);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .card-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
        }

        .card-url {
          font-size: 0.6875rem;
          color: rgba(255,255,255,0.5);
          margin-left: 0.5rem;
          font-family: var(--sans);
        }

        .card-hero-mock {
          background: var(--navy);
          padding: 1.5rem 1.25rem;
          color: #fff;
        }

        .card-hero-mock .mock-eyebrow {
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.375rem;
        }

        .card-hero-mock .mock-h1 {
          font-family: var(--serif);
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }

        .card-hero-mock .mock-sub {
          font-size: 0.6875rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1rem;
        }

        .mock-btn {
          display: inline-block;
          background: var(--rust);
          color: #fff;
          font-size: 0.6875rem;
          padding: 0.375rem 0.875rem;
          border-radius: 3px;
          font-weight: 500;
        }

        .card-body-mock { padding: 1rem 1.25rem; }

        .mock-services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .mock-service-chip {
          background: var(--rust-light);
          border-radius: 3px;
          padding: 0.375rem 0.5rem;
          font-size: 0.625rem;
          color: var(--rust);
          font-weight: 500;
        }

        .mock-phone {
          font-size: 0.75rem;
          color: var(--navy);
          font-weight: 700;
          font-family: var(--serif);
        }

        .mock-phone span {
          font-size: 0.5625rem;
          color: var(--muted);
          font-family: var(--sans);
          font-weight: 400;
          display: block;
          margin-bottom: 2px;
        }

        .trust-bar {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: #fff;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--muted);
          font-weight: 500;
        }

        .trust-icon {
          width: 16px; height: 16px;
          background: var(--rust);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-icon svg {
          width: 9px; height: 9px;
          fill: none;
          stroke: #fff;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .section {
          padding: 5rem 2rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--rust);
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .section-title {
          font-family: var(--serif);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--navy);
          text-align: center;
          margin-bottom: 3.5rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .steps::before {
          content: '';
          position: absolute;
          top: 1.25rem;
          left: calc(12.5% + 1rem);
          right: calc(12.5% + 1rem);
          height: 1px;
          background: var(--border);
          z-index: 0;
        }

        .step { text-align: center; position: relative; z-index: 1; }

        .step-num {
          width: 2.5rem; height: 2.5rem;
          border-radius: 50%;
          background: var(--navy);
          color: #fff;
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .step-title {
          font-family: var(--serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.5rem;
        }

        .step-desc { font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }

        .features-bg { background: var(--navy); padding: 5rem 2rem; }

        .features-inner { max-width: 980px; margin: 0 auto; }

        .features-inner .section-label { color: rgba(255,255,255,0.45); }
        .features-inner .section-title { color: #fff; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .feature-icon {
          width: 2rem; height: 2rem;
          background: var(--rust);
          border-radius: 4px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon svg {
          width: 14px; height: 14px;
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .feature-title {
          font-family: var(--serif);
          font-size: 1.0625rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .feature-desc { font-size: 0.8125rem; color: rgba(255,255,255,0.55); line-height: 1.7; }

        .pricing-section {
          padding: 5rem 2rem;
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .pricing-left h2 {
          font-family: var(--serif);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .pricing-left p { font-size: 0.9375rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; }

        .pricing-cards { display: flex; flex-direction: column; gap: 1rem; }

        .pricing-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pricing-card.featured { border-color: var(--rust); border-width: 2px; }

        .pricing-card-label {
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }

        .pricing-card.featured .pricing-card-label { color: var(--rust); }

        .pricing-card-name {
          font-family: var(--serif);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--navy);
        }

        .pricing-amount { text-align: right; }

        .pricing-amount .amount {
          font-family: var(--serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy);
        }

        .pricing-amount .freq { font-size: 0.75rem; color: var(--muted); }

        .pricing-note { font-size: 0.8125rem; color: var(--muted); margin-top: 1rem; font-style: italic; }

        .testimonials-bg {
          background: var(--rust-light);
          padding: 5rem 2rem;
          border-top: 1px solid rgba(181,67,26,0.15);
          border-bottom: 1px solid rgba(181,67,26,0.15);
        }

        .testimonials-inner { max-width: 980px; margin: 0 auto; }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .testimonial-card {
          background: #fff;
          border: 1px solid rgba(181,67,26,0.12);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .stars { display: flex; gap: 2px; margin-bottom: 0.75rem; }

        .star {
          width: 12px; height: 12px;
          background: var(--gold);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .testimonial-text {
          font-size: 0.875rem;
          color: var(--navy);
          line-height: 1.7;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .testimonial-author { font-size: 0.8125rem; font-weight: 500; color: var(--muted); }
        .testimonial-author strong { color: var(--navy); display: block; font-size: 0.875rem; }

        .final-cta {
          padding: 5rem 2rem;
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        .final-cta h2 {
          font-family: var(--serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .final-cta p { font-size: 1rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.75; }

        footer {
          border-top: 1px solid var(--border);
          padding: 2rem;
          text-align: center;
          font-size: 0.8125rem;
          color: var(--muted);
        }

        footer strong { color: var(--navy); font-family: var(--serif); }

        @media (max-width: 720px) {
          .hero { grid-template-columns: 1fr; gap: 2.5rem; }
          .hero h1 { font-size: 2.25rem; }
          .hero-card { display: none; }
          .steps { grid-template-columns: 1fr 1fr; }
          .steps::before { display: none; }
          .features-grid { grid-template-columns: 1fr; }
          .pricing-section { grid-template-columns: 1fr; gap: 2.5rem; }
          .testimonials-grid { grid-template-columns: 1fr; }
          nav .nav-links a:not(.nav-cta) { display: none; }
        }
      ` }} />

      <nav className="flex items-center justify-between px-8 py-5 border-b border-[rgba(27,42,59,0.12)] bg-[#FAF7F2] sticky top-0 z-[100]">
        <div className="logo font-serif text-xl font-bold text-[#1B2A3B] tracking-tight">
          Heartland <span className="text-[#B5431A]">Sites</span>
        </div>
        <div className="nav-links flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-[#5A6472] font-medium hover:text-[#1B2A3B]">How it works</a>
          <a href="#pricing" className="text-sm text-[#5A6472] font-medium hover:text-[#1B2A3B]">Pricing</a>
          <a href="https://calendly.com/contacts-heartlandservicegroup/30min" target="_blank" rel="noopener noreferrer" className="nav-cta">See your demo</a>
        </div>
      </nav>

      <section className="bg-[#FAF7F2]">
        <div className="hero px-8 py-20 md:py-16 max-w-[980px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="hero-text">
            <p className="hero-eyebrow text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#B5431A] mb-4">For local service businesses</p>
            <h1 className="font-serif text-[3rem] font-bold leading-[1.15] text-[#1B2A3B] mb-6 tracking-tight">A website that works as hard as you do</h1>
            <p className="text-[1.0625rem] text-[#5A6472] mb-8 leading-[1.75]">We build your site, handle the hosting, and give you a simple editor so you can update it anytime — no tech required.</p>
            <div className="cta-row flex items-center gap-5 flex-wrap">
              <a href="https://calendly.com/contacts-heartlandservicegroup/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">See your demo site</a>
              <a href="#how-it-works" className="btn-ghost">How it works</a>
            </div>
          </div>
          <div className="hero-card hidden md:block">
            <div className="card-topbar">
              <div className="card-dot"></div>
              <div className="card-dot"></div>
              <div className="card-dot"></div>
              <span className="card-url">rivervalleyplumbing.com</span>
            </div>
            <div className="card-hero-mock">
              <p className="mock-eyebrow">Licensed & Insured · River Valley, IA</p>
              <p className="mock-h1">Fast, Reliable Plumbing — When You Need It</p>
              <p className="mock-sub">Serving Polk County and surrounding areas since 2003</p>
              <span className="mock-btn">Call for a free quote</span>
            </div>
            <div className="card-body-mock">
              <div className="mock-services">
                <div className="mock-service-chip">Water heaters</div>
                <div className="mock-service-chip">Drain cleaning</div>
                <div className="mock-service-chip">Emergency repair</div>
                <div className="mock-service-chip">Remodels</div>
              </div>
              <div className="mock-phone">
                <span>Call us anytime</span>
                (515) 732-0833
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg>
          </div>
          Done-for-you setup
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg>
          </div>
          You own your domain
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg>
          </div>
          No long-term contracts
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg>
          </div>
          Works on phones
        </div>
      </div>

      <section id="how-it-works" className="bg-white">
        <div className="section">
          <p className="section-label">Simple process</p>
          <h2 className="section-title">You're live in days, not months</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <p className="step-title">We build your site</p>
              <p className="step-desc">Based on your business — services, area, contact info. No questionnaires to fill out.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <p className="step-title">You review it</p>
              <p className="step-desc">We send you a live demo. You tell us what to change. We fix it fast.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <p className="step-title">You go live</p>
              <p className="step-desc">Your site is published to your own domain. Customers can find you right away.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <p className="step-title">Update anytime</p>
              <p className="step-desc">Use our simple editor to change your hours, services, or contact info in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-bg">
        <div className="features-inner">
          <p className="section-label">What you get</p>
          <h2 className="section-title">Everything a service business needs</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="12" rx="2"/><line x1="4" y1="5" x2="10" y2="5"/><line x1="4" y1="8" x2="8" y2="8"/></svg>
              </div>
              <p className="feature-title">Simple editor</p>
              <p className="feature-desc">Update your text, services, and contact info from any phone or laptop — no tech skill needed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><path d="M7 1l1.5 4h4l-3.5 2.5 1.5 4L7 9 3.5 11.5l1.5-4L1 5h4z"/></svg>
              </div>
              <p className="feature-title">Fast and reliable</p>
              <p className="feature-desc">Your site loads instantly and stays online 24/7. No maintenance, no downtime, no IT calls.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><rect x="2" y="4" width="10" height="8" rx="1"/><path d="M5 4V3a2 2 0 014 0v1"/></svg>
              </div>
              <p className="feature-title">You own everything</p>
              <p className="feature-desc">Your domain is yours. If you ever leave, you take it with you. No lock-in, no tricks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><rect x="1" y="3" width="8" height="11" rx="1"/><rect x="5" y="1" width="8" height="11" rx="1"/></svg>
              </div>
              <p className="feature-title">Mobile first</p>
              <p className="feature-desc">Most customers search on a phone. Your site looks great and loads fast on every device.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="6"/><path d="M7 4v3l2 2"/></svg>
              </div>
              <p className="feature-title">Live in days</p>
              <p className="feature-desc">We move fast. Most sites are done and live within a few business days of getting started.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 14 14"><path d="M7 1l1 3h3l-2.5 2 1 3L7 7.5 4.5 9l1-3L3 4h3z"/></svg>
              </div>
              <p className="feature-title">Local expertise</p>
              <p className="feature-desc">We build specifically for local service businesses — plumbers, HVAC, electricians, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#FAF7F2]">
        <div className="pricing-section">
          <div className="pricing-left">
            <p className="hero-eyebrow">Simple pricing</p>
            <h2>One price to get started. A small monthly to keep it running.</h2>
            <p>No surprise fees, no agency markups. You know exactly what you're paying and what you're getting.</p>
            <p className="pricing-note">Cancel anytime. You keep your domain no matter what.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card featured">
              <div>
                <p className="pricing-card-label">One-time</p>
                <p className="pricing-card-name">Site setup</p>
              </div>
              <div className="pricing-amount">
                <p className="amount">$499</p>
                <p className="freq">one time</p>
              </div>
            </div>
            <div className="pricing-card">
              <div>
                <p className="pricing-card-label">Monthly</p>
                <p className="pricing-card-name">Hosting + editor</p>
              </div>
              <div className="pricing-amount">
                <p className="amount">$8</p>
                <p className="freq">per month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-bg">
        <div className="testimonials-inner">
          <p className="section-label text-center">What people say</p>
          <h2 className="section-title text-[#1B2A3B]">Real businesses, real results</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars"><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div></div>
              <p className="testimonial-text">"I got calls from two new customers the first week my site went up. I'd been putting off getting a website for years — I had no idea it would be this easy."</p>
              <p className="testimonial-author"><strong>Mike D.</strong>Plumber, Dallas County</p>
            </div>
            <div className="testimonial-card">
              <div className="stars"><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div></div>
              <p className="testimonial-text">"They built the whole thing from my Google Business page. Looked exactly like my business. I updated my service list myself in about two minutes."</p>
              <p className="testimonial-author"><strong>Carol T.</strong>HVAC, Adair County</p>
            </div>
            <div className="testimonial-card">
              <div className="stars"><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div><div className="star"></div></div>
              <p className="testimonial-text">"No contracts, no nonsense. I own my domain and I can edit my site myself. That's all I wanted — and that's exactly what I got."</p>
              <p className="testimonial-author"><strong>James R.</strong>Electrician, Guthrie County</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="final-cta">
          <p className="hero-eyebrow text-center">Ready to get started?</p>
          <h2>See your demo site — before you spend a dime</h2>
          <p>We'll build a live demo based on your business. No commitment, no credit card. Just a real website you can look at and decide.</p>
          <a href="https://calendly.com/contacts-heartlandservicegroup/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">Get your free demo</a>
        </div>
      </section>

      <footer className="border-t border-[rgba(27,42,59,0.12)] py-8 text-center text-[0.8125rem] text-[#5A6472]">
        <strong className="text-[#1B2A3B] font-serif">Heartland Sites</strong> — Built for local businesses. Simple, fast, yours.
        <br /><br />
        <div className="flex justify-center gap-4 mb-4">
          <a href="tel:(515) 732-0833" className="hover:text-[#B5431A]">(515) 732-0833</a>
          <a href="mailto:contacts@heartlandservicegroup.com" className="hover:text-[#B5431A]">contacts@heartlandservicegroup.com</a>
        </div>
        <span className="opacity-60">© 2026 Heartland Service Group &nbsp;·&nbsp; heartlandservicegroup.com</span>
      </footer>
    </div>
  );
};

export default Home;
