"use client";

export default function SitesAvailablePage() {
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

      {/* SITES AVAILABLE NOW */}
      <section id="sites" style={{ paddingTop: "140px" }}>
        <div className="sites-inner">
          <div className="sites-nav-row">
            <a href="/sites/available" className="sites-tab active">Power Available Now</a>
            <a href="/sites/future" className="sites-tab">Future Power Available</a>
          </div>

          <div className="sh-eyebrow">Available Now</div>
          <h2 className="sh-title">Power Available Now</h2>
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
                <a href="/#contact" className="cta-primary">
                  Request Site Details
                </a>
                <a href="/#contact" className="cta-ghost">
                  Schedule a Site Visit &rarr;
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
