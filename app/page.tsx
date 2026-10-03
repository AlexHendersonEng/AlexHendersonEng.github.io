export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Alex Henderson, home">
          AH<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#focus">Areas of focus</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="home" aria-labelledby="intro-title">
          <p className="eyebrow">Aerospace software engineer</p>
          <h1 id="intro-title">
            Engineering ideas
            <br />
            into <span>flight.</span>
          </h1>
          <p className="hero-copy">
            I work across modelling, simulation, control and machine learning
            in the aerospace engineering space.
          </p>
          <a className="text-link" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-index" aria-hidden="true">
            <span>Independent thinking</span>
            <span>Engineering in practice</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">A place to experiment.</h2>
              <p>
                My main development repository brings together the tools and
                ideas I explore across aerospace software.
              </p>
            </div>

            <a
              className="project-card"
              href="https://github.com/AlexHendersonEng/main"
              target="_blank"
              rel="noreferrer"
              aria-label="Main development repository on GitHub (opens in a new tab)"
            >
              <div className="project-mark" aria-hidden="true">
                <span>01</span>
                <span>↗</span>
              </div>
              <div className="project-content">
                <p className="project-type">Open source · C++</p>
                <h3>Main development repository</h3>
                <p>
                  A growing monorepo for modelling, simulation, control and
                  machine learning in aerospace engineering.
                </p>
                <ul className="tag-list" aria-label="Areas covered">
                  <li>Modelling</li>
                  <li>Simulation</li>
                  <li>Control</li>
                  <li>Machine learning</li>
                </ul>
              </div>
            </a>
          </div>
        </section>

        <section className="focus-section section-shell" id="focus" aria-labelledby="focus-title">
          <div className="section-heading">
            <p className="eyebrow">Areas of focus</p>
            <h2 id="focus-title">Curiosity, with a systems view.</h2>
          </div>
          <ul className="focus-grid">
            <li>
              <span>01</span>
              <h3>Modelling</h3>
              <p>Turning complex engineering problems into useful representations.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Simulation</h3>
              <p>Exploring system behaviour through computational experiments.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Control</h3>
              <p>Connecting system understanding to purposeful behaviour.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Machine learning</h3>
              <p>Applying data-driven methods to aerospace engineering challenges.</p>
            </li>
          </ul>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-title">Let’s talk engineering.</h2>
            </div>
            <a
              className="contact-link"
              href="https://github.com/AlexHendersonEng"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Alex Henderson on GitHub (opens in a new tab)"
            >
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>Alex Henderson</span>
        <span>Aerospace software engineer</span>
      </footer>
    </>
  );
}
