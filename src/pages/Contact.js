export default function renderContact() {
  return `
    <!-- Contact Hero Section -->
    <section class="hero animate-fade-in" style="background: linear-gradient(135deg, rgba(92,6,18,0.8), rgba(45,49,52,0.9)), url('/images/home/background-change.webp') center/cover; padding: 6rem 1rem; border-radius: 0 0 20px 20px;">
      <div class="container text-center">
        <h1 style="color: var(--pure-white); font-size: 3.5rem; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.4); margin-bottom: 1rem;">Contact Us</h1>
        <p style="color: var(--soft-gray); font-size: 1.25rem; max-width: 600px; margin: 0 auto;">We would love to hear from you. Get in touch with us today!</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section style="background: #f8f9fa; padding: 5rem 1rem;">
      <div class="container" style="max-width: 1100px; margin: 0 auto;">
        <div class="grid grid-cols-2" style="gap: 3rem; align-items: stretch;">
          
          <!-- Contact Details Card -->
          <div style="background: var(--pure-white); padding: 3rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h2 style="color: var(--primary-maroon); font-size: 2rem; font-weight: 800; margin-bottom: 2rem;">Get In Touch</h2>
              
              <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: rgba(92,6,18,0.1); color: var(--primary-maroon); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                </div>
                <div>
                  <h4 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem;">Phone / WhatsApp</h4>
                  <p style="color: #666; font-size: 1rem; line-height: 1.5;">+254 728 372 706</p>
                  <p style="color: #888; font-size: 0.9rem; margin-top: 0.2rem;">Mon to Fri: 8am - 5pm</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: rgba(92,6,18,0.1); color: var(--primary-maroon); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                </div>
                <div>
                  <h4 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem;">Email Address</h4>
                  <p style="color: #666; font-size: 1rem; line-height: 1.5;">info@shinershighschool.sc.ke</p>
                  <p style="color: #888; font-size: 0.9rem; margin-top: 0.2rem;">We reply within 24 hours</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
                <div style="background: rgba(92,6,18,0.1); color: var(--primary-maroon); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                </div>
                <div>
                  <h4 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem;">Our Location</h4>
                  <p style="color: #666; font-size: 1rem; line-height: 1.5;">Okatekok Stage, Nambale Town<br>off Busia-Bungoma Road<br>P.O. Box 2 - 50409, Nambale</p>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 3rem;">
              <h4 style="color: var(--dark-charcoal); font-size: 1rem; font-weight: 700; margin-bottom: 1rem;">Follow Our Socials</h4>
              <div style="display: flex; gap: 1rem;">
                <a href="#" style="color: var(--primary-maroon); background: rgba(92,6,18,0.05); padding: 0.75rem; border-radius: 50%; transition: all 0.3s ease;"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
                <a href="#" style="color: var(--primary-maroon); background: rgba(92,6,18,0.05); padding: 0.75rem; border-radius: 50%; transition: all 0.3s ease;"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                <a href="#" style="color: var(--primary-maroon); background: rgba(92,6,18,0.05); padding: 0.75rem; border-radius: 50%; transition: all 0.3s ease;"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div style="background: var(--pure-white); padding: 3rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <h2 style="color: var(--dark-charcoal); font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Send a Message</h2>
            <p style="color: #666; font-size: 1rem; margin-bottom: 2rem;">Fill out the form below and our team will get back to you promptly.</p>
            
            <form onsubmit="event.preventDefault(); alert('Message sent successfully! We will contact you soon.');" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <label style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.9rem;">Full Name *</label>
                  <input type="text" placeholder="John Doe" required style="padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary-maroon)'" onblur="this.style.borderColor='#ddd'">
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <label style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.9rem;">Email Address *</label>
                  <input type="email" placeholder="john@example.com" required style="padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary-maroon)'" onblur="this.style.borderColor='#ddd'">
                </div>
              </div>
              
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.9rem;">Phone Number</label>
                <input type="tel" placeholder="+254 7XX XXX XXX" style="padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary-maroon)'" onblur="this.style.borderColor='#ddd'">
              </div>
              
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.9rem;">Your Message *</label>
                <textarea placeholder="How can we help you?" rows="5" required style="padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit; font-size: 1rem; outline: none; resize: vertical; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--primary-maroon)'" onblur="this.style.borderColor='#ddd'"></textarea>
              </div>
              
              <button type="submit" style="background: var(--primary-maroon); color: white; border: none; padding: 1rem; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer; margin-top: 1rem; transition: background 0.3s ease; box-shadow: 0 4px 15px rgba(92,6,18,0.2);">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
