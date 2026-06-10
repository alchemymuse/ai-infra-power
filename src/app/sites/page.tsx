"use client";

export default function SitesPage() {
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

      {/* SITES INDEX */}
      <section id="sites" style={{ paddingTop: "140px" }}>
        <div className="sites-inner">
          <div className="sh-eyebrow">Infrastructure Portfolio</div>
          <h2 className="sh-title">Sites for Sale</h2>
          <p className="sites-intro">
            AI-grade powered land across the Texas ERCOT market. Browse
            sites that are energized and ready today, or explore our
            development pipeline for future capacity.
          </p>

          <div className="sites-hub">
            <a href="/sites/available" className="sites-hub-card shc-now">
              <div className="shc-icon">&#x26A1;</div>
              <div className="shc-badge" style={{ color: "var(--gold)", background: "rgba(200,146,42,.12)", borderColor: "rgba(200,146,42,.25)" }}>
                Available Now
              </div>
              <h3 className="shc-title">Power Available Now</h3>
              <p className="shc-desc">
                Energized, grid-connected sites ready for immediate deployment.
                25MW+ capacity online today with full infrastructure in place.
              </p>
              <span className="shc-link" style={{ color: "var(--gold)" }}>
                View Available Sites &rarr;
              </span>
            </a>

            <a href="/sites/future" className="sites-hub-card shc-future">
              <div className="shc-icon">&#x1F50C;</div>
              <div className="shc-badge" style={{ color: "var(--wire2)", background: "rgba(11,163,196,.12)", borderColor: "rgba(11,163,196,.25)" }}>
                Pipeline
              </div>
              <h3 className="shc-title">Future Power Available</h3>
              <p className="shc-desc">
                Sites under development with 50&ndash;200MW in the ERCOT
                interconnection queue. Secure early access at pre-development pricing.
              </p>
              <span className="shc-link" style={{ color: "var(--wire2)" }}>
                View Pipeline Sites &rarr;
              </span>
            </a>
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
