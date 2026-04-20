import './App.css'

const projects = [
  {
    name: 'CrossFit Pulse',
    type: 'Gym Website Remake',
    desc: 'High-energy site with pricing, testimonials, and strong membership CTA.',
    url: 'https://vioka34.github.io/crossfit-pulse-react/'
  },
  {
    name: 'Plumbing Rite',
    type: 'Service Business Site',
    desc: 'Trust-focused design with emergency messaging and lead capture sections.',
    url: 'https://vioka34.github.io/plumbing-rite-react/'
  },
  {
    name: 'Moonlight Coffee',
    type: 'Cafe Website',
    desc: 'Warm brand feel with menu flow and conversion-friendly mobile layout.',
    url: 'https://vioka34.github.io/moonlight-coffee-react/'
  }
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">BDdesigns</div>
        <a className="cta" href="#contact">Book a Free Audit</a>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Local Business Web Design</p>
          <h1>Websites that make your phone ring.</h1>
          <p className="sub">
            I build high-converting websites for local businesses — fast, mobile-first,
            and designed to turn visitors into booked calls.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#work">See Portfolio</a>
            <a className="btn ghost" href="#contact">Get Your Free Mockup</a>
          </div>
          <ul className="stats">
            <li><strong>24-48h</strong><span>First draft turnaround</span></li>
            <li><strong>Mobile-first</strong><span>Built for real customers</span></li>
            <li><strong>Local focus</strong><span>Trades, gyms, food, wellness</span></li>
          </ul>
        </section>

        <section id="work" className="work">
          <h2>Recent Work</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <p className="type">{p.type}</p>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href={p.url} target="_blank" rel="noreferrer">View Demo ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="process">
          <h2>How It Works</h2>
          <div className="steps">
            <div><span>01</span><h3>Quick Audit</h3><p>I review your current web presence and spot conversion leaks.</p></div>
            <div><span>02</span><h3>Custom Mockup</h3><p>You get a tailored homepage concept before committing.</p></div>
            <div><span>03</span><h3>Launch Fast</h3><p>Once approved, we ship your site and connect forms + domain.</p></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Let’s Build Yours Next</h2>
          <p>If your current site is outdated (or missing), I can build a better one this week.</p>
          <div className="contact-box">
            <a href="mailto:brandondillon.webdesign@gmail.com">brandondillon.webdesign@gmail.com</a>
            <span>•</span>
            <a href="tel:+16785551234">(678) 555-1234</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
