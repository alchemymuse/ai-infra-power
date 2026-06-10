"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          organization: formData.get("organization"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="logo">
          Infrastructure <em>Alpha</em> Fund
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#problem">About</a></li>
            <li><a href="#audiences">Work With Us</a></li>
            <li><a href="#sites">Sites</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <a href="#contact" className="nav-btn">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            Texas &middot; ERCOT &middot; Powered Land
          </div>
          <h1 className="hero-title">
            The <span className="accent">Digital Land</span>
            <br />
            Dividend of the
            <br />
            <span className="under">AI Era</span>
          </h1>
          <div className="hero-divider" />
          <p className="hero-body">
            We acquire, upgrade, and trade AI-grade Powered Land &mdash; converting
            bitcoin mining sites and raw land into grid-connected infrastructure
            assets. Built for the energy-scarce era.
          </p>
          <div className="cta-row">
            <a href="#contact" className="cta-primary">Request a Meeting</a>
            <a href="#audiences" className="cta-ghost">Explore what we do &rarr;</a>
          </div>
        </div>
        <div className="hero-kicker">
          Infrastructure Alpha Fund &middot; Confidential &middot; For Qualified Parties Only
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem">
        <div className="problem-inner">
          <div className="p-block">
            <div className="p-label">The Problem</div>
            <div className="p-head">Power Scarcity is the New Land Scarcity</div>
            <p className="p-body">
              AI demand is surging. Data center capacity is insufficient. ERCOT
              interconnection queues have reached historic lengths. Grid-connected,
              Tier-III-ready land has become the scarcest strategic asset of the
              decade.
            </p>
          </div>
          <div className="p-divider" />
          <div className="p-block">
            <div className="p-label">The Bottleneck</div>
            <div className="p-head">Transformers Are Holding Back Billions in Capacity</div>
            <p className="p-body">
              Industry-standard transformer lead times have stretched to 24&ndash;48
              months &mdash; halting planned data center deployments across the
              country. The supply chain is broken. Speed of delivery is now a
              competitive weapon.
            </p>
          </div>
          <div className="p-divider" />
          <div className="p-block">
            <div className="p-label">Our Answer</div>
            <div className="p-head">Raw Land &rarr; Powered Land: A Structural Arbitrage</div>
            <p className="p-body">
              We combine deep ERCOT grid expertise, direct transformer manufacturer
              relationships, and a rolling asset development model to unlock value
              that others cannot access &mdash; and deliver it faster than anyone
              else in the market.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section id="audiences">
        <div className="section-header">
          <div>
            <div className="sh-eyebrow">How We Work</div>
            <h2 className="sh-title">
              Three Ways to
              <br />
              Partner With Us
            </h2>
          </div>
          <p className="sh-sub">
            Each engagement is confidential. All inquiries begin with a mutual NDA.
          </p>
        </div>

        <div className="cards">
          <div className="aud-card lp">
            <div className="card-num">01</div>
            <div className="card-icon">&#x25C8;</div>
            <h3 className="card-title">LP Investors</h3>
            <p className="card-body">
              Gain exposure to one of the most supply-constrained assets of the AI
              era through an institutional-grade fund structure. We offer hard asset
              collateral, strict LP governance protections, and a disciplined
              value-add strategy in the Texas ERCOT market.
            </p>
            <a href="#contact" className="card-cta">
              Request Fund Information Package <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="aud-card land">
            <div className="card-num">02</div>
            <div className="card-icon">&#x25C9;</div>
            <h3 className="card-title">Powered Land Buyers</h3>
            <p className="card-body">
              For Hyperscalers, Neoclouds, and data center operators who need
              AI-ready, grid-connected sites in Texas without the 24&ndash;48 month
              interconnection wait. We deliver shovel-ready land with equipment on
              order, permits secured, and cooling pre-engineered.
            </p>
            <a href="#contact" className="card-cta">
              Inquire About Available Sites <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="aud-card scm">
            <div className="card-num">03</div>
            <div className="card-icon">&#x25C7;</div>
            <h3 className="card-title">Supply Chain Solution</h3>
            <p className="card-body">
              Our team has cultivated direct transformer manufacturer relationships
              across North America and Mexico &mdash; enabling 6&ndash;18 month
              delivery timelines when the market standard is 24&ndash;48 months. We
              make this capability available to strategic partners.
            </p>
            <a href="#contact" className="card-cta">
              Discuss Your Requirements <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* SITES FOR SALE */}
      <section id="sites">
        <div className="sites-inner">
          <div className="sh-eyebrow">Available Now</div>
          <h2 className="sh-title">Sites for Sale</h2>
          <p className="sites-intro">
            Energized, grid-connected infrastructure sites ready for immediate
            deployment. Each listing has been vetted for power reliability,
            connectivity, and proximity to critical supply corridors.
          </p>

          <div className="site-card">
            <div className="site-card-header">
              <div className="site-badge">Featured Listing</div>
              <h3 className="site-card-title">
                Texas ERCOT &mdash; 40-Acre Powered Site
              </h3>
              <p className="site-card-tagline">
                40 Acres &bull; 25MW Available Now &bull; Natural Gas Pipeline
                &bull; Fiber Connectivity &bull; Water Access &bull; 90 Minutes
                from Houston
              </p>
            </div>

            <div className="site-card-body">
              <div className="site-table-wrap">
                <table className="site-table">
                  <thead>
                    <tr>
                      <th>Infrastructure Asset</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Site Size</td>
                      <td>40 Acres</td>
                    </tr>
                    <tr>
                      <td>Available Capacity</td>
                      <td>25 MW immediately available</td>
                    </tr>
                    <tr>
                      <td>Grid Status</td>
                      <td>Energized and operational</td>
                    </tr>
                    <tr>
                      <td>Natural Gas Infrastructure</td>
                      <td>
                        Natural gas pipeline available on or near the site
                      </td>
                    </tr>
                    <tr>
                      <td>Connectivity</td>
                      <td>Fiber internet access</td>
                    </tr>
                    <tr>
                      <td>Water Access</td>
                      <td>Available on-site</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>Approximately 90 minutes from Houston</td>
                    </tr>
                    <tr>
                      <td>Use Cases</td>
                      <td>
                        AI Data Centers, HPC, Cloud Infrastructure, Digital
                        Asset Computing
                      </td>
                    </tr>
                    <tr>
                      <td>Deployment Timeline</td>
                      <td>Accelerated compared to greenfield developments</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="site-cta-row">
                <a href="#contact" className="cta-primary">
                  Request Site Details
                </a>
                <a href="#contact" className="cta-ghost">
                  Schedule a Site Visit &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="team-inner">
          <div className="sh-eyebrow" style={{ color: "var(--gold)" }}>
            Management Team
          </div>
          <h2 className="sh-title">Finance &times; Power &times; Execution</h2>

          <div className="team-grid">
            <div className="member">
              <div
                className="member-initial"
                style={{ background: "rgba(200,146,42,.15)", color: "var(--gold)" }}
              >
                V
              </div>
              <div className="member-name">Victoria</div>
              <div className="member-title" style={{ color: "var(--gold)" }}>
                Managing Partner &middot; Business Development &amp; Offtake
              </div>
              <p className="member-desc">
                Leads business development, strategic partnerships, and offtake
                agreements. Drives deal origination, client relationships, and
                revenue growth across all fund verticals.
              </p>
            </div>
            <div className="member">
              <div
                className="member-initial"
                style={{ background: "rgba(11,163,196,.15)", color: "var(--wire2)" }}
              >
                J
              </div>
              <div className="member-name">Jeff</div>
              <div className="member-title" style={{ color: "var(--wire2)" }}>
                Operating Partner &middot; Power &amp; Engineering
              </div>
              <p className="member-desc">
                Deep operational expertise in the Texas ERCOT power market. Leads site
                evaluation, grid interconnection engineering, and transformer vendor
                relationships.
              </p>
            </div>
            <div className="member">
              <div
                className="member-initial"
                style={{ background: "rgba(52,211,153,.12)", color: "#34D399" }}
              >
                L
              </div>
              <div className="member-name">Livia</div>
              <div className="member-title" style={{ color: "#34D399" }}>
                Operating Partner &middot; Supply Chain &amp; Operations
              </div>
              <p className="member-desc">
                Leads supply chain optimization, transformer lead time reduction,
                greenfield site selection, and operational compliance across all fund
                projects.
              </p>
            </div>
          </div>

          <div className="advisor-note">
            <strong>Advisory &amp; Risk Oversight:</strong> Our strategic direction
            is guided by an Advisory and Risk Committee of elite Wall Street
            institutional bankers specializing in compliance, governance, and
            structured finance. Supported by top-tier regional legal experts and
            specialized energy consultants, the committee maintains a world-class
            risk management standard.
            <br /><br />
            We actively hedge macro-level exposure by continuously referring and
            integrating real-time market intelligence from the Compute Exchange
            index, tracking pricing trends to proactively safeguard our AI
            infrastructure investments.
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="contact-label">Get In Touch</div>
            <h2 className="contact-title">
              Start a
              <br />
              Confidential
              <br />
              Conversation
            </h2>
            <p className="contact-body">
              All inquiries are handled with strict confidentiality. A mutual NDA is
              available upon request before any information is exchanged. We typically
              respond within 24 hours.
            </p>

            <div className="contact-detail">
              <div className="detail-dot" style={{ background: "var(--gold)" }} />
              <div>
                <div className="detail-label">Managing Partner</div>
                <div className="detail-val">Victoria</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-dot" style={{ background: "var(--wire)" }} />
              <div>
                <div className="detail-label">Focus Region</div>
                <div className="detail-val">
                  Texas ERCOT &nbsp;&middot;&nbsp; DFW + Houston&ndash;SA &nbsp;&middot;&nbsp; New York
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-dot" style={{ background: "#34D399" }} />
              <div>
                <div className="detail-label">Availability</div>
                <div className="detail-val">Response within 24 hours</div>
              </div>
            </div>
          </div>

          <div className="form-wrap" id="form-wrap">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-headline">
                  Request Information or a Meeting
                </div>

                <div className="f-2col">
                  <div className="f-row">
                    <label>First Name</label>
                    <input name="firstName" type="text" placeholder="John" required />
                  </div>
                  <div className="f-row">
                    <label>Last Name</label>
                    <input name="lastName" type="text" placeholder="Smith" required />
                  </div>
                </div>

                <div className="f-row">
                  <label>Organization</label>
                  <input
                    name="organization"
                    type="text"
                    placeholder="Fund / Family Office / Company"
                  />
                </div>

                <div className="f-row">
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@organization.com"
                    required
                  />
                </div>

                <div className="f-row">
                  <label>I am inquiring about</label>
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>
                      Select your interest...
                    </option>
                    <option>LP Investment in the Fund</option>
                    <option>Acquiring Powered Land</option>
                    <option>Supply Chain / Transformer Solution</option>
                    <option>Mining Site Sale or Conversion</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="f-row">
                  <label>Message (optional)</label>
                  <textarea name="message" placeholder="Brief description of your situation or any specific questions..." />
                </div>

                <div className="nda-row">
                  <input type="checkbox" id="nda-check" required />
                  <label htmlFor="nda-check">
                    I confirm I am a{" "}
                    <strong>
                      qualified investor, accredited investor, or professional
                      counterparty
                    </strong>
                    , and I understand this inquiry is subject to strict
                    confidentiality. I consent to being contacted by Infrastructure
                    Alpha Fund.
                  </label>
                </div>

                {error && (
                  <div style={{ color: "#ef4444", fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {error}
                  </div>
                )}

                <button type="submit" className="f-submit" disabled={sending}>
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            ) : (
              <div className="success-msg show">
                <div className="check">&#x2713;</div>
                <h4>Thank you &mdash; we&apos;ll be in touch shortly.</h4>
                <p>
                  You&apos;ll receive a response within 24 hours. All communication
                  remains strictly confidential.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <a href="#hero" className="footer-logo">
              Infrastructure <em>Alpha</em> Fund
            </a>
            <ul className="footer-links">
              <li><a href="#problem">About</a></li>
              <li><a href="#audiences">Work With Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <p className="disclaimer">
            <strong>Legal Disclaimer:</strong> This website is for informational
            purposes only and does not constitute an offer to sell, or a
            solicitation of an offer to buy, any securities or investment products.
            Any offering of fund interests will be made only to qualified investors
            pursuant to applicable exemptions from registration, and only through
            formal offering documents including a Private Placement Memorandum (PPM)
            and Limited Partnership Agreement (LPA). Past performance is not
            indicative of future results. All forward-looking statements,
            projections, and target returns are subject to significant risks,
            uncertainties, and assumptions that may cause actual results to differ
            materially. Infrastructure Alpha Fund is not registered as an investment
            adviser with the SEC or any state securities authority. This website does
            not constitute investment, tax, or legal advice. Prospective investors
            should consult their own advisors before making any investment decision.{" "}
            <strong>CONFIDENTIAL &mdash; FOR QUALIFIED PARTIES ONLY.</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
