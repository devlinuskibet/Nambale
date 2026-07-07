export default function renderAdmissionFees() {
  return `
    <section class="container py-4 animate-fade-in">
      <div class="text-center mb-4" style="margin-bottom: 3rem;">
        <h1>Admission & Fees</h1>
        <p style="font-size: 1.25rem; color: var(--dark-charcoal); max-width: 800px; margin: 0 auto;">
          Join a Winning Community
        </p>
      </div>

      <div class="glass-card mb-4" style="background: linear-gradient(135deg, var(--pure-white), var(--soft-gray)); border-left: 6px solid var(--primary-maroon); margin-bottom: 3rem;">
        <h2 style="color: var(--primary-maroon); margin-bottom: 1rem;">📢 Enrollment is Ongoing</h2>
        <p style="font-size: 1.15rem; margin-bottom: 1.5rem;">
          Nambale Shiners High School is actively hosting education stakeholders, parents, and community leaders who continue to praise our exceptional discipline standards, academic commitment, and impeccably clean environment. Secure your child's future in an ecosystem designed for holistic, value-based growth.
        </p>
        <p style="font-size: 1.2rem; font-weight: 500;">
          Now admitting new students in <strong>Junior Secondary (Grade 7 to 9)</strong> and <strong>Senior Secondary (Grade 10 to 12)</strong>.
        </p>
        
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <a href="#" onclick="event.preventDefault(); alert('Application form will be available shortly.');" class="btn btn-primary">
            📥 Download Admission Application Form
          </a>
          <span style="font-size: 0.95rem; color: var(--dark-charcoal);">
            Print, fill, and send via WhatsApp to <strong>+254 728 372 706</strong>
          </span>
        </div>
      </div>

      <div class="glass-card" style="background: var(--pure-white);">
        <h2 style="color: var(--accent-red); margin-bottom: 1.5rem;">School Fees Payment</h2>
        <p style="margin-bottom: 2rem;">NB: Fees must be paid in full before the opening date of each term.</p>
        
        <div class="grid grid-cols-3" style="margin-bottom: 2rem;">
          <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px;">
            <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">🏦 Bank Deposits</h3>
            <p style="font-size: 0.95rem;">Payments can be made via cash deposit at any branch of <strong>Diamond Trust Bank</strong>. An official deposit slip must be presented to the accounts office two weeks prior to school opening.</p>
          </div>
          
          <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px;">
            <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">💸 Bank Transfers</h3>
            <p style="font-size: 0.95rem;">Direct account-to-account transfers must be authorized by your bank manager. A debit slip confirmation must be submitted to the accounts office.</p>
          </div>
          
          <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px;">
            <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">📝 Cheques</h3>
            <p style="font-size: 0.95rem;">Banker’s cheques or official company cheques are accepted at the school accounts office at least two weeks before the term begins.</p>
          </div>
        </div>
        
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
