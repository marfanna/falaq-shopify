'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiry, setEnquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setEnquiry('');
  };

  const enquiryTypes = ['General','Private Events','Press & Media','Careers','Feedback'];
  const hours = [
    { day:'Monday', val:'Closed', closed:true },
    { day:'Tuesday – Thursday', val:'12pm – 10pm' },
    { day:'Friday – Saturday', val:'12pm – 11pm' },
    { day:'Sunday', val:'12pm – 9pm' },
  ];
  const faqs = [
    { q:'Do you take walk-ins?', a:"Yes, walk-ins are welcome subject to availability. However, we strongly recommend making a reservation, especially on weekends." },
    { q:'Can I order food for delivery?', a:'Absolutely. We partner with Duare for home delivery. Visit duare.net to browse our full menu and place your order.' },
    { q:'Do you host private events?', a:'Yes. Our private dining room accommodates up to 20 guests — corporate dinners, birthdays, anniversaries, and bespoke tasting menus.' },
    { q:"Is there a dress code?", a:'Smart casual. We ask guests to avoid beachwear and athletic wear. Jackets are welcome but not required.' },
    { q:'Do you cater to dietary requirements?', a:'Our kitchen can accommodate vegetarian, vegan, and common allergens with advance notice. Please mention requirements when reserving.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">Get in Touch</div>
          <h1 className="page-hero-title">We&apos;d Love to<br />Hear From You</h1>
          <p className="page-hero-sub">Questions, private events, press enquiries, or just want to say hello — our team responds within 24 hours.</p>
        </div>
      </div>

      <section className="section section-dark-forest">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }} className="contact-layout">

            {/* Left */}
            <div>
              {/* Form */}
              <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:16, padding:'var(--s9)', boxShadow:'var(--shadow-card)', marginBottom:'var(--s7)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:330, color:'var(--white)', marginBottom:'var(--s7)', fontFeatureSettings:'"ss03"' }}>Send us a Message</div>

                {submitted && (
                  <div className="alert alert-success">✓ Message sent! Our team will get back to you within 24 hours.</div>
                )}

                {/* Enquiry type */}
                <div className="form-group">
                  <label className="form-label">Enquiry Type</label>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'var(--s3)', marginBottom:'var(--s5)' }}>
                    {enquiryTypes.map(t => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setEnquiry(t)}
                        style={{ background: enquiry===t ? 'rgba(54,244,164,0.06)' : 'transparent', border:`1px solid ${enquiry===t ? 'var(--neon-green)' : 'var(--border-dark)'}`, color: enquiry===t ? 'var(--neon-green)' : 'var(--muted)', borderRadius:9999, padding:'6px 16px', fontSize:13, cursor:'pointer', transition:'all 200ms ease', fontFamily:'var(--font-body)' }}
                      >{t}</button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" name="name" className="form-input" placeholder="Rafiqul Islam" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" className="form-input" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone <span style={{ color:'var(--shade-50)', fontWeight:400 }}>(optional)</span></label>
                    <input type="tel" name="phone" className="form-input" placeholder="+880 1X XX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" name="subject" className="form-input" placeholder="Private dining for 20 guests" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea" placeholder="Tell us more about your enquiry..." required style={{ minHeight:160 }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px 24px', fontSize:16 }}>
                    Send Message →
                  </button>
                </form>
              </div>

              {/* FAQ */}
              <div>
                <div style={{ fontSize:13, color:'var(--neon-green)', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:500, marginBottom:'var(--s5)' }}>Frequently Asked</div>
                {faqs.map(f => (
                  <div key={f.q} style={{ borderBottom:'1px solid var(--border-dark)', padding:'var(--s5) 0' }}>
                    <div style={{ fontSize:16, fontWeight:500, color:'var(--white)', marginBottom:'var(--s3)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      {f.q} <span style={{ color:'var(--neon-green)', fontSize:20, fontWeight:300 }}>+</span>
                    </div>
                    <div style={{ fontSize:15, color:'var(--muted)', lineHeight:1.6 }}>{f.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div style={{ position:'sticky', top:100 }}>

              {/* Find us */}
              <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'var(--s7)', boxShadow:'var(--shadow-card)', marginBottom:'var(--s5)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:360, color:'var(--white)', marginBottom:'var(--s5)', paddingBottom:'var(--s4)', borderBottom:'1px solid var(--border-dark)', fontFeatureSettings:'"ss03"' }}>Find Us</div>
                {[
                  { icon:'📍', label:'Address', val:'Main Road, Moulvibazar\nSylhet Division, Bangladesh', multi:true },
                  { icon:'📞', label:'Phone', val:'+880 170 000 0000', href:'tel:+8801700000000' },
                  { icon:'✉️', label:'Email', val:'hello@falaq.com.bd', href:'mailto:hello@falaq.com.bd' },
                  { icon:'🎪', label:'Private Events', val:'events@falaq.com.bd', href:'mailto:events@falaq.com.bd' },
                ].map(item => (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-info-value">{item.val}</a>
                      ) : item.multi ? (
                        <div className="contact-info-value" style={{ whiteSpace:'pre-line' }}>{item.val}</div>
                      ) : (
                        <div className="contact-info-value">{item.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'var(--s7)', boxShadow:'var(--shadow-card)', marginBottom:'var(--s5)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:360, color:'var(--white)', marginBottom:'var(--s5)', paddingBottom:'var(--s4)', borderBottom:'1px solid var(--border-dark)', fontFeatureSettings:'"ss03"' }}>Opening Hours</div>
                {hours.map(h => (
                  <div key={h.day} className="hours-row">
                    <div className="hours-day">{h.day}</div>
                    {h.closed ? <div className="hours-closed">Closed</div> : <div className="hours-time">{h.val}</div>}
                  </div>
                ))}
                <div style={{ marginTop:'var(--s4)', fontSize:13, color:'var(--shade-50)', lineHeight:1.5 }}>Kitchen closes 45 minutes before closing time.</div>
              </div>

              {/* Map */}
              <div style={{ width:'100%', height:260, background:'var(--forest)', border:'1px solid var(--border-dark)', borderRadius:12, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'var(--s3)', color:'var(--muted)', fontSize:14, position:'relative', overflow:'hidden', marginBottom:'var(--s5)' }}>
                <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 50% at 50% 50%,rgba(54,244,164,0.04) 0%,transparent 70%)' }} />
                <span style={{ fontSize:40 }}>📍</span>
                <div style={{ fontWeight:500, color:'var(--white)' }}>Moulvibazar, Sylhet</div>
                <div>Main Road</div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ marginTop:12, padding:'8px 20px', fontSize:13 }}>Open in Maps ↗</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width:1024px) { .contact-layout { grid-template-columns:1fr !important; gap:48px !important; } }
      `}</style>
    </>
  );
}
