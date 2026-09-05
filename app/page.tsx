import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';

const projects = [
  { name: 'IMU / GNSS Fusion', area: 'Sensing & estimation', description: 'Vehicle navigation experiments connecting sensor fusion, recorded data, simulation, and visual diagnostics.', repo: 'imu_gnss_fusion', number: '01' },
  { name: 'RustRobotics', area: 'Robotics & education', description: 'Robotics algorithms and interactive simulations that make control, localization, and planning easier to explore.', repo: 'RustRobotics', number: '02' },
  { name: 'stack-algebra', area: 'Numerical foundations', description: 'Fixed-size linear algebra for Rust, with predictable storage for embedded systems and numerical software.', repo: 'stack-algebra', number: '03' },
];
const capabilities = [
  { number: '01', title: 'Sense & estimate', detail: 'Find the state behind the signals.', text: 'Sensor fusion, inertial navigation, and state estimation. Connecting IMU and GNSS measurements to useful models of motion.' },
  { number: '02', title: 'Model & control', detail: 'Connect the model to the machine.', text: 'Dynamic systems, control algorithms, and simulation. Software grounded in the constraints of automotive and embedded engineering.' },
  { number: '03', title: 'Visualize & explain', detail: 'Make the behavior visible.', text: 'Data visualization, interactive tools, and educational software. Helping people inspect results, test ideas, and understand complex systems.' },
];

/** An illustrative damped oscillator phase portrait, not recorded project data. */
function PhasePortrait() {
  const paths = Array.from({ length: 12 }, (_, i) => {
    const angle = i * Math.PI / 6;
    return Array.from({ length: 180 }, (_, step) => {
      const t = step / 22;
      const radius = 180 * Math.exp(-t * 0.27);
      const x = 320 + radius * Math.cos(t * 1.75 + angle);
      const velocity = radius * (-0.27 * Math.cos(t * 1.75 + angle) - 1.75 * Math.sin(t * 1.75 + angle));
      const y = 244 - velocity * 0.5;
      return `${step === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(' ');
  });
  return <figure className="phase-figure">
    <div className="figure-heading"><span><i className="status-dot" /> SYSTEM STUDY / 001</span><span>STATE SPACE</span></div>
    <svg className="phase-plot" viewBox="0 0 640 470" role="img" aria-labelledby="phase-title phase-description">
      <title id="phase-title">A system finding equilibrium</title>
      <desc id="phase-description">An illustrative phase portrait of a damped oscillator. Twelve trajectories spiral toward a common equilibrium.</desc>
      <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeOpacity="0.07" /></pattern></defs>
      <rect x="0" y="0" width="640" height="470" fill="url(#grid)" />
      <path d="M40 244H600 M320 25V445" stroke="#819494" strokeOpacity=".4" strokeDasharray="3 6" />
      {[50, 100, 150, 200].map(r => <ellipse key={r} cx="320" cy="244" rx={r} ry={r * .7} fill="none" stroke="#7e9c9b" strokeOpacity=".12" />)}
      {paths.map((d, i) => <path className="trajectory" key={i} d={d} fill="none" stroke={i === 1 ? '#ff805e' : '#8abbb8'} strokeOpacity={i === 1 ? 1 : .2 + i * .035} strokeWidth={i === 1 ? 2.5 : 1.15} />)}
      <circle cx="320" cy="244" r="4" fill="#ff805e" />
      <path d="M327 236L373 190H450" fill="none" stroke="#ff805e" strokeOpacity=".7" />
      <text x="383" y="179" fill="#ffb39c" fontSize="13">equilibrium</text>
      <text x="586" y="266" fill="#a8bbbb" fontSize="14">x</text>
      <text x="333" y="36" fill="#a8bbbb" fontSize="14">ẋ</text>
      <text x="32" y="435" fill="#a8bbbb" fontSize="12">ẍ + 2ζωₙẋ + ωₙ²x = 0</text>
    </svg>
    <figcaption><span>From motion to understanding.</span><span>ILLUSTRATIVE MODEL</span></figcaption>
  </figure>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#" aria-label="MonoonAI home"><span className="brand-symbol" aria-hidden="true">m.</span>Monoon<span className="brand-ai">AI</span></a>
      <nav aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#work">Our work</a><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a></nav>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="small-line" /> SOFTWARE & SYSTEMS ENGINEERING</p>
          <h1 id="hero-title">Software for<br />understanding<br /><span>complex systems.</span></h1>
          <p className="hero-description">We connect sensing, simulation, and visualization to help people build, explore, and understand the systems around them.</p>
          <a className="primary-link" href="#work">Explore our work <ArrowDown size={18} /></a>
          <p className="hero-footnote">Grounded in automotive & embedded engineering.<br />Built with room to explore.</p>
        </div><PhasePortrait />
      </section>
      <div className="discipline-strip"><div className="wrap"><span>SENSOR FUSION</span><span>CONTROLS</span><span>SIMULATION</span><span>VISUALIZATION</span><span>ROBOTICS</span></div></div>
      <section className="expertise wrap section" id="expertise" aria-labelledby="expertise-title">
        <div className="section-intro"><p className="eyebrow">01 / OUR EXPERTISE</p><div><h2 id="expertise-title">Rigorous engineering.<br /><span>A wider field of view.</span></h2><p>We provide professional software and systems development services, from the mathematics beneath an algorithm to the tools that make its behavior clear.</p></div></div>
        <div className="capabilities">{capabilities.map(item => <article key={item.number}><span className="index">/{item.number}</span><h3>{item.title}</h3><p className="capability-detail">{item.detail}</p><p>{item.text}</p></article>)}</div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title"><div className="wrap section">
        <div className="work-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2 id="work-title">Ideas, made tangible.</h2></div><p>Open projects that reflect how we think,<br />build, and share what we learn.</p></div>
        <div className="project-list">{projects.map(project => <a className="project-row" href={`https://github.com/yongkyuns/${project.repo}`} target="_blank" rel="noopener noreferrer" key={project.repo}><span className="index">{project.number}</span><div className="project-name"><p className="eyebrow">{project.area}</p><h3>{project.name}</h3></div><p className="project-description">{project.description}</p><span className="project-arrow"><ArrowUpRight aria-hidden="true" size={25} /><span className="sr-only">View {project.name} on GitHub (opens in new tab)</span></span></a>)}</div>
        <article className="noon-feature"><div className="noon-title"><p className="eyebrow"><i className="status-dot" /> CURRENT EXPLORATION</p><h3>noon<span>↗</span></h3><span className="noon-tag">Animation · Visualization · Learning</span></div><div className="noon-copy"><h4>Another way to bring ideas to life.</h4><p>Our ongoing exploration of animation and visual explanation: a Rust-based 2D animation system that brings mathematical and technical ideas into motion.</p><a href="https://github.com/yongkyuns/noon" target="_blank" rel="noopener noreferrer">Follow the exploration <ArrowUpRight size={17} /><span className="sr-only"> on GitHub (opens in new tab)</span></a></div></article>
      </div></section>
      <section id="contact" className="contact wrap section" aria-labelledby="contact-title"><div><p className="eyebrow">03 / WORK WITH US</p><h2 id="contact-title">Let’s work through<br />the interesting problems.</h2><p>Have a system to develop, an idea to test,<br />or something complex to make clear?</p></div><a className="contact-link" href="mailto:yongkyun.shin@monoon.ai"><MoveUpRight size={35} strokeWidth={1.25} /><span>Start a conversation</span><span className="email">yongkyun.shin@monoon.ai</span></a></section>
    </main>
    <footer className="wrap site-footer"><a className="wordmark" href="#">Monoon<span className="brand-ai">AI</span></a><span>Software. Systems. Understanding.</span><span>© {new Date().getUTCFullYear()} MonoonAI</span></footer>
  </>;
}
