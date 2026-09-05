/** Synthetic navigation geometry, sampled at build time; not recorded telemetry. */
export function NavigationStudy() {
  const route = (t: number): readonly [number, number] => [
    70 + 490 * t, 320 - 155 * t + 62 * Math.sin(t * Math.PI * 2),
  ];
  const pose = route(0.62);
  const heading = Math.atan2(-155 + 124 * Math.PI * Math.cos(0.62 * Math.PI * 2), 490) * 180 / Math.PI;
  return (
    <figure className="phase-figure">
      <div className="figure-heading">
        <span><i className="status-dot" /> NAVIGATION STUDY / 001</span>
        <span>POSITION / HEADING</span>
      </div>
      <svg className="phase-plot" viewBox="0 0 640 470" role="img" aria-labelledby="navigation-title navigation-description">
        <title id="navigation-title">Vehicle trajectory and position estimation</title>
        <desc id="navigation-description">A top-down vehicle follows a curved route across a coordinate grid. Discrete GNSS observations surround a continuous illustrative fused trajectory. Ellipses represent position uncertainty, and an arrow indicates vehicle heading. Synthetic geometry, not measured performance.</desc>
        <defs>
          <pattern id="navigation-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#a1bdb7" strokeOpacity=".12" />
          </pattern>
          <marker id="navigation-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#ff9c74" /></marker>
        </defs>
        <rect width="640" height="470" fill="url(#navigation-grid)" />
        <g fill="none" stroke="#7db7a7">
          {[-34, 34].map((offset) => <path key={offset} strokeOpacity=".25" strokeWidth="1" d={curve(140, (t) => { const [x,y] = route(t); return [x,y+offset]; })} />)}
          <path strokeOpacity=".45" strokeDasharray="5 7" d={curve(140, route)} />
          {[0.18,0.4,0.62,0.85].map((t) => { const [x,y]=route(t); return <ellipse key={t} cx={x} cy={y} rx="29" ry="17" transform={`rotate(-28 ${x} ${y})`} strokeOpacity=".55" />; })}
        </g>
        {Array.from({length: 22}, (_,i) => { const t=i/21; const [x,y]=route(t); return <circle key={i} cx={x+Math.sin(i*7)*9} cy={y+Math.cos(i*4)*14} r="3.5" fill="#142d31" stroke="#a1bdb7" strokeWidth="1.4" />; })}
        <path d={curve(140, route)} fill="none" stroke="#ff9c74" strokeWidth="2.5" />
        <g transform={`translate(${pose[0]} ${pose[1]}) rotate(${heading})`}>
          <path d="M-5 0H78" stroke="#ff9c74" strokeWidth="1.5" markerEnd="url(#navigation-arrow)" />
          <rect x="-28" y="-14" width="56" height="28" rx="8" fill="#19383c" stroke="#eff5f3" strokeWidth="1.8" />
          <path d="M8 -10L15 -8V8L8 10Z M-15 -10V10 M-21 -17H-10 M12 -17H22 M-21 17H-10 M12 17H22" fill="none" stroke="#a1bdb7" strokeWidth="2" />
        </g>
        <g fill="#b4cac5" fontSize="13">
          <text x="36" y="42">LOCAL NAVIGATION FRAME</text>
          <path d="M48 130V70M48 130H108" stroke="#a1bdb7" fill="none" />
          <text x="40" y="61">N</text><text x="119" y="135">E</text>
          <path d="M410 272L443 305H563" stroke="#a1bdb7" fill="none" />
          <text x="450" y="325">vehicle pose</text>
          <circle cx="42" cy="411" r="3.5" fill="none" stroke="#a1bdb7" /><text x="55" y="416">GNSS observations</text>
          <path d="M270 411H297" stroke="#ff9c74" strokeWidth="2" /><text x="307" y="416">fused trajectory</text>
        </g>
      </svg>
      <figcaption><span>Position. Direction. A path forward.</span><span>ILLUSTRATIVE MODEL</span></figcaption>
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

/** Synthetic position estimates, steering response, and lane-change candidates. */
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
      <text x="14" y="14" fill="var(--muted)" fontSize="11">{['POSITION ESTIMATION', 'STEERING RESPONSE', 'TRAJECTORY CANDIDATES'][kind]}</text>
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
              90 - (35 + i * 9) * (3 * t * t - 2 * t * t * t),
            ])}
          />
        ))}
    </svg>
  );
}

/** Plan-view bicycle-model schematic: conceptual geometry, not a calibrated model. */
export function VehicleDynamicsStudy() {
  return (
    <figure className="surface-figure">
      <div className="surface-heading"><span className="eyebrow">FROM STEERING TO MOTION</span><span className="surface-index">FIG. 02</span></div>
      <svg className="surface-plot" viewBox="0 0 620 490" role="img" aria-labelledby="dynamics-title dynamics-description">
        <title id="dynamics-title">Vehicle dynamics and steering geometry</title>
        <desc id="dynamics-description">A plan-view bicycle-model schematic shows rear and steered front wheels, wheelbase L, forward velocity v, steering angle delta, and yaw rate r. A curved predicted path connects steering input to vehicle motion. Illustrative geometry, not to scale.</desc>
        <defs>
          <pattern id="dynamics-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#7db7a7" strokeOpacity=".12" /></pattern>
          <marker id="dynamics-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L7 3L0 6" fill="none" stroke="#ff9c74" /></marker>
        </defs>
        <rect x="15" y="55" width="590" height="360" fill="url(#dynamics-grid)" />
        <path d="M80 330C250 330 355 330 440 224S510 94 568 75" fill="none" stroke="#7db7a7" strokeWidth="40" strokeOpacity=".07" />
        <path d="M80 330C250 330 355 330 440 224S510 94 568 75" fill="none" stroke="#ff9c74" strokeWidth="2" strokeDasharray="6 7" />
        <rect x="130" y="278" width="258" height="104" rx="32" fill="#19383c" fillOpacity=".85" stroke="#7db7a7" strokeOpacity=".5" />
        <path d="M110 330H430 M175 267V390 M345 257V390" fill="none" stroke="#a1bdb7" strokeOpacity=".55" strokeDasharray="4 6" />
        <path d="M175 330H345" stroke="#a1bdb7" strokeWidth="2" />
        <rect x="151" y="322" width="48" height="16" rx="3" fill="#142d31" stroke="#eff5f3" strokeWidth="2" />
        <g transform="rotate(-28 345 330)"><rect x="321" y="322" width="48" height="16" rx="3" fill="#142d31" stroke="#eff5f3" strokeWidth="2" /><path d="M375 330H414" stroke="#ff9c74" markerEnd="url(#dynamics-arrow)" /></g>
        <circle cx="260" cy="330" r="5" fill="#ff9c74" />
        <path d="M260 315V251 M260 251L256 259M260 251L264 259" stroke="#a1bdb7" fill="none" />
        <path d="M263 303H319" stroke="#ff9c74" markerEnd="url(#dynamics-arrow)" />
        <path d="M392 330A47 47 0 0 0 386.5 308" stroke="#ff9c74" fill="none" />
        <path d="M221 268A47 47 0 0 1 291 247" stroke="#ff9c74" fill="none" markerEnd="url(#dynamics-arrow)" />
        <path d="M175 398V418M345 398V418M175 408H345" stroke="#a1bdb7" />
        <g fill="#b4cac5" fontSize="14" fontFamily="var(--font-geist-mono), monospace">
          <text x="30" y="35">PLAN VIEW / BICYCLE MODEL</text>
          <text x="401" y="321">δ</text><text x="285" y="293">v</text><text x="246" y="233">yaw rate r</text>
          <text x="211" y="441">wheelbase L</text><text x="430" y="168">predicted</text><text x="430" y="189">motion</text>
          <text x="145" y="368">rear</text><text x="324" y="368">front</text>
        </g>
      </svg>
      <figcaption><span>Steering inputs. Understandable motion.</span><span>ILLUSTRATIVE MODEL</span></figcaption>
    </figure>
  );
}
