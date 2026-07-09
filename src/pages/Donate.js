export default function renderDonate() {
  // Mockup for interactive UI script to toggle active states (will use inline JS in HTML or CSS tricks, but since this is a template string, we use inline onclicks or a basic style reset).
  return `
    <div class="animate-fade-in" style="background: var(--soft-gray); min-height: 100vh; padding: 4rem 1rem;">
      <div class="container" style="max-width: 800px; margin: 0 auto; background: var(--pure-white); border-radius: 12px; box-shadow: var(--shadow-lg); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: var(--primary-maroon); color: var(--pure-white); padding: 2rem; text-align: center;">
          <h1 style="color: var(--pure-white); margin-bottom: 0.5rem; font-size: 2rem;">Support Nambale Shiners</h1>
          <p style="opacity: 0.9; font-size: 1.1rem; margin-bottom: 0;">Your contribution helps nurture tomorrow's leaders.</p>
        </div>

        <form id="donate-form" style="padding: 2.5rem;" onsubmit="event.preventDefault(); document.getElementById('donation-success').style.display='block'; this.style.display='none'; window.scrollTo(0, 0);">
          
          <!-- Amount Selection -->
          <div style="margin-bottom: 2.5rem;">
            <h3 style="font-size: 1.25rem; color: var(--dark-charcoal); border-bottom: 2px solid var(--soft-gray); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Donation Amount</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
              <label class="amount-btn" style="position: relative; display: block;" onclick="document.querySelectorAll('.amount-btn div').forEach(el=>{el.style.background='transparent'; el.style.color='var(--primary-maroon)'}); this.querySelector('div').style.background='var(--primary-maroon)'; this.querySelector('div').style.color='white'; document.getElementById('custom-amount').value='';">
                <input type="radio" name="amount" value="10" style="position: absolute; opacity: 0; width: 0; height: 0;">
                <div style="border: 2px solid var(--primary-maroon); border-radius: 8px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s; background: transparent; color: var(--primary-maroon);">
                  <div style="font-weight: 700; font-size: 1.2rem;">KES 1,300</div>
                  <div style="font-size: 0.85rem; opacity: 0.8;">($10 USD)</div>
                </div>
              </label>

              <label class="amount-btn" style="position: relative; display: block;" onclick="document.querySelectorAll('.amount-btn div').forEach(el=>{el.style.background='transparent'; el.style.color='var(--primary-maroon)'}); this.querySelector('div').style.background='var(--primary-maroon)'; this.querySelector('div').style.color='white'; document.getElementById('custom-amount').value='';">
                <input type="radio" name="amount" value="50" style="position: absolute; opacity: 0; width: 0; height: 0;" checked>
                <div style="border: 2px solid var(--primary-maroon); border-radius: 8px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s; background: var(--primary-maroon); color: white;">
                  <div style="font-weight: 700; font-size: 1.2rem;">KES 6,500</div>
                  <div style="font-size: 0.85rem; opacity: 0.8;">($50 USD)</div>
                </div>
              </label>

              <label class="amount-btn" style="position: relative; display: block;" onclick="document.querySelectorAll('.amount-btn div').forEach(el=>{el.style.background='transparent'; el.style.color='var(--primary-maroon)'}); this.querySelector('div').style.background='var(--primary-maroon)'; this.querySelector('div').style.color='white'; document.getElementById('custom-amount').value='';">
                <input type="radio" name="amount" value="100" style="position: absolute; opacity: 0; width: 0; height: 0;">
                <div style="border: 2px solid var(--primary-maroon); border-radius: 8px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s; background: transparent; color: var(--primary-maroon);">
                  <div style="font-weight: 700; font-size: 1.2rem;">KES 13,000</div>
                  <div style="font-size: 0.85rem; opacity: 0.8;">($100 USD)</div>
                </div>
              </label>
              
              <label class="amount-btn" style="position: relative; display: block;" onclick="document.querySelectorAll('.amount-btn div').forEach(el=>{el.style.background='transparent'; el.style.color='var(--primary-maroon)'}); this.querySelector('div').style.background='var(--primary-maroon)'; this.querySelector('div').style.color='white'; document.getElementById('custom-amount').focus();">
                <input type="radio" name="amount" value="custom" style="position: absolute; opacity: 0; width: 0; height: 0;">
                <div style="border: 2px solid var(--primary-maroon); border-radius: 8px; padding: 0.5rem; text-align: center; cursor: pointer; transition: all 0.2s; display: flex; align-items: center;">
                  <input type="text" inputmode="numeric" id="custom-amount" placeholder="Other Amount" style="width: 100%; padding: 0.5rem; border: none; background: transparent; outline: none; font-weight: 700; font-size: 1rem; text-align: center; color: inherit;">
                </div>
              </label>
            </div>
            
            <div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem; background: var(--soft-gray); padding: 1rem; border-radius: 8px;">
              <input type="checkbox" id="cover-fees" style="width: 18px; height: 18px; accent-color: var(--primary-maroon);">
              <label for="cover-fees" style="font-size: 0.95rem; cursor: pointer;">Yes, I'd like to add a small percentage to cover transaction fees so 100% of my donation goes to the school.</label>
            </div>
          </div>

          <!-- Additional Info -->
          <div style="margin-bottom: 2.5rem;">
            <h3 style="font-size: 1.25rem; color: var(--dark-charcoal); border-bottom: 2px solid var(--soft-gray); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Dedication & Comments</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">Comments (Optional)</label>
                <textarea rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px; font-family: inherit; resize: vertical;" placeholder="Leave a comment with your donation..."></textarea>
              </div>
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">In Honor Of (Optional)</label>
                <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px; font-family: inherit;" placeholder="Who would you like to dedicate this to?">
              </div>
            </div>
          </div>

          <!-- Billing Details -->
          <div style="margin-bottom: 2.5rem;">
            <h3 style="font-size: 1.25rem; color: var(--dark-charcoal); border-bottom: 2px solid var(--soft-gray); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Billing Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div style="grid-column: span 1;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">First Name *</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
              </div>
              <div style="grid-column: span 1;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">Last Name *</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
              </div>
              <div style="grid-column: span 2;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">Email Address *</label>
                <input type="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
              </div>
              <div style="grid-column: span 2;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">Street Address *</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
              </div>
              <div style="grid-column: span 1;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">City / Town *</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
              </div>
              <div style="grid-column: span 1;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem;">Country *</label>
                <select required style="width: 100%; padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px; background: white;">
                  <option value="Kenya">Kenya</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Payment Methods Mockup -->
          <div style="margin-bottom: 2.5rem;">
            <h3 style="font-size: 1.25rem; color: var(--dark-charcoal); border-bottom: 2px solid var(--soft-gray); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Payment Method</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
              <div style="flex: 1; min-width: 100px; text-align: center; padding: 0.75rem; background: var(--primary-maroon); color: white; border-radius: 6px; font-weight: 600; cursor: pointer; border: 1px solid var(--primary-maroon);">M-PESA / Mobile</div>
              <div style="flex: 1; min-width: 100px; text-align: center; padding: 0.75rem; background: transparent; color: #666; border-radius: 6px; font-weight: 600; cursor: pointer; border: 1px solid #ccc;">Debit / Credit</div>
              <div style="flex: 1; min-width: 100px; text-align: center; padding: 0.75rem; background: transparent; color: #666; border-radius: 6px; font-weight: 600; cursor: pointer; border: 1px solid #ccc;">PayPal</div>
            </div>
            
            <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px;">
              <p style="margin-bottom: 1rem; font-size: 0.95rem; text-align: center; color: #555;">Enter your M-Pesa phone number. A prompt will be sent to your phone to complete the transaction.</p>
              <input type="tel" placeholder="e.g. 0712 345 678" style="width: 100%; padding: 1rem; border: 1px solid #ccc; border-radius: 6px; text-align: center; font-size: 1.2rem; letter-spacing: 2px;">
            </div>
          </div>

          <!-- Submit -->
          <div style="text-align: center;">
            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.2rem; font-size: 1.2rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Submit Payment
            </button>
          </div>

        </form>

        <!-- Success Message (Hidden by default) -->
        <div id="donation-success" style="display: none; padding: 4rem 2rem; text-align: center;">
          <div style="width: 80px; height: 80px; background: #10B981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 style="color: var(--dark-charcoal); margin-bottom: 1rem;">Thank you for your generosity!</h2>
          <p style="font-size: 1.1rem; color: #666; max-width: 500px; margin: 0 auto 2rem;">Your mock donation has been successfully "processed". We deeply appreciate your support for Nambale Shiners High School.</p>
          <button onclick="document.getElementById('donation-success').style.display='none'; document.getElementById('donate-form').style.display='block'; document.getElementById('donate-form').reset(); window.scrollTo(0, 0);" class="btn btn-outline">Make another donation</button>
        </div>

      </div>
    </div>
  `;
}
