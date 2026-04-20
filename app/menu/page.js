'use client';
import { useState } from 'react';

export default function MenuPage() {
  const [active, setActive] = useState('all');

  const starters = [
    { e:'🦐', cat:'Starter', name:'Spiced Prawn Tempura', desc:'Tiger prawns in saffron tempura batter, tamarind aioli, micro herbs, yuzu gel.', price:'৳ 850' },
    { e:'🫕', cat:'Starter', name:'Smoked Lamb Kebab', desc:'Hand-minced lamb, charred green chilli, pomegranate raita, laccha paratha.', price:'৳ 950' },
    { e:'🍄', cat:'Starter · Vegetarian', name:'Truffle Mushroom Toast', desc:'Wild mushroom duxelles on charcoal sourdough, black truffle shaving, whipped ricotta.', price:'৳ 720' },
    { e:'🍵', cat:'Starter · Vegetarian', name:'Saffron Shorba', desc:'Persian-style golden broth with saffron, roasted tomato, cream, and crispy shallots.', price:'৳ 580' },
    { e:'🦑', cat:'Starter', name:'Crispy Calamari', desc:'Lemon-dusted calamari rings, smoked paprika aioli, pickled cucumber ribbons.', price:'৳ 780' },
    { e:'🥗', cat:'Starter · Vegetarian', name:'Heritage Tomato Salad', desc:'Heirloom tomatoes, whipped burrata, basil oil, aged balsamic, fleur de sel.', price:'৳ 650' },
  ];
  const mains = [
    { e:'🐟', cat:'Signature · Seafood', name:'Charcoal-Grilled Hilsa', desc:'Mustard-marinated Hilsa over live coals, turmeric rice, banana blossom salad.', price:'৳ 1,850' },
    { e:'🥩', cat:'Signature · Meat', name:'Black Cardamom Lamb Rack', desc:'Slow-braised lamb rack, cardamom jus, saffron potato fondant.', price:'৳ 2,200' },
    { e:'🥩', cat:'Signature · Meat', name:'Truffle Beef Tenderloin', desc:'300g wagyu tenderloin, black truffle butter, pomme purée, asparagus, red wine reduction.', price:'৳ 3,200' },
    { e:'🍚', cat:'Vegetarian · Main', name:'Wild Mushroom Biryani', desc:'Dum-cooked aged basmati with porcini, oyster, and truffle mushrooms; saffron milk.', price:'৳ 1,200' },
    { e:'🦞', cat:'Seafood · Main', name:'Lobster Thermidor', desc:'Half Bengal lobster in classic Thermidor sauce, gruyère gratin, sautéed spinach.', price:'৳ 3,800' },
    { e:'🍝', cat:'Vegetarian · Main', name:'Saffron Risotto', desc:'Milanese risotto with Parmigiano-Reggiano, osso buco gremolata, gold saffron threads.', price:'৳ 1,450' },
  ];
  const desserts = [
    { e:'🍮', cat:'Dessert', name:'Cardamom Crème Brûlée', desc:'Green cardamom custard, caramelised sugar crust, rose petal cream, pistachio crumb.', price:'৳ 650' },
    { e:'🍚', cat:'Dessert · Heritage', name:'Rose Petal Kheer', desc:'Slow-cooked rice pudding, rose water, dried rose petals, saffron, crushed cashews.', price:'৳ 580' },
    { e:'🍫', cat:'Dessert', name:'Dark Chocolate Fondant', desc:'Valrhona 72% fondant, molten centre, salted caramel, vanilla bean ice cream.', price:'৳ 720' },
    { e:'🍦', cat:'Dessert', name:'Mango Kulfi', desc:'House-made Langra mango kulfi, pistachio slivers, rosewater syrup, fresh mint.', price:'৳ 490' },
  ];
  const drinks = [
    { e:'🥃', cat:'Cocktail', name:'Saffron Old Fashioned', desc:'Aged scotch, saffron syrup, orange bitters, expressed orange peel.', price:'৳ 850' },
    { e:'🍸', cat:'Cocktail', name:'Rose Lychee Martini', desc:'Vodka, lychee liqueur, rose water, fresh lime.', price:'৳ 780' },
    { e:'🥤', cat:'Mocktail', name:'Charcoal Lemonade', desc:'Activated charcoal, fresh lemon, honey, sparkling water, edible flowers.', price:'৳ 380' },
    { e:'☕', cat:'Hot Drink', name:'Mint Kahwa', desc:'Kashmiri green tea, saffron, cinnamon, cardamom, fresh mint, crushed almonds.', price:'৳ 290' },
    { e:'🍷', cat:'Wine', name:'Aged Red Wine Selection', desc:"Ask your sommelier for today's curated wine list.", price:'From ৳ 1,200' },
    { e:'🫖', cat:'Mocktail', name:'House Virgin Sangria', desc:'Red grape juice, hibiscus syrup, seasonal fruit, sparkling water.', price:'৳ 420' },
  ];

  const allItems = [
    ...starters.map(i => ({ ...i, group:'starters' })),
    ...mains.map(i => ({ ...i, group:'mains' })),
    ...desserts.map(i => ({ ...i, group:'desserts' })),
    ...drinks.map(i => ({ ...i, group:'drinks' })),
  ];

  const visible = active === 'all' ? allItems : allItems.filter(i => i.group === active);

  const SectionHeading = ({ emoji, label }) => (
    <div style={{ fontFamily:'var(--font-display)', fontSize:36, fontWeight:330, color:'var(--white)', marginBottom:'var(--s5)', paddingBottom:'var(--s4)', borderBottom:'1px solid var(--border-dark)', display:'flex', alignItems:'center', gap:'var(--s4)', fontFeatureSettings:'"ss03"' }}>
      <span style={{ fontSize:28 }}>{emoji}</span> {label}
    </div>
  );

  const renderSection = (items, emoji, label, id) => {
    const list = active === 'all' ? items : items.filter(i => i.group === active || active === id.replace('#',''));
    if (list.length === 0) return null;
    return (
      <div id={id} style={{ marginBottom:80 }}>
        <SectionHeading emoji={emoji} label={label} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--s5)' }} className="menu-grid">
          {items.map(d => (
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
      </div>
    );
  };

  const filters = ['all','starters','mains','desserts','drinks'];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-label">Our Menu</div>
          <h1 className="page-hero-title">Seasonal. Bold.<br />Unforgettable.</h1>
          <p className="page-hero-sub">Crafted with locally sourced ingredients and a passion for South Asian culinary tradition reimagined for the modern palate.</p>
        </div>
      </div>

      <section className="section section-dark-forest">
        <div className="container">

          {/* Order banner */}
          <div style={{ background:'var(--forest)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'var(--s5) var(--s7)', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'var(--s5)', flexWrap:'wrap', marginBottom:'var(--s10)' }}>
            <div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:360, color:'var(--white)', marginBottom:4, fontFeatureSettings:'"ss03"' }}>Want delivery? Order via Duare</div>
              <div style={{ fontSize:15, color:'var(--muted)' }}>Get your favourite FALAQ dishes delivered fresh to your door — same kitchen, same quality.</div>
            </div>
            <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-accent">Order on Duare.net ↗</a>
          </div>

          {/* Filters */}
          <div className="menu-filters">
            {filters.map(f => (
              <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
                {f.charAt(0).toUpperCase() + f.slice(1)} {f === 'all' ? 'Dishes' : ''}
              </button>
            ))}
          </div>

          {/* Sections */}
          {(active === 'all' || active === 'starters') && renderSection(starters, '🍽️', 'Starters', 'starters')}
          {(active === 'all' || active === 'mains')    && renderSection(mains,    '🔥', 'Mains',    'mains')}
          {(active === 'all' || active === 'desserts') && renderSection(desserts, '🍮', 'Desserts', 'desserts')}
          {(active === 'all' || active === 'drinks')   && (
            <div id="drinks">
              <SectionHeading emoji="🍹" label="Drinks" />
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--s4)' }} className="drinks-grid">
                {drinks.map(d => (
                  <div key={d.name} style={{ background:'var(--deep-teal)', border:'1px solid var(--border-dark)', borderRadius:12, padding:'var(--s5)', boxShadow:'var(--shadow-card)', display:'flex', alignItems:'flex-start', gap:'var(--s4)' }}>
                    <div style={{ width:52, height:52, background:'var(--forest)', border:'1px solid var(--border-dark)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, flexShrink:0 }}>{d.e}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:360, color:'var(--white)', marginBottom:2, fontFeatureSettings:'"ss03"' }}>{d.name}</div>
                      <div style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5, marginBottom:'var(--s3)' }}>{d.desc}</div>
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                        <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:500, color:'var(--white)', fontFeatureSettings:'"ss03"' }}>{d.price}</div>
                        <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="food-order-btn" style={{ fontSize:13, padding:'6px 14px' }}>Order ↗</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <h2>Order for Delivery</h2>
          <p>Place your order through Duare and enjoy FALAQ at home. Fast, fresh, and packaged with care.</p>
          <div className="cta-band-actions">
            <a href="https://duare.net" target="_blank" rel="noopener noreferrer" className="btn-accent">Open Duare.net ↗</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width:1024px) { .menu-grid { grid-template-columns:repeat(2,1fr) !important; } .drinks-grid { grid-template-columns:1fr !important; } }
        @media (max-width:640px)  { .menu-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}
