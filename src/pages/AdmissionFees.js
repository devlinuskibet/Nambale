export default function renderAdmissionFees() {
  return `
    <section class="hero animate-fade-in" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/admission/admission%20and%20fees.webp') center/cover; padding: 8rem 1rem 4rem 1rem;">
      <div class="container" style="max-width: 1000px; margin: 0 auto; padding-left: 2rem;">
        <h1 style="color: var(--pure-white); font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); text-align: left;">Admission and Fees</h1>
        <p style="color: var(--pure-white); font-size: 1rem; font-weight: 500; text-align: left;">
          <a href="#home" style="color: var(--pure-white); text-decoration: none;">Home</a> - <span style="color: #ffcc00;">Admission And Fees</span>
        </p>
      </div>
    </section>

    <section style="background: var(--primary-maroon); color: var(--pure-white); padding: 4rem 1rem; text-align: center; font-family: 'Inter', sans-serif;">
      <div class="container" style="max-width: 850px; margin: 0 auto;">
        
        <!-- Admission -->
        <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: #ffcc00;">Admission</h2>
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1.5rem;">Join a Winning Community</h3>
        <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
          Nambale Shiners High School is actively hosting education stakeholders, parents, and community leaders who continue to praise our exceptional discipline standards, academic commitment, and impeccably clean environment. Secure your child's future in an ecosystem designed for holistic, value-based growth.
        </p>
        
        <p style="color: #28a745; font-style: italic; font-size: 1.05rem; font-weight: 600; margin-bottom: 2rem;">
          Now admitting new students in Junior Secondary (Grade 7 to 9) and Senior Secondary (Grade 10 to 12).
        </p>
        
        <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">
          If you wish your child to join our school, please download, print and <strong>fill</strong> this form and send it back to us or photograph it and send it via whatsapp to the following number:
        </p>
        
        <div style="margin-bottom: 3rem;">
          <span style="background: var(--pure-white); color: var(--primary-maroon); font-weight: 700; font-size: 1.1rem; padding: 0.25rem 0.5rem;">
            +254 728 372 706
          </span>
          <span style="font-weight: 700; font-size: 1rem; margin-left: 0.5rem;">– Shiners High School</span>
        </div>
        
        <a href="/Nambale-Shiners-Secondary-School-Admission-Form.pdf" download="Nambale-Shiners-Secondary-School-Admission-Form.pdf" class="btn" style="background: #28a745; color: white; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; font-size: 0.95rem; padding: 0.8rem 1.5rem; border-radius: 4px; border: none; cursor: pointer; text-decoration: none; margin-bottom: 5rem;">
          Nambale High School Admission Application Form
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-left: 0.5rem;"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
        </a>
        
        <!-- School Fees Payment -->
        <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 2.5rem; color: #ffcc00;">School Fees Payment</h2>
        
        <div style="text-align: left; margin-bottom: 2.5rem;">
          <h3 style="color: #ffcc00; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.25rem;">Bank Deposits</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5;">Payments can be made via cash deposit at any branch of Diamond Trust Bank. An official deposit slip must be presented to the accounts office two weeks prior to school opening.</p>
          
          <h3 style="color: #ffcc00; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.25rem;">Bank Transfers</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5;">Direct account-to-account transfers must be authorized by your bank manager. A debit slip confirmation must be submitted to the accounts office.</p>
          
          <h3 style="color: #ffcc00; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.25rem;">Cheques</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5;">Banker's cheques or official company cheques are accepted at the principal's office at least two weeks before the term begins.</p>
          
          <h3 style="color: #ffcc00; font-size: 1.15rem; font-weight: 700; margin-bottom: 1.5rem;">NB: Fees must be paid in full before the opening date of each term.</h3>
          
          <p style="font-size: 1rem; margin-bottom: 0.75rem;">The school's bank account details are as follows:</p>
        </div>
        
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: center; background: var(--pure-white); color: #000; font-size: 0.85rem; border: 1.5px solid #000;">
            <thead>
              <tr style="border-bottom: 1.5px solid #000;">
                <th style="padding: 0.75rem; border-right: 1.5px solid #000; font-weight: 700; text-transform: uppercase;">BANK NAME</th>
                <th style="padding: 0.75rem; border-right: 1.5px solid #000; font-weight: 700; text-transform: uppercase;">ACCOUNT NAME</th>
                <th style="padding: 0.75rem; border-right: 1.5px solid #000; font-weight: 700; text-transform: uppercase;">ACCOUNT NO / PAYBILL NO</th>
                <th style="padding: 0.75rem; font-weight: 700; text-transform: uppercase;">Branch / Details</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1.5px solid #000;">
                <td style="padding: 0.75rem; border-right: 1.5px solid #000; font-weight: 600;">Diamond Trust Bank</td>
                <td style="padding: 0.75rem; border-right: 1.5px solid #000;">Nambale Shiners High School</td>
                <td style="padding: 0.75rem; border-right: 1.5px solid #000;">0353815001</td>
                <td style="padding: 0.75rem;">Branch Code: 048<br>Use A/C Number as Account Ref</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; border-right: 1.5px solid #000; font-weight: 600;">M-Pesa Paybill</td>
                <td style="padding: 0.75rem; border-right: 1.5px solid #000;">Nambale Shiners</td>
                <td style="padding: 0.75rem; border-right: 1.5px solid #000;">518800</td>
                <td style="padding: 0.75rem;">Use A/C Number as Account Ref</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  `;
}
