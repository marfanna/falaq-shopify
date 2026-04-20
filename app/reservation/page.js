'use client';
import { useState } from 'react';

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [occasion, setOccasion] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setOccasion('');
  };

  const occasions = [
    { val:'regular', emoji:'🍽️', label:'Regular Dining' },
    { val:'birthday', emoji:'🎂', label:'Birthday' },
    { val:'anniversary', emoji:'💍', label:'Anniversary' },
    { val:'business', emoji:'💼', label:'Business' },
    { val:'date', emoji:'❤️', label:'Date Night' },
    { val:'other', emoji:'✨', label:'Other' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">Reservations</div>
          <h1 className="page-hero-title">Reserve Your<br />Table</h1>
          <p className="page-hero-sub">Secure your place at FALAQ. We&apos;ll confirm your reservation within 2 hours by email or phone.</p>
        </div>
      </div>

      <section className="section section-dark-forest">
        <div className="container">

          {/* Alt banner */}
          <div style={{ background:'var(--forest)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'var(--s5) var(--s7)', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'var(--s5)', flexWrap:'wrap', marginBottom:'var(--s10)' }}>
            <div>
              <div style={{ fontSize:15, color:'var(--white)', fontWeight:500, marginBottom:2 }}>Can&apos;t make it in? Order on Duare instead.</div>
              <div style={{ fontSize:14, color:'var(--muted)' }}>Get our full menu delivered to your door, fast.</div>
            </div>
            <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-accent">Order on Duare ↗</a>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap:80, alignItems:'start' }} className="res-layout">

            {/* Form */}
            <div>
              {submitted && (
                <div className="alert alert-success">
                  ✓ Your reservation request has been received! We&apos;ll confirm via email within 2 hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div style={{ fontSize:12, fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--neon-green)', marginBottom:'var(--s5)', fontFeatureSettings:'"ss03"' }}>Date &amp; Time</div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input type="date" name="date" className="form-input" min={today} defaultValue={today} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Time</label>
                    <select name="time" className="form-select" required defaultValue="">
                      <option value="" disabled>Select time</option>
                      <optgroup label="Lunch">
                        {['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM'].map(t=><option key={t}>{t}</option>)}
                      </optgroup>
                      <optgroup label="Dinner">
                        {['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'].map(t=><option key={t}>{t}</option>)}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Party Size</label>
                  <select name="guests" className="form-select" required defaultValue="">
                    <option value="" disabled>Number of guests</option>
                    {['1 guest','2 guests','3 guests','4 guests','5 guests','6 guests','7 guests','8 guests','Larger group (8+) — contact us'].map(g=><option key={g}>{g}</option>)}
                  </select>
                </div>

                <div style={{ fontSize:12, fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--neon-green)', margin:'var(--s8) 0 var(--s5)', fontFeatureSettings:'"ss03"' }}>Occasion</div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--s3)', marginBottom:'var(--s5)' }}>
                  {occasions.map(o => (
                    <button
                      type="button"
                      key={o.val}
                      onClick={() => setOccasion(o.val)}
                      style={{ background: occasion===o.val ? 'rgba(54,244,164,0.06)' : 'transparent', border: `1px solid ${occasion===o.val ? 'var(--neon-green)' : 'var(--border-dark)'}`, color: occasion===o.val ? 'var(--neon-green)' : 'var(--muted)', borderRadius:8, padding:'var(--s3)', textAlign:'center', cursor:'pointer', fontSize:13, transition:'all 200ms ease', display:'flex', flexDirection:'column', alignItems:'center', gap:4, fontFamily:'var(--font-body)' }}
                    >
                      <span style={{ fontSize:20 }}>{o.emoji}</span>
                      {o.label}
                    </button>
                  ))}
                </div>

                <div style={{ fontSize:12, fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--neon-green)', margin:'var(--s8) 0 var(--s5)', fontFeatureSettings:'"ss03"' }}>Your Details</div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" name="first_name" className="form-input" placeholder="Rafiqul" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="last_name" className="form-input" placeholder="Islam" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-input" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" className="form-input" placeholder="+880 1X XX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Special Requests <span style={{ color:'var(--shade-50)', fontWeight:400 }}>(optional)</span></label>
                  <textarea name="requests" className="form-textarea" placeholder="Dietary requirements, allergies, seating preferences..." />
                </div>

                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px 24px', fontSize:16, marginTop:'var(--s4)' }}>
                  Confirm Reservation →
                </button>
                <div style={{ fontSize:13, color:'var(--shade-50)', marginTop:'var(--s4)', lineHeight:1.5 }}>
                  By reserving, you agree to our cancellation policy. Reservations held for 15 minutes past booking time.
                </div>

              </form>
            </div>

            {/* Sidebar */}
            <div style={{ position:'sticky', top:100 }}>
              <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:16, padding:'var(--s7)', boxShadow:'var(--shadow-card)', marginBottom:'var(--s5)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:360, color:'var(--white)', marginBottom:'var(--s5)', paddingBottom:'var(--s4)', borderBottom:'1px solid var(--border-dark)', fontFeatureSettings:'"ss03"' }}>What to Expect</div>
                {[['🕐','Lunch Service','12:00 – 2:30 PM'],['🌙','Dinner Service','6:00 – 10:00 PM'],['📅','Open','Tue – Sun'],['👥','Groups (8+)','Call ahead'],['👔','Dress Code','Smart casual']].map(([icon,label,val]) => (
                  <div key={label} style={{ display:'flex', alignItems:'center', gap:'var(--s3)', padding:'var(--s3) 0', borderBottom:'1px solid var(--border-dark)', fontSize:14 }}>
                    <span style={{ fontSize:18, width:24, textAlign:'center' }}>{icon}</span>
                    <span style={{ color:'var(--white)', fontWeight:500, flex:1 }}>{label}</span>
                    <span style={{ color:'var(--neon-green)', fontSize:13 }}>{val}</span>
                  </div>
                ))}
              </div>

              <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:16, padding:'var(--s7)', boxShadow:'var(--shadow-card)', marginBottom:'var(--s5)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:360, color:'var(--white)', marginBottom:'var(--s5)', paddingBottom:'var(--s4)', borderBottom:'1px solid var(--border-dark)', fontFeatureSettings:'"ss03"' }}>Cancellation Policy</div>
                {['Free cancellation up to 24 hours before your reservation time.','Same-day cancellations may incur a ৳500 per person fee.','No-shows will be charged 50% of the estimated bill.'].map(p => (
                  <div key={p} style={{ display:'flex', gap:'var(--s3)', marginBottom:'var(--s4)', fontSize:14, color:'var(--muted)', lineHeight:1.5 }}>
                    <span style={{ color:'var(--neon-green)', flexShrink:0 }}>✓</span>{p}
                  </div>
                ))}
              </div>

              <div style={{ background:'var(--forest)', border:'1px solid rgba(54,244,164,0.2)', borderRadius:16, padding:'var(--s7)', boxShadow:'var(--shadow-card)' }}>
                <div style={{ fontSize:13, color:'var(--neon-green)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'var(--s3)', fontWeight:500 }}>Prefer Delivery?</div>
                <div style={{ fontSize:15, color:'var(--white)', marginBottom:'var(--s4)', lineHeight:1.5 }}>Order the same dishes from our kitchen through Duare, delivered to you.</div>
                <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ width:'100%', justifyContent:'center' }}>Order on Duare ↗</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width:1024px) { .res-layout { grid-template-columns:1fr !important; gap:48px !important; } }
      `}</style>
    </>
  );
}
