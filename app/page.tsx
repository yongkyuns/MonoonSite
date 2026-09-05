import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import {
  NavigationStudy,
  CoordinateField,
  VehicleDynamicsStudy,
  SignalStudy,
} from '@/components/scientific-figures';

const capabilities = [
  {
    number: '01',
    title: 'Explore & frame',
    detail: 'Find a better way into the problem.',
    text: 'Question assumptions, connect ideas across disciplines, and turn open-ended challenges into useful experiments. Models and prototypes help us discover what is worth building.',
  },
  {
    number: '02',
    title: 'Engineer & communicate',
    detail: 'Make the solution—and the reasoning—clear.',
    text: 'Develop algorithms, architecture, and software through simulation, testing, and iteration. Use visualization and technical explanation to make decisions understandable and the work reproducible.',
  },
  {
    number: '03',
    title: 'Deliver & scale',
    detail: 'Carry the idea into production.',
    text: 'Translate prototypes into maintainable systems. Address integration, performance, validation, and deployment so the solution can operate reliably at production scale.',
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
          Monoon<span className="brand-ai">AI</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#expertise">What we do</a>
          <a href="#concepts">Our approach</a>
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
                <span className="small-line" /> CREATIVE THINKING. ENGINEERING
                RIGOR.
              </p>
              <h1 id="hero-title">
                Creative ideas.
                <br />
                Clear engineering.
                <br />
                <span>Built for production.</span>
              </h1>
              <p className="hero-description">
                We solve complex engineering problems and make the thinking
                behind them clear. From the first idea through development to
                execution at scale, we connect creative exploration with
                practical delivery.
              </p>
              <a className="primary-link" href="#concepts">
                Discover our approach <ArrowDown size={18} />
              </a>
              <p className="hero-footnote">
                Grounded in automotive & embedded engineering.
                <br />
                From first principles to production.
              </p>
            </div>
            <NavigationStudy />
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
            <p className="eyebrow">01 / FROM IDEA TO EXECUTION</p>
            <div>
              <h2 id="expertise-title">
                From the first question.
                <br />
                <span>To production at scale.</span>
              </h2>
              <p>
                We provide software and systems engineering services across the
                development journey. Creative problem-solving shapes the
                direction; a disciplined engineering process turns it into
                something that works. Clear communication connects every step.
              </p>
            </div>
          </div>
          <div className="capabilities">
            {capabilities.map((item) => (
              <article key={item.number}>
                <div className="capability-top">
                  <span className="index">/{item.number}</span>
                  <span className="coordinate-label">
                    {['IDEA', 'PROCESS', 'PRODUCTION'][Number(item.number) - 1]}
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
                <p className="eyebrow">02 / HOW WE THINK & BUILD</p>
                <h2 id="concepts-title">
                  Good engineering makes
                  <br />
                  <span>its thinking visible.</span>
                </h2>
              </div>
              <p>
                Better questions. Shared understanding.
                <br />
                Ideas that hold up in practice.
              </p>
            </div>
            <div className="concepts-layout">
              <VehicleDynamicsStudy />
              <div className="concept-list">
                <article>
                  <span className="index">01 / CREATIVE PROBLEM-SOLVING</span>
                  <h3>Find the possibilities in the constraints.</h3>
                  <p>
                    A difficult engineering problem rarely arrives with a clear
                    path forward. We combine mathematical modelling, physical
                    intuition, and simulation to explore alternatives and test
                    assumptions before committing to a solution.
                  </p>
                </article>
                <article>
                  <span className="index">
                    02 / EFFECTIVE TECHNICAL COMMUNICATION
                  </span>
                  <h3>Make the reasoning something people can see.</h3>
                  <p>
                    An idea becomes more useful when others can understand and
                    challenge it. Data visualization, interactive
                    demonstrations, and clear documentation make complex
                    behavior, tradeoffs, and evidence accessible to the people
                    making decisions.
                  </p>
                </article>
                <article>
                  <span className="index">
                    03 / PRODUCTION & CONTINUOUS LEARNING
                  </span>
                  <h3>Keep the intent intact through execution.</h3>
                  <p>
                    The engineering process must connect an elegant concept to
                    the realities of deployment. We bring implementation,
                    validation, and operational feedback into the same
                    conversation, so systems can evolve as demands and scale
                    grow.
                  </p>
                </article>
              </div>
            </div>
            <div className="concepts-footer">
              <span>IDEA</span>
              <i aria-hidden="true" />
              <span>ENGINEER</span>
              <i aria-hidden="true" />
              <span>COMMUNICATE</span>
              <i aria-hidden="true" />
              <span>DELIVER</span>
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
              Bring us the problem.
              <br />
              Let’s build what comes next.
            </h2>
            <p>
              An idea to explore, a challenge to explain,
              <br />
              or a system ready for its next stage?
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
        <span>Imagine. Engineer. Deliver.</span>
        <span>© {new Date().getUTCFullYear()} MonoonAI</span>
      </footer>
    </>
  );
}
