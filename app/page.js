import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'FALAQ — Fine Dining, Moulvibazar' };

const features = [
  { icon: '🌿', title: 'Seasonal & Local', desc: "Every ingredient sourced from local farms, with the menu changing each season to reflect what's at its peak." },
  { icon: '🔥', title: 'Live Fire Cooking', desc: 'Our open kitchen features a custom-built charcoal hearth. Watch your food prepared over live fire.' },
  { icon: '🍷', title: 'Curated Pairings', desc: 'Our sommelier personally selects each pairing — from imported wines to bespoke mocktails for every dish.' },
  { icon: '📦', title: 'Order via Duare', desc: "Can't make it in? Order our signature dishes delivered to your door through Duare — same quality, at home." },
  { icon: '🎂', title: 'Private Events', desc: 'Host your celebration in our private dining room — birthdays, corporate dinners, intimate gatherings.' },
  { icon: '⭐', title: 'Award-Winning Team', desc: 'Our chef and team have been recognized by Sylhet Culinary Awards three consecutive years.' },
];

const testimonials = [
  { stars: '★★★★★', text: '"The Charcoal-Grilled Hilsa is the best fish dish I\'ve ever had. The smoky flavour and mustard marinade are extraordinary. FALAQ has ruined every other restaurant for me."', name: 'Rafiqul Islam', meta: 'Dined in-restaurant · March 2026' },
  { stars: '★★★★★', text: '"Ordered the lamb rack through Duare and I couldn\'t believe the quality. Still piping hot, beautifully presented. This is how delivery should be done."', name: 'Nusrat Jahan', meta: 'Ordered via Duare · February 2026' },
  { stars: '★★★★★', text: '"We hosted our anniversary dinner in the private room. The team was exceptional — attentive and thoughtful. The custom tasting menu was a journey."', name: 'Karim & Sadia', meta: 'Private dining · January 2026' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', background:'var(--void)' }}>
        <Image src="/falaq-hero.jpeg" alt="FALAQ restaurant hero" fill style={{ objectFit:'cover', objectPosition:'center' }} priority />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)', pointerEvents:'none' }} />
        <div className="container" style={{ width:'100%' }}>
          <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'120px 0 80px' }}>

            <div className="hero-badge fade-up">Now Open — Moulvibazar&apos;s Premier Fine Dining</div>

            <h1 className="fade-up fade-up-1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(48px,8vw,96px)', fontWeight:330, lineHeight:1, color:'var(--white)', letterSpacing:'-0.01em', fontFeatureSettings:'"ss03"', marginBottom:'var(--s7)', maxWidth:900, marginLeft:'auto', marginRight:'auto' }}>
              Where Every Dish Tells<br /><em style={{ fontStyle:'italic', fontWeight:330, color:'var(--muted)' }}>a Story</em>
            </h1>

            <p className="fade-up fade-up-2" style={{ fontSize:20, fontWeight:500, color:'var(--muted)', maxWidth:520, margin:'0 auto var(--s9)', lineHeight:1.5 }}>
              Contemporary South Asian cuisine crafted with seasonal ingredients and modern technique. An experience unlike any other.
            </p>

            <div className="fade-up fade-up-3" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'var(--s4)', flexWrap:'wrap' }}>
              <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-primary">Order on Duare ↗</a>
              <Link href="/menu" className="btn-ghost">Explore Menu</Link>
            </div>

            {/* Dish strip */}
            <div className="fade-up fade-up-4" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, maxWidth:900, margin:'60px auto 0', borderRadius:16, overflow:'hidden', border:'1px solid var(--border-dark)', boxShadow:'var(--shadow-high)' }}>
              {['🦐','🥩','🍮'].map(e => (
                <div key={e} style={{ aspectRatio:'4/3', background:'var(--forest)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:52 }}>{e}</div>
              ))}
            </div>

            <div className="hero-scroll">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              Scroll
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark-forest">
        <div className="container">
          <div className="stats-row">
            {[['12+','Years of culinary excellence'],['50K+','Happy guests served'],['4.9','Average guest rating'],['3×','Award-winning chef team']].map(([n,l]) => (
              <div className="stat-block" key={l}>
                <div className="stat-number">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <div className="mb-10">
            <span className="section-label">Signature Dishes</span>
            <h2 className="section-title">Crafted to Perfection</h2>
            <p className="section-subtitle">Each plate is a composition — seasonal produce, heritage techniques, and bold imagination.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:'var(--s5)' }} className="featured-row">
            {/* Hero dish */}
            <div style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:16, overflow:'hidden', boxShadow:'var(--shadow-card)', display:'flex', flexDirection:'column' }}>
              <div style={{ aspectRatio:'3/2', background:'var(--forest)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:72, position:'relative' }}>
                <span style={{ position:'absolute', top:16, left:16, background:'var(--neon-green)', color:'var(--void)', borderRadius:9999, padding:'4px 12px', fontSize:12, fontWeight:500, zIndex:1 }}>Chef&apos;s Choice</span>
                🐟
              </div>
              <div className="food-body">
                <div className="food-category">Signature Main</div>
                <div className="food-name" style={{ fontSize:24 }}>Charcoal-Grilled Hilsa</div>
                <div className="food-desc">Mustard-marinated Hilsa over live coals, turmeric rice, banana blossom salad, smoked tomato chutney.</div>
                <div className="food-footer">
                  <div className="food-price">৳ 1,850</div>
                  <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="food-order-btn">Order ↗</a>
                </div>
              </div>
            </div>
            {/* Side cards */}
            {[{ e:'🥩', cat:'Signature Main', name:'Black Cardamom Lamb Rack', desc:'Slow-braised lamb rack, cardamom jus, saffron potato fondant.', price:'৳ 2,200' },
              { e:'🍮', cat:'Dessert', name:'Cardamom Crème Brûlée', desc:'Green cardamom custard, caramelised sugar crust, rose petal cream.', price:'৳ 650' }
            ].map(d => (
              <div className="food-card" key={d.name}>
                <div className="food-img-placeholder">{d.e}</div>
                <div className="food-body">
                  <div className="food-category">{d.cat}</div>
                  <div className="food-name">{d.name}</div>
                  <div className="food-desc">{d.desc}</div>
                  <div className="food-footer">
                    <div className="food-price">{d.price}</div>
                    <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="food-order-btn">Order ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop:'var(--s9)' }}>
            <Link href="/menu" className="btn-ghost">View Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-dark-forest">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="about-split">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Kitchen Born from Obsession</h2>
              <p style={{ color:'var(--muted)', fontSize:18, lineHeight:1.6, marginBottom:'var(--s5)' }}>
                FALAQ was founded with a singular vision: to reimagine South Asian cuisine through the lens of modern fine dining, without sacrificing the soul of the original flavours.
              </p>
              <p style={{ color:'var(--muted)', fontSize:17, lineHeight:1.6, marginBottom:'var(--s9)' }}>
                Every dish is the result of relentless experimentation — combining locally sourced seasonal ingredients with bold flavour profiles that define the culinary heritage of Moulvibazar.
              </p>
              <div style={{ display:'flex', gap:'var(--s4)', flexWrap:'wrap' }}>
                <Link href="/reservation" className="btn-primary">Book a Table</Link>
                <Link href="/menu" className="btn-ghost">Our Menu</Link>
              </div>
            </div>
            <div style={{ background:'var(--forest)', border:'1px solid var(--border-dark)', borderRadius:20, aspectRatio:'4/5', display:'flex', alignItems:'center', justifyContent:'center', fontSize:80, position:'relative', overflow:'hidden', boxShadow:'var(--shadow-card)' }}>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 30%,rgba(54,244,164,0.06) 0%,transparent 60%)' }} />
              👨‍🍳
              <div style={{ position:'absolute', bottom:24, left:24, right:24, background:'rgba(0,0,0,0.7)', backdropFilter:'blur(8px)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontSize:14, color:'var(--white)', fontWeight:500 }}>Head Chef</div>
                  <div style={{ fontSize:12, color:'var(--neon-green)' }}>FALAQ Kitchen</div>
                </div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:750, color:'var(--white)' }}>12yr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-label">The FALAQ Experience</span>
            <h2 className="section-title">Beyond the Plate</h2>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-forest">
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-label">Guest Reviews</span>
            <h2 className="section-title">What People Say</h2>
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">{t.stars}</div>
                <div className="testimonial-text">{t.text}</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">👤</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-meta">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <h2>Hungry Right Now?</h2>
          <p>Order your favourite FALAQ dishes delivered fresh to your door through Duare.</p>
          <div className="cta-band-actions">
            <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-accent">Order on Duare.net ↗</a>
            <Link href="/reservation" className="btn-ghost">Book a Table Instead</Link>
          </div>
        </div>
      </section>

    </>
  );
}
