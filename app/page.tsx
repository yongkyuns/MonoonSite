import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import {
  PhasePortrait,
  CoordinateField,
  ConceptSurface,
  SignalStudy,
} from '@/components/scientific-figures';

const capabilities = [
  {
    number: '01',
    title: 'Sense & estimate',
    detail: 'Find the state behind the signals.',
    text: 'Sensor fusion, inertial navigation, and state estimation. Connecting IMU and GNSS measurements to useful models of motion.',
  },
  {
    number: '02',
    title: 'Model & control',
    detail: 'Connect the model to the machine.',
    text: 'Dynamic systems, control algorithms, and simulation. Software grounded in the constraints of automotive and embedded engineering.',
  },
  {
    number: '03',
    title: 'Visualize & explain',
    detail: 'Make the behavior visible.',
    text: 'Data visualization, interactive tools, and educational software. Helping people inspect results, test ideas, and understand complex systems.',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="MonoonAI home">
          <span className="brand-symbol" aria-hidden="true">
            m.
          </span>
          Monoon<span className="brand-ai">AI</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#concepts">Ideas & approach</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="main">
        <div className="hero-shell">
          <CoordinateField />
          <section className="hero wrap" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="small-line" /> SOFTWARE & SYSTEMS ENGINEERING
              </p>
              <h1 id="hero-title">
                Software for
                <br />
                understanding
                <br />
                <span>complex systems.</span>
              </h1>
              <p className="hero-description">
                We connect sensing, simulation, and visualization to help people
                build, explore, and understand the systems around them.
              </p>
              <a className="primary-link" href="#concepts">
                Explore the ideas <ArrowDown size={18} />
              </a>
              <p className="hero-footnote">
                Grounded in automotive & embedded engineering.
                <br />
                Built with room to explore.
              </p>
            </div>
            <PhasePortrait />
          </section>
        </div>
        <div className="discipline-strip">
          <div className="wrap">
            <span>SENSOR FUSION</span>
            <span>CONTROLS</span>
            <span>SIMULATION</span>
            <span>VISUALIZATION</span>
            <span>ROBOTICS</span>
          </div>
        </div>
        <section
          className="expertise wrap section"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="section-intro">
            <p className="eyebrow">01 / OUR EXPERTISE</p>
            <div>
              <h2 id="expertise-title">
                Rigorous engineering.
                <br />
                <span>A wider field of view.</span>
              </h2>
              <p>
                We provide professional software and systems development
                services, from the mathematics beneath an algorithm to the tools
                that make its behavior clear.
              </p>
            </div>
          </div>
          <div className="capabilities">
            {capabilities.map((item) => (
              <article key={item.number}>
                <div className="capability-top">
                  <span className="index">/{item.number}</span>
                  <span className="coordinate-label">
                    {
                      ['OBSERVE', 'EXPERIMENT', 'UNDERSTAND'][
                        Number(item.number) - 1
                      ]
                    }
                  </span>
                </div>
                <SignalStudy kind={Number(item.number) - 1} />
                <h3>{item.title}</h3>
                <p className="capability-detail">{item.detail}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="concepts-section"
          id="concepts"
          aria-labelledby="concepts-title"
        >
          <div className="wrap section">
            <div className="concepts-heading">
              <div>
                <p className="eyebrow">02 / IDEAS & APPROACH</p>
                <h2 id="concepts-title">
                  A space between
                  <br />
                  <span>theory and possibility.</span>
                </h2>
              </div>
              <p>
                Mathematical foundations. Physical intuition.
                <br />
                Software that connects the two.
              </p>
            </div>
            <div className="concepts-layout">
              <ConceptSurface />
              <div className="concept-list">
                <article>
                  <span className="index">01 / SIMULATION & MODELLING</span>
                  <h3>Explore before you build.</h3>
                  <p>
                    Turn physical behavior into models you can question.
                    Simulate motion, experiment with control, and explore how a
                    system responds when its conditions change.
                  </p>
                </article>
                <article>
                  <span className="index">02 / DATA & VISUAL EXPLANATION</span>
                  <h3>See what the numbers mean.</h3>
                  <p>
                    Give signals, uncertainty, and abstract relationships a
                    visual form. Use geometry, animation, and data visualization
                    to make patterns and behavior easier to reason about.
                  </p>
                </article>
                <article>
                  <span className="index">03 / ROBOTICS & LEARNING</span>
                  <h3>Make understanding hands-on.</h3>
                  <p>
                    Connect algorithms to things that move. Interactive
                    experiments make sensing, planning, and control tangible—for
                    engineering, education, and the next question worth
                    exploring.
                  </p>
                </article>
              </div>
            </div>
            <div className="concepts-footer">
              <span>OBSERVE</span>
              <i aria-hidden="true" />
              <span>MODEL</span>
              <i aria-hidden="true" />
              <span>EXPERIMENT</span>
              <i aria-hidden="true" />
              <span>UNDERSTAND</span>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact wrap section"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">03 / WORK WITH US</p>
            <h2 id="contact-title">
              Let’s work through
              <br />
              the interesting problems.
            </h2>
            <p>
              Have a system to develop, an idea to test,
              <br />
              or something complex to make clear?
            </p>
          </div>
          <a className="contact-link" href="mailto:yongkyun.shin@monoon.ai">
            <MoveUpRight size={35} strokeWidth={1.25} />
            <span>Start a conversation</span>
            <span className="email">yongkyun.shin@monoon.ai</span>
          </a>
        </section>
      </main>
      <footer className="wrap site-footer">
        <a className="wordmark" href="#">
          Monoon<span className="brand-ai">AI</span>
        </a>
        <span>Software. Systems. Understanding.</span>
        <span>© {new Date().getUTCFullYear()} MonoonAI</span>
      </footer>
    </>
  );
}
