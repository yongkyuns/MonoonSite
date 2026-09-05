/** An illustrative damped oscillator phase portrait, not recorded project data. */
export function PhasePortrait() {
  const paths = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * Math.PI) / 6;
    return Array.from({ length: 180 }, (_, step) => {
      const t = step / 22;
      const radius = 180 * Math.exp(-t * 0.27);
      const x = 320 + radius * Math.cos(t * 1.75 + angle);
      const velocity =
        radius *
        (-0.27 * Math.cos(t * 1.75 + angle) -
          1.75 * Math.sin(t * 1.75 + angle));
      const y = 244 - velocity * 0.5;
      return `${step === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(' ');
  });
  return (
    <figure className="phase-figure">
      <div className="figure-heading">
        <span>
          <i className="status-dot" /> SYSTEM STUDY / 001
        </span>
        <span>STATE SPACE</span>
      </div>
      <svg
        className="phase-plot"
        viewBox="0 0 640 470"
        role="img"
        aria-labelledby="phase-title phase-description"
      >
        <title id="phase-title">A system finding equilibrium</title>
        <desc id="phase-description">
          An illustrative phase portrait of a damped oscillator. Twelve
          trajectories spiral toward a common equilibrium.
        </desc>
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="640" height="470" fill="url(#grid)" />
        <path
          d="M40 244H600 M320 25V445"
          stroke="#819494"
          strokeOpacity=".4"
          strokeDasharray="3 6"
        />
        {[50, 100, 150, 200].map((r) => (
          <ellipse
            key={r}
            cx="320"
            cy="244"
            rx={r}
            ry={r * 0.7}
            fill="none"
            stroke="#7e9c9b"
            strokeOpacity=".12"
          />
        ))}
        {paths.map((d, i) => (
          <path
            className="trajectory"
            key={i}
            d={d}
            fill="none"
            stroke={i === 1 ? '#ff805e' : '#8abbb8'}
            strokeOpacity={i === 1 ? 1 : 0.2 + i * 0.035}
            strokeWidth={i === 1 ? 2.5 : 1.15}
          />
        ))}
        <circle cx="320" cy="244" r="4" fill="#ff805e" />
        <path
          d="M327 236L373 190H450"
          fill="none"
          stroke="#ff805e"
          strokeOpacity=".7"
        />
        <text x="383" y="179" fill="#ffb39c" fontSize="13">
          equilibrium
        </text>
        <text x="586" y="266" fill="#a8bbbb" fontSize="14">
          x
        </text>
        <text x="333" y="36" fill="#a8bbbb" fontSize="14">
          ẋ
        </text>
        <text x="32" y="435" fill="#a8bbbb" fontSize="12">
          ẍ + 2ζωₙẋ + ωₙ²x = 0
        </text>
      </svg>
      <figcaption>
        <span>From motion to understanding.</span>
        <span>ILLUSTRATIVE MODEL</span>
      </figcaption>
    </figure>
  );
}

/** Samples a mathematical curve once at build time; no animation runtime needed. */
function curve(
  samples: number,
  point: (t: number) => readonly [number, number],
) {
  return Array.from({ length: samples }, (_, i) => {
    const [x, y] = point(i / (samples - 1));
    return `${i ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
}

/** Decorative coordinate lines, kept outside the accessibility tree. */
export function CoordinateField() {
  return (
    <svg
      className="coordinate-field"
      viewBox="0 0 1500 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: 18 }, (_, i) => (
        <path
          key={i}
          d={curve(110, (t) => [
            t * 1500,
            180 +
              i * 27 +
              Math.sin(t * Math.PI * 2 + i * 0.055) * (35 + t * 85),
          ])}
        />
      ))}
      {[100, 420, 740, 1060, 1380].map((x) => (
        <path
          className="registration-mark"
          key={x}
          d={`M${x - 6} 60h12m-6 -6v12 M${x - 6} 700h12m-6 -6v12`}
        />
      ))}
    </svg>
  );
}

/** Small synthetic studies illustrating signals, response, and wave superposition. */
export function SignalStudy({ kind }: { kind: number }) {
  const smooth = (t: number) => Math.sin(t * Math.PI * 3) * 24;
  return (
    <svg
      className="signal-study"
      viewBox="0 0 340 120"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="study-axis"
        d="M10 60H330 M10 20V100 M90 20V100 M170 20V100 M250 20V100 M330 20V100"
      />
      {kind === 0 && (
        <>
          <path
            className="study-secondary"
            d={curve(180, (t) => [
              10 + t * 320,
              60 + smooth(t) + Math.sin(t * 137) * 9 + Math.cos(t * 271) * 5,
            ])}
          />
          <path
            className="study-primary"
            d={curve(150, (t) => [10 + t * 320, 60 + smooth(t)])}
          />
        </>
      )}
      {kind === 1 && (
        <>
          <path
            className="study-secondary"
            strokeDasharray="4 5"
            d="M10 38H330"
          />
          <path
            className="study-primary"
            d={curve(150, (t) => [
              10 + t * 320,
              38 + 57 * Math.exp(-t * 5) * Math.cos(t * 15),
            ])}
          />
          <circle cx="330" cy="38" r="3" fill="var(--primary)" />
        </>
      )}
      {kind === 2 &&
        [0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            className={i === 2 ? 'study-primary' : 'study-secondary'}
            opacity={i === 2 ? 1 : 0.5}
            d={curve(120, (t) => [
              10 + t * 320,
              60 +
                Math.sin(t * Math.PI * 4 + i * 0.45) *
                  30 *
                  Math.sin(t * Math.PI),
            ])}
          />
        ))}
    </svg>
  );
}

/** A projected analytic surface z = sin(r²) exp(-r² / 3), not measured data. */
export function ConceptSurface() {
  const project = (u: number, v: number): readonly [number, number] => {
    const r2 = u * u + v * v;
    const z = Math.sin(r2) * Math.exp(-r2 / 3);
    return [310 + (u - v) * 58, 246 + (u + v) * 28 - z * 110];
  };
  return (
    <figure className="surface-figure">
      <div className="surface-heading">
        <span className="eyebrow">THE SHAPE OF AN IDEA</span>
        <span className="surface-index">FIG. 02</span>
      </div>
      <svg
        className="surface-plot"
        viewBox="0 0 620 490"
        role="img"
        aria-labelledby="surface-title surface-description"
      >
        <title id="surface-title">
          A mathematical model rendered as a three-dimensional wireframe
        </title>
        <desc id="surface-description">
          An illustrative radial wave surface. A grid of teal curves rises and
          falls around the center, with an orange cross-section showing one
          slice of the model.
        </desc>
        <defs>
          <radialGradient id="surface-glow">
            <stop stopColor="#45877d" stopOpacity=".22" />
            <stop offset="1" stopColor="#45877d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="310"
          cy="255"
          rx="285"
          ry="210"
          fill="url(#surface-glow)"
        />
        <g className="surface-grid">
          {Array.from({ length: 25 }, (_, i) => {
            const k = -2.3 + (i * 4.6) / 24;
            return (
              <g key={i}>
                <path d={curve(90, (t) => project(k, -2.3 + t * 4.6))} />
                <path d={curve(90, (t) => project(-2.3 + t * 4.6, k))} />
              </g>
            );
          })}
        </g>
        <path
          className="surface-section"
          pathLength="1"
          d={curve(120, (t) => project(-2.3 + t * 4.6, 0))}
        />
        <g className="surface-axes">
          <path d="M310 448l250 -122 M310 448L60 326 M310 448V396" />
          <text x="563" y="324">
            x
          </text>
          <text x="46" y="324">
            y
          </text>
          <text x="305" y="385">
            z
          </text>
        </g>
        <text className="surface-equation" x="26" y="40">
          z = sin(r²) · e⁻ʳ²/³
        </text>
      </svg>
      <figcaption>
        <span>Abstract relationships. Visible behavior.</span>
        <span>ILLUSTRATIVE MODEL</span>
      </figcaption>
    </figure>
  );
}
