"use client";

export default function SitesFuturePage() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="logo">
          Infrastructure <em>Alpha</em> Fund
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/#problem">About</a></li>
            <li><a href="/#audiences">Work With Us</a></li>
            <li><a href="/sites" className="nav-active">Sites</a></li>
            <li><a href="/#team">Team</a></li>
            <li>
              <a href="https://www.linkedin.com/company/alpha-ip" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <a href="/#contact" className="nav-btn">Contact</a>
        </div>
      </nav>

      {/* FUTURE POWER */}
      <section id="sites" style={{ paddingTop: "140px" }}>
        <div className="sites-inner">
          <div className="sites-nav-row">
            <a href="/sites/available" className="sites-tab">Power Available Now</a>
            <a href="/sites/future" className="sites-tab active">Future Power Available</a>
          </div>

          <div className="sh-eyebrow" style={{ color: "var(--wire2)" }}>Pipeline</div>
          <h2 className="sh-title">Future Power Available</h2>
          <p className="sites-intro">
            Sites currently under development with power capacity in the
            interconnection pipeline. Secure early access to tomorrow&apos;s
            AI-ready infrastructure at today&apos;s pricing.
          </p>

          <div className="site-card">
            <div className="site-card-header" style={{ background: "linear-gradient(135deg,rgba(11,163,196,.06),rgba(52,211,153,.04))" }}>
              <div className="site-badge" style={{ color: "var(--wire2)", background: "rgba(11,163,196,.12)", borderColor: "rgba(11,163,196,.25)" }}>
                In Development
              </div>
              <h3 className="site-card-title">
                Texas ERCOT &mdash; Future Expansion Sites
              </h3>
              <p className="site-card-tagline">
                Multiple sites in ERCOT interconnection queue &bull; 50&ndash;200MW
                planned capacity &bull; Targeted completion 2026&ndash;2027
              </p>
            </div>

            <div className="site-card-body">
              <div className="site-table-wrap">
                <table className="site-table">
                  <thead>
                    <tr>
                      <th>Development Asset</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pipeline Capacity</td>
                      <td>50&ndash;200 MW across multiple sites</td>
                    </tr>
                    <tr>
                      <td>Grid Status</td>
                      <td>In ERCOT interconnection queue</td>
                    </tr>
                    <tr>
                      <td>Development Stage</td>
                      <td>Land secured, permitting and engineering in progress</td>
                    </tr>
                    <tr>
                      <td>Transformer Procurement</td>
                      <td>Long-lead equipment on order via direct manufacturer relationships</td>
                    </tr>
                    <tr>
                      <td>Target Region</td>
                      <td>Texas ERCOT &mdash; DFW, Houston&ndash;SA corridor</td>
                    </tr>
                    <tr>
                      <td>Infrastructure</td>
                      <td>Gas pipeline access, fiber, water planned for each site</td>
                    </tr>
                    <tr>
                      <td>Use Cases</td>
                      <td>AI Data Centers, HPC, Cloud Infrastructure, Hyperscale</td>
                    </tr>
                    <tr>
                      <td>Availability</td>
                      <td>Pre-lease and forward commitments available now</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="site-cta-row">
                <a href="/#contact" className="cta-primary">
                  Discuss Pipeline Access
                </a>
                <a href="/#contact" className="cta-ghost">
                  Request Development Timeline &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <a href="/" className="footer-logo">
              Infrastructure <em>Alpha</em> Fund
            </a>
            <ul className="footer-links">
              <li><a href="/#problem">About</a></li>
              <li><a href="/#audiences">Work With Us</a></li>
              <li><a href="/sites">Sites</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li>
                <a href="https://www.linkedin.com/company/alpha-ip" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
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
