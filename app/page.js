import { MarkDoor, MarkLight, MarkLevel, Lockup, Montana } from "../components/Marks";

/* ---------------- data ---------------- */

const HEARD = [
  ["Submission", "hshaw@mtlsa.org, subject line “Rebrand Vendor for Montana Legal Services Association”", "5:00 pm MST, 14 Sep 2026"],
  ["Format", "Ten pages maximum. Each requirement restated before it is answered. Late submissions automatically disqualified.", "10 pp"],
  ["Term", "Kickoff through delivery, running across two fiscal years.", "26 Oct 26 – 30 Jun 27"],
  ["Budget", "Inclusive of brand strategy, identity, collateral and the website rebuild.", "$25–30k"],
  ["Brand", "Logo, colour palette, typography, logo usage guidelines, imagery guidelines, brand style guide, PowerPoint template, business card, letterhead banner, tagline, positioning statement, key messages, storytelling options, renaming analysis.", "14 items"],
  ["Website", "Design and build, CMS as needed, content migration, site search, Spanish language support, accessibility implementation, QA, browser testing, staff documentation, editor training.", "10 items"],
  ["Audiences", "Potential clients, funders, donors, community partners, and the Montana legal community.", "5 groups"],
  ["Facilitation", "Structured conversations with management, staff, board members, clients and community partners.", "Weighted"],
];

const ROUTES = [
  {
    tag: "Route A",
    name: "The Open Door",
    mark: MarkDoor,
    body: "Montana is one of a handful of states a person can draw from memory, because it is very nearly a rectangle. Cut a doorway into the bottom edge and the state itself becomes the way in. It says what the tagline says without a word of explanation, and it still reads at sixteen pixels.",
    risk: "Strongest concept. Needs care at very small sizes so the doorway does not fill in.",
  },
  {
    tag: "Route B",
    name: "First Light",
    mark: MarkLight,
    body: "Big Sky is not decoration in Montana, it is the actual ratio of the place: a very low horizon under an enormous amount of sky. Land solid, sky open, and a vertical that is a person standing on it. This is the warmest of the three.",
    risk: "Also the least distinctive. Circles with horizons are common in nonprofit identity, and I would say so in the room rather than after you had chosen it.",
  },
  {
    tag: "Route C",
    name: "The Level",
    mark: MarkLevel,
    body: "The oldest instrument for checking whether a thing is true is a level. Here the arm of the L runs out to become a baseline, and the bubble comes to rest on it. It is the cheapest of the three to reproduce and the most robust at small sizes.",
    risk: "The only route that survives a rename with no redrawing at all, which matters given the renaming analysis you asked for.",
  },
];

const SWATCHES = [
  { n: "Lodgepole", hex: "#14503C", fg: "#FBFAF7", use: "Primary. Headlines, primary buttons, the brand block.", r: "8.97", pass: true, on: "paper" },
  { n: "Lodgepole Deep", hex: "#0B3527", fg: "#FBFAF7", use: "Body text on light, and the ground for reversed lockups.", r: "12.96", pass: true, on: "paper" },
  { n: "Glacier", hex: "#1D5D72", fg: "#FBFAF7", use: "Secondary. Links, informational states, section accents.", r: "7.03", pass: true, on: "paper" },
  { n: "Badlands", hex: "#A6431A", fg: "#FBFAF7", use: "Semantic only. Deadlines, court dates, anything time-critical.", r: "5.85", pass: true, on: "paper" },
  { n: "Badlands Light", hex: "#D4744A", fg: "#111815", use: "The dark-ground counterpart to Badlands. Same semantic role, inverted ground.", r: "3.15", pass: false, on: "paper" },
  { n: "Wheat", hex: "#C89B3C", fg: "#0B3527", use: "Dark grounds only. Fails on paper, so the guide forbids it there.", r: "2.45", pass: false, on: "paper" },
  { n: "Wheat Deep", hex: "#8A6412", fg: "#FBFAF7", use: "The light-ground substitute for Wheat. Same role, legal contrast.", r: "5.14", pass: true, on: "paper" },
  { n: "Ink", hex: "#111815", fg: "#FBFAF7", use: "Running text. A green-biased black, not a borrowed neutral.", r: "17.26", pass: true, on: "paper" },
  { n: "Paper", hex: "#FBFAF7", fg: "#111815", use: "Ground. Warm enough to soften glare, cool enough to stay legal.", r: "—", pass: true, on: "" },
];

const PHASES = [
  ["Phase 0", "Listening", "Structured sessions with management, staff, board, clients and community partners. Client conversations run separately from funder conversations, because the two groups cannot say what they actually think in the same room.", "Oct – Nov"],
  ["Phase 1", "Strategy and naming", "Positioning, key messages, storytelling framework, and the renaming analysis with a written recommendation your board can vote on.", "Nov – Dec"],
  ["Phase 2", "Identity", "Three routes developed properly, one chosen, then drawn out into a full system.", "Dec – Jan"],
  ["Phase 3", "Guide and collateral", "Brand style guide, logo usage and imagery guidelines, PowerPoint template, business card, letterhead banner.", "Jan – Feb"],
  ["Phase 4", "Website design", "Information architecture, the problem-led homepage, templates, Spanish language structure, and design review.", "Feb – Mar"],
  ["Phase 5", "Build and migration", "Front end, CMS, content migration from the existing site, site search.", "Mar – May"],
  ["Phase 6", "Accessibility, training, launch", "WCAG 2.1 AA audit with assistive technology, browser and device testing, staff documentation, editor training, launch and hand-over.", "May – Jun"],
];

/* ---------------- page ---------------- */

export default function Page() {
  return (
    <main>
      {/* ===================== COVER ===================== */}
      <header className="band cover">
        <div className="wrap">
          <div className="cover__slug">
            <span>Directional concept <b>/</b> not a finished identity</span>
            <span>Prepared for Montana Legal Services Association</span>
            <span>Vishal Mishra <b>/</b> August 2026</span>
          </div>

          <div className="cover__grid">
            <div>
              <h1 className="cover__title">
                Justice<br />lives <em>here</em>.
              </h1>
              <p className="cover__sub">
                Montana is larger than Germany and has exactly one provider of free
                civil legal services. The whole strategy is already sitting in your
                tagline. It is the last word.
              </p>
            </div>

            <div className="cover__note">
              <h2 className="h4">What this document is</h2>
              <p>
                A directional concept, made before I have met your staff, your board
                or your clients. It is not a finished identity and it should not be.
                It exists so you can see how I think about your problem before you
                decide whether to shortlist me.
              </p>
              <p>
                Everything here is the opening of a conversation, not an answer
                waiting for approval. Where I am uncertain, I have said so rather
                than smoothing it over.
              </p>
            </div>
          </div>

          <dl className="statline">
            <div><dt>Serving Montana</dt><dd>60+ years</dd></div>
            <div><dt>Counties covered</dt><dd>All 56</dd></div>
            <div><dt>Tribal reservations</dt><dd>All</dd></div>
            <div><dt>Providers in Montana</dt><dd>One</dd></div>
          </dl>
        </div>
      </header>

      {/* ===================== 1. WHAT I HEARD ===================== */}
      <section className="band band--tight">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">01 / Restating the requirement</p>
            <h2 className="h2">What you asked for</h2>
            <p className="lede">
              Your RFP asks that each requirement be restated before it is answered.
              This is that list, read back to you, so you can check I have understood
              the brief before you read a single opinion of mine.
            </p>
          </div>

          <div className="ledger">
            {HEARD.map(([k, v, t]) => (
              <div className="ledger__row" key={k}>
                <div className="ledger__k">{k}</div>
                <div className="ledger__v">{v}</div>
                <div className="ledger__t">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 2. THE PROBLEM ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">02 / Positioning statement</p>
            <h2 className="h2">Your brand has two jobs<br />that pull against each other</h2>
          </div>

          <div className="grid2">
            <div className="prose">
              <p>
                A woman with seven days to answer an eviction complaint needs to find
                one thing, quickly, on a phone, possibly on one bar of signal,
                possibly on a library computer with a queue behind her.
              </p>
              <p>
                A program officer at a foundation needs to see a sixty-year-old
                institution that can be trusted with a grant.
              </p>
              <p>
                <strong>Most legal aid brands solve the second job and hope the first
                takes care of itself.</strong> That is why so many of them end up
                looking like law firms: navy, columns, a serif in small caps. It
                reassures the funder, and it quietly tells the client that this place
                is not for them.
              </p>
              <p>
                This concept solves the first job, and argues that solving it properly
                is the most convincing thing you can show the second.
              </p>
            </div>

            <div className="prose">
              <p>
                <strong>One observation, offered carefully.</strong> Today the first
                thing on your homepage is a notice about reduced staffing capacity. It
                is honest and it is necessary information.
              </p>
              <p>
                It is also the first sentence a person in crisis reads, and in that
                position it reads as a closed door.
              </p>
              <p>
                I do not think that is a copywriting problem. It is a structural one:
                there is nowhere else on the site for urgent operational news to live,
                so it goes on top of everything. A rebuild can give it a proper home,
                one that sets expectations honestly without turning people away at the
                threshold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. HERE ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">03 / Tagline and key messages</p>
            <h2 className="h2">Keep the tagline.<br />Make the identity earn it.</h2>
          </div>

          <div className="grid2">
            <div className="prose">
              <p>
                <strong>Justice Lives Here is a better line than most rebrands
                produce.</strong> I would not replace it. I would build everything
                else around the word the line is actually resting on.
              </p>
              <p>
                <em>Here</em> is doing the work. Montana is larger than Germany. It
                has 56 counties and every tribal reservation in the state, and one
                organisation covering all of them. For someone in Plentywood, or on
                Fort Peck, <em>here</em> is not a figure of speech. It is the claim
                that the only civil legal aid in Montana reaches them too.
              </p>
              <p>
                So the identity should be built on place and reach. Not on legal
                iconography. <strong>No scales, no gavel, no columns.</strong> Those
                symbols describe the courthouse, and your clients are usually trying
                not to end up in one.
              </p>
            </div>

            <div style={{ color: "var(--lodge-lift)", display: "grid", gap: "1rem", alignContent: "start" }}>
              <Montana width="100%" color="var(--lodge-lift)" strokeWidth={1.25} />
              <p className="mono" style={{ fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
                147,040 sq mi / one provider
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. RENAMING ===================== */}
      <section className="band band--tight">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">04 / Renaming analysis</p>
            <h2 className="h2">You may not have a naming problem.<br />You may have an architecture problem.</h2>
          </div>

          <div className="grid3">
            <div className="card">
              <span className="card__n">A</span>
              <h3 className="h4">The case for renaming</h3>
              <p>
                Montana Legal Services Association is four words, three of them
                institutional. It describes a structure rather than a promise, and
                Association in particular reads as a trade body rather than a law firm
                for people who cannot afford one.
              </p>
            </div>
            <div className="card">
              <span className="card__n">B</span>
              <h3 className="h4">The case against</h3>
              <p>
                Sixty years of recognition with the Montana bar, with funders, and on
                court filings. That equity is real. But it is not evenly distributed:
                the lawyers know exactly who you are. Many of the people you exist for
                have never heard the name.
              </p>
            </div>
            <div className="card">
              <span className="card__n">C</span>
              <h3 className="h4">Where I would start</h3>
              <p>
                Keep the legal name for courts, funders and the bar, where the equity
                lives. Lead publicly with a short service name a person in trouble can
                say out loud and remember. One organisation, two registers.
              </p>
            </div>
          </div>

          <div className="prose" style={{ marginTop: "2rem", maxWidth: "44rem" }}>
            <p>
              That is a starting position and I expect it to change once I have sat
              with your board. What matters more is the structural consequence:{" "}
              <strong>whatever is decided, the identity has to survive it.</strong>{" "}
              Every mark in the next section is drawn to work without words beside it,
              and Route C is built so the name can be swapped without redrawing a
              single curve.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 5. IDENTITY ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">05 / Logo, usage, and lockups</p>
            <h2 className="h2">Three routes, shown where marks<br />usually fall apart</h2>
            <p className="lede">
              Any mark looks fine at 400 pixels on a white slide. These are shown
              reversed, in one colour, and at favicon size, because that is where the
              difference between a drawing and an identity shows up.
            </p>
          </div>

          <div className="routes">
            {ROUTES.map((r) => {
              const M = r.mark;
              return (
                <article className="route" key={r.tag}>
                  <div className="route__meta">
                    <span className="route__tag">{r.tag}</span>
                    <h3 className="h3">{r.name}</h3>
                    <p>{r.body}</p>
                    <p style={{ color: "var(--wheat)" }}>{r.risk}</p>
                  </div>

                  <div className="route__proof">
                  <div className="lockups">
                    <div className="lock lock--paper">
                      <Lockup mark={M} color="var(--lodge-deep)" size={46} />
                      <span className="lock__tag">Primary / on paper</span>
                    </div>
                    <div className="lock lock--forest">
                      <Lockup mark={M} color="var(--paper)" size={40} stacked name={false} />
                      <span className="lock__tag">Reversed</span>
                    </div>
                    <div className="lock lock--ink">
                      <Lockup mark={M} color="var(--wheat)" size={40} stacked name={false} />
                      <span className="lock__tag">One colour</span>
                    </div>
                  </div>

                    <div className="smallproof">
                      <span className="smallproof__lab">Legibility at size</span>
                      {[16, 24, 32, 48].map((s) => (
                        <figure key={s}>
                          <span className="chip" style={{ width: s + 16, height: s + 16 }}>
                            <M size={s} color="var(--lodgepole)" />
                          </span>
                          <figcaption>{s}px</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 6. COLOUR ===================== */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">06 / Colour palette</p>
            <h2 className="h2">Measured, not chosen by eye</h2>
            <p className="lede">
              Every ratio below was computed against the paper ground, not estimated.
              One of them fails, and it is still in the palette, because the useful
              thing is not a palette where everything passes. It is a palette that
              tells your team exactly where each colour is allowed to go.
            </p>
          </div>

          <div className="swatches">
            {SWATCHES.map((s) => (
              <div className="sw" key={s.n}>
                <div className="sw__chip" style={{ background: s.hex, color: s.fg }}>
                  <span className="sw__name">{s.n}</span>
                </div>
                <div className="sw__body">
                  <span className="sw__hex">{s.hex}</span>
                  {s.on && (
                    <span className="ratio">
                      <b>{s.r}:1</b>
                      <span className={"pill " + (s.pass ? "pill--pass" : "pill--fail")}>
                        {s.pass ? "AA" : "fails"}
                      </span>
                    </span>
                  )}
                  <span className="sw__use">{s.use}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="prose" style={{ marginTop: "2rem", maxWidth: "44rem" }}>
            <p>
              <strong>Wheat is the useful example.</strong> At 2.45:1 on paper it is
              illegal for text, and a designer who did not check would use it for a
              heading and never know. So the guide does not present it as a colour with
              a warning attached. It presents Wheat as a dark-ground colour and Wheat
              Deep as its light-ground equivalent, and the mistake becomes impossible
              to make rather than merely discouraged.
            </p>
            <p>
              Badlands needed the same treatment, and I found that out the way you are
              supposed to: <strong>an automated contrast audit of this page failed it.</strong>{" "}
              The rust that is legible on paper is not legible on a dark ground, so it
              has a counterpart too. Two of the seven colours here carry a ground
              restriction, and both restrictions are in the palette rather than in
              somebody's memory.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 7. TYPE ===================== */}
      <section className="band band--paper">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">07 / Typography</p>
            <h2 className="h2">Three faces, no licence fees, ever</h2>
          </div>

          <div className="grid2">
            <div className="spec">
              <div className="spec__row">
                <span className="spec__k">Display<br />Newsreader</span>
                <div className="spec__sample">
                  <div style={{ fontFamily: "var(--display)", fontSize: "2.4rem", lineHeight: 1.05, letterSpacing: "-.025em" }}>
                    Justice lives here
                  </div>
                </div>
              </div>
              <div className="spec__row">
                <span className="spec__k">Interface<br />Public Sans</span>
                <div className="spec__sample">
                  <div style={{ fontFamily: "var(--sans)", fontSize: "1.5rem", fontWeight: 700 }}>
                    Apply for legal help
                  </div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: ".9rem", marginTop: ".4rem", color: "var(--ink-soft)" }}>
                    You have 7 days to respond to an eviction complaint in Montana.
                  </div>
                </div>
              </div>
              <div className="spec__row">
                <span className="spec__k">Data<br />IBM Plex Mono</span>
                <div className="spec__sample">
                  <div className="mono" style={{ fontSize: ".95rem" }}>
                    Case 24-DV-0917 / filed 08.14.2026
                  </div>
                </div>
              </div>
            </div>

            <div className="prose">
              <p>
                <strong>Public Sans is the typeface of the US Web Design System</strong>,
                drawn for government services that have to be readable by everyone who
                is entitled to use them. For a legal aid organisation that is not a
                neutral pick. It is an argument, and it is one your funders will
                recognise.
              </p>
              <p>
                Newsreader carries the sixty years. It gives headlines dignity without
                the small-caps-and-columns costume that makes legal aid look like the
                opposition.
              </p>
              <p>
                All three faces are open source.{" "}
                <strong>MLSA never pays a licence fee, and never has to ask a vendor
                for permission to set its own name.</strong> Over an eight month project
                that is a small thing. Over the next decade it is not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 8. WEBSITE ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">08 / Website design and architecture</p>
            <h2 className="h2">Open with what is wrong,<br />not with who you are</h2>
            <p className="lede">
              A person arrives at a legal aid website in the middle of the worst week
              of their year. They are not browsing. They have one question, and the
              homepage should be built to answer it in a single tap.
            </p>
          </div>

          <div className="compare">
            <div className="compare__board">
              <p className="artboard__cap">Today</p>
              <div className="before">
                <div className="before__bar">
                  <span>Montana Legal Services Association</span>
                  <span>About · Get Help · Donate</span>
                </div>
                <div className="before__alert">
                  Notice: we are operating with reduced staffing capacity. Response
                  times may be longer than usual.
                </div>
                <div className="before__body">
                  <h4>Protecting the civil legal rights of Montanans living in poverty</h4>
                  <p>
                    MLSA is a nonprofit law firm providing free civil legal help to
                    low-income Montanans for over sixty years.
                  </p>
                  <div className="before__ph">client testimonial carousel</div>
                  <p>Recent news and legal tips</p>
                </div>
              </div>
            </div>

            <div className="compare__board">
              <p className="artboard__cap">Proposed</p>
              <div className="artboard">
                <div className="mock">
                  <div className="mock__bar">
                    <Lockup mark={MarkDoor} color="var(--lodge-deep)" size={30} name={false} />
                    <div className="mock__nav">
                      <span>Get help</span><span>Legal info</span><span>Español</span>
                    </div>
                    <span className="mock__cta">Leave this site</span>
                  </div>

                  <div className="mock__hero">
                    <p className="mock__kicker">Free legal help, every county in Montana</p>
                    <h3 className="mock__h1">What is happening to you?</h3>
                    <p>Choose the one closest to your situation. It takes about four minutes.</p>
                    <div className="picker">
                      <div className="picker__i"><b>I am being evicted</b><span>Housing</span></div>
                      <div className="picker__i"><b>I am not safe at home</b><span>Protection orders</span></div>
                      <div className="picker__i"><b>My benefits stopped</b><span>Public benefits</span></div>
                      <div className="picker__i"><b>I am being sued for a debt</b><span>Consumer</span></div>
                    </div>
                  </div>

                  <div className="mock__strip">
                    <div className="mock__stat"><b>56</b><span>counties served</span></div>
                    <div className="mock__stat"><b>All</b><span>tribal reservations</span></div>
                    <div className="mock__stat"><b>60+</b><span>years in Montana</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose">
              <p>
                The first two things a frightened person reads are an apology about
                capacity and a mission statement written for a grant application. Help
                is four words into a navigation bar.
              </p>
            </div>

            <div className="prose">
              <p>
                Four doors, in the words people actually use about their own lives. Not{" "}
                <em>Housing Law</em>. <strong>I am being evicted.</strong>
              </p>
              <p>
                Three details worth noticing. Español sits in the main navigation rather
                than behind a flag icon. <em>Leave this site</em> is in the top right,
                standard practice for any service used by people fleeing violence. And
                the credibility numbers still appear, immediately below the help, where
                they reassure the funder without blocking the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 9. APPLICATIONS ===================== */}
      <section className="band band--tight">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">09 / Collateral and templates</p>
            <h2 className="h2">The system, applied</h2>
          </div>

          <div className="apps">
            <div>
              <p className="artboard__cap">Business card</p>
              <div className="artboard">
                <div className="bcard">
                  <Lockup mark={MarkDoor} color="var(--paper)" size={30} name={false} />
                  <div>
                    <div className="bcard__name">Hilary Shaw</div>
                    <div className="bcard__role">Donor Engagement Specialist</div>
                  </div>
                  <div className="bcard__det">
                    hshaw@mtlsa.org<br />406.285.8556
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="artboard__cap">Letterhead banner</p>
              <div className="artboard">
                <div className="letter">
                  <Lockup mark={MarkDoor} color="var(--lodge-deep)" size={34} />
                  <div className="letter__rule" />
                  <div className="letter__lines">
                    <i style={{ width: "88%" }} /><i style={{ width: "94%" }} />
                    <i style={{ width: "72%" }} /><i style={{ width: "90%" }} />
                    <i style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <p className="artboard__cap">Presentation template</p>
              <div className="artboard artboard--wide">
                <div className="slide">
                  <Lockup mark={MarkDoor} color="var(--wheat)" size={30} name={false} />
                  <div className="slide__t">
                    In 2026 we closed 4,100 cases<br />with 22 attorneys.
                  </div>
                  <div className="slide__f">
                    <span>Board report / Q4</span>
                    <span>Justice Lives Here</span>
                  </div>
                </div>
              </div>
              <p className="prose" style={{ marginTop: ".9rem", fontSize: "var(--s--1)" }}>
                Figures on this slide are placeholders, included only to show the
                template. I have not been given your case numbers and I have not
                guessed at them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 10. ACCESSIBILITY ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">10 / Accessibility implementation</p>
            <h2 className="h2">The part I would not let you<br />buy from anyone else</h2>
          </div>

          <div className="grid2" style={{ alignItems: "start" }}>
            <div className="evidence">
              <h3 className="h4">Worth knowing before you renew</h3>
              <p>
                Your site currently runs an accessibility overlay widget. In January
                2025 the Federal Trade Commission ordered accessiBe, the largest vendor
                in that category, to pay <strong>$1 million</strong> over deceptive
                claims that its AI product could make websites compliant with
                accessibility guidelines. The final order was approved in April 2025.
              </p>
              <p>
                <a href="https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites"
                   target="_blank" rel="noopener noreferrer">
                  ftc.gov, January 2025
                </a>
              </p>
            </div>

            <div className="prose">
              <p>
                I am not raising this to score a point off a decision someone made in
                good faith. <strong>You installed it because you care about the thing
                it promised</strong>, which is exactly right for an organisation whose
                clients disproportionately live with disabilities.
              </p>
              <p>
                The problem is that the promise was not kept, and a rebuild is the
                moment to replace it with the real version: accessibility written into
                the markup, tested with an actual screen reader, measured against WCAG
                2.1 AA, and documented so your editors do not undo it in month three.
              </p>
            </div>
          </div>

          <div className="grid2" style={{ marginTop: "1.75rem", alignItems: "start" }}>
            <div className="prose">
              <p>
                <strong>There is a second half to this that branding studios rarely
                raise.</strong> For your clients, bandwidth is an accessibility
                requirement. A site that quietly assumes a good connection excludes
                rural Montana and much of the reservation land you serve, and it does
                it invisibly, because those people simply never arrive.
              </p>
              <p>
                So this page is the argument as well as the description of it. It is
                built on the same stack I would build your site on, and it is designed
                to be read on a bad connection.
              </p>
            </div>

            <div className="card" style={{ gap: "1rem" }}>
              <h3 className="h4">This page, measured</h3>
              <div className="ledger" style={{ borderTop: 0 }}>
                <div className="ledger__row" style={{ gridTemplateColumns: "1fr auto", padding: ".55rem 0" }}>
                  <span className="ledger__v">Total page weight</span>
                  <span className="mono" style={{ color: "var(--wheat)" }}>__WEIGHT__</span>
                </div>
                <div className="ledger__row" style={{ gridTemplateColumns: "1fr auto", padding: ".55rem 0" }}>
                  <span className="ledger__v">JavaScript required to read it</span>
                  <span className="mono" style={{ color: "var(--wheat)" }}>None</span>
                </div>
                <div className="ledger__row" style={{ gridTemplateColumns: "1fr auto", padding: ".55rem 0" }}>
                  <span className="ledger__v">Contrast ratios computed, not estimated</span>
                  <span className="mono" style={{ color: "var(--wheat)" }}>All</span>
                </div>
                <div className="ledger__row" style={{ gridTemplateColumns: "1fr auto", padding: ".55rem 0", borderBottom: 0 }}>
                  <span className="ledger__v">Renders without a stylesheet</span>
                  <span className="mono" style={{ color: "var(--wheat)" }}>Yes</span>
                </div>
              </div>
              <p style={{ fontSize: ".78rem" }}>
                Turn JavaScript off and reload. Nothing here disappears. That is the
                standard I would hold your site to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 11. HOW IT RUNS ===================== */}
      <section className="band">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">11 / Schedule and facilitation</p>
            <h2 className="h2">October to June, in seven phases</h2>
          </div>

          <div className="phase">
            {PHASES.map(([n, t, b, w]) => (
              <div className="phase__row" key={n}>
                <span className="phase__n">{n}</span>
                <div className="phase__b"><strong>{t}</strong><p>{b}</p></div>
                <span className="phase__w">{w}</span>
              </div>
            ))}
          </div>

          <div className="grid2" style={{ marginTop: "2.25rem", alignItems: "start" }}>
            <div className="prose">
              <p>
                <strong>On facilitation, the honest note.</strong> I work from India.
                Montana is eleven and a half hours behind me for most of your project,
                twelve and a half after the clocks change.
              </p>
              <p>
                The way I run this is that sessions happen in your morning, which is my
                evening, and the write-up is in your inbox before your next working day
                starts. What you get in exchange for the time zone is that the work
                moves while your office is closed.
              </p>
            </div>
            <div className="prose">
              <p>
                <strong>One structural request.</strong> Client conversations should be
                held separately from funder and board conversations. Not for
                convenience: people who have needed legal aid will not say what they
                actually think about your brand while the people who fund it are in the
                room.
              </p>
              <p>
                That separation is the difference between research and a focus group
                that agrees with whoever spoke first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="foot">
        <div className="wrap">
          <div className="head" style={{ marginBottom: "2.5rem" }}>
            <p className="eyebrow">Closing</p>
            <h2 className="h2" style={{ maxWidth: "26ch" }}>
              What I have not done here
            </h2>
            <div className="prose" style={{ maxWidth: "44rem" }}>
              <p>
                I have not talked to a single one of your clients, and everything above
                is therefore a hypothesis. I have not seen your analytics, your intake
                numbers or the content inventory behind the site. The renaming position
                is a starting point, not a recommendation I would defend before I had
                heard your board disagree with it.
              </p>
              <p>
                <strong>What this does show is how I work:</strong> read the brief
                closely, look at the real site, measure rather than assert, and say the
                uncomfortable thing early rather than in month five.
              </p>
              <p>
                If that is the working relationship you want, the full proposal follows
                the format your RFP asks for, within the ten pages, before the deadline.
              </p>
            </div>
          </div>

          <hr className="rule" />

          <div className="foot__grid" style={{ marginTop: "2.5rem" }}>
            <div className="foot__c">
              <b>Vishal Mishra</b><br />
              Web and application developer<br />
              vishalmshr632@gmail.com<br />
              +91 8685945571
            </div>
            <div className="foot__c" style={{ textAlign: "right" }}>
              Directional concept<br />
              Not a finished identity<br />
              August 2026
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
