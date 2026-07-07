export default function renderAdmissionFees() {
  return `
    <section class="container py-4 animate-fade-in">
      <div class="text-center mb-4" style="margin-bottom: 3rem;">
        <h1>Admission & Fees</h1>
        <p style="font-size: 1.25rem; color: var(--dark-charcoal); max-width: 800px; margin: 0 auto;">
          Join our growing community. We offer straightforward and transparent enrollment processes.
        </p>
      </div>

      <div class="glass-card mb-4" style="background: linear-gradient(135deg, var(--pure-white), var(--soft-gray)); border-left: 6px solid var(--primary-maroon); margin-bottom: 3rem;">
        <h2 style="color: var(--primary-maroon); margin-bottom: 1rem;">📢 Enrollment Notice</h2>
        <p style="font-size: 1.2rem; font-weight: 500;">
          Now admitting new students in <strong>Junior Secondary (Grade 7 to 9)</strong> and <strong>Senior Secondary (Grade 10 to 12)</strong>.
        </p>
        <div style="margin-top: 1.5rem;">
          <a href="#participate" class="btn btn-primary">Apply Now</a>
        </div>
      </div>

      <div class="glass-card" style="background: var(--pure-white);">
        <h2 style="color: var(--accent-red); margin-bottom: 1.5rem;">Payment Details</h2>
        
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="background: var(--dark-charcoal); color: var(--pure-white);">
                <th style="padding: 1rem; border-radius: 8px 0 0 0;">Payment Method</th>
                <th style="padding: 1rem;">Account Name</th>
                <th style="padding: 1rem;">Number/Paybill</th>
                <th style="padding: 1rem; border-radius: 0 8px 0 0;">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--glass-border);">
                <td style="padding: 1rem; font-weight: 600;">Diamond Trust Bank</td>
                <td style="padding: 1rem;">Nambale Shiners High School</td>
                <td style="padding: 1rem; font-family: monospace; font-size: 1.1rem;">0353815001</td>
                <td style="padding: 1rem; color: var(--dark-charcoal);">Branch Code: 048</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 600;">M-Pesa Paybill</td>
                <td style="padding: 1rem;">Nambale Shiners</td>
                <td style="padding: 1rem; font-family: monospace; font-size: 1.1rem; color: var(--accent-red); font-weight: bold;">518800</td>
                <td style="padding: 1rem; color: var(--dark-charcoal);">Use A/C: <strong>0353815001</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
