/* ------------------------------------------------------------------
   Three identity directions. Each is built from primitives so it
   holds at 16px and in one colour, which is where most marks break.
   ------------------------------------------------------------------ */

/* A — THE OPEN DOOR
   Montana is one of the few states people can draw from memory: a
   rectangle. Cut a doorway from the bottom edge and the state itself
   becomes the way in. Reads at favicon size; survives a rename. */
export function MarkDoor({ size = 64, color = "currentColor", title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img"
         aria-label={title || "Open Door mark"} fill="none">
      <path
        d="M8 8 h48 v48 h-15 v-15 a9 9 0 0 0 -18 0 v15 h-15 z"
        fill={color}
      />
    </svg>
  );
}

/* B — FIRST LIGHT
   Big Sky is not a slogan here, it is the ratio of the place: a very
   low horizon under an enormous sky. The vertical is a person standing
   on it. Land solid, sky open. */
export function MarkLight({ size = 64, color = "currentColor", title }) {
  const r = 26, cx = 32, cy = 32, hy = 40;
  const dx = Math.sqrt(r * r - (hy - cy) * (hy - cy));
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img"
         aria-label={title || "First Light mark"} fill="none">
      <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth="4" />
      <path
        d={`M ${cx - dx} ${hy} A ${r} ${r} 0 0 0 ${cx + dx} ${hy} Z`}
        fill={color}
      />
      <rect x={cx - 2} y="18" width="4" height="22" fill={color} />
    </svg>
  );
}

/* C — THE LEVEL
   A typographic route. The L's arm runs out to become the baseline the
   other letters rest on: a level, the oldest instrument for checking
   that a thing is true. Cheapest to reproduce, most rename-proof. */
export function MarkLevel({ size = 64, color = "currentColor", title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img"
         aria-label={title || "The Level mark"} fill="none">
      <rect x="11" y="13" width="5.5" height="31" fill={color} />
      <rect x="11" y="44" width="42" height="5.5" fill={color} />
      <circle cx="39" cy="39" r="5" stroke={color} strokeWidth="3.5" fill="none" />
    </svg>
  );
}

/* Full lockup: mark + name, in the proposed typography. */
export function Lockup({ mark: Mark, color = "currentColor", size = 44, stacked = false, name = true }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: stacked ? "center" : "center",
      gap: stacked ? ".65rem" : ".7rem",
      color,
      textAlign: stacked ? "center" : "left",
    }}>
      <Mark size={size} color={color} />
      {name && (
        <div style={{ display: "grid", gap: ".1rem" }}>
          <div style={{
            fontFamily: "var(--display)", fontSize: size * 0.44,
            letterSpacing: "-.02em", lineHeight: 1, fontWeight: 400,
          }}>
            Montana Legal Services
          </div>
          <div style={{
            fontFamily: "var(--sans)", fontSize: Math.max(size * 0.185, 7),
            letterSpacing: ".19em", textTransform: "uppercase",
            opacity: .82, lineHeight: 1, fontWeight: 600,
          }}>
            Justice Lives Here
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------
   MONTANA — projected from real boundary coordinates rather than
   hand-drawn, so the shape is honest. Equirectangular, x corrected
   by cos(47°N).
   ------------------------------------------------------------------ */
const BOUNDARY = [
  [-116.05, 49.00], [-104.05, 49.00], [-104.05, 45.00], [-111.05, 45.00],
  [-111.05, 44.48], [-112.30, 44.48], [-112.85, 44.40], [-113.00, 44.75],
  [-113.45, 45.05], [-113.80, 45.60], [-114.50, 45.55], [-114.35, 46.10],
  [-114.55, 46.65], [-114.90, 46.65], [-115.30, 47.28], [-115.72, 47.70],
  [-116.05, 48.50],
];

export function Montana({ width = 520, color = "currentColor", fill = "none", strokeWidth = 1.5, children }) {
  const k = Math.cos((47 * Math.PI) / 180);
  const pts = BOUNDARY.map(([lon, lat]) => [lon * k, -lat]);
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const W = 1000, H = (W * (maxY - minY)) / (maxX - minX);
  const proj = pts.map(([x, y]) => [
    ((x - minX) / (maxX - minX)) * W,
    ((y - minY) / (maxY - minY)) * H,
  ]);
  const d = proj.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ") + " Z";
  return (
    <svg width={width} viewBox={`0 0 ${W} ${H.toFixed(1)}`} fill="none"
         role="img" aria-label="Montana, served in full">
      <path d={d} fill={fill} stroke={color} strokeWidth={strokeWidth}
            strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      {children}
    </svg>
  );
}
