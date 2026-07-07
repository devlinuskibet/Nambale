export default function renderParticipate() {
  return `
    <section class="container py-4 animate-fade-in">
      <div class="text-center mb-4" style="margin-bottom: 3rem;">
        <h1>Participate & Partner With Us</h1>
        <p style="font-size: 1.25rem; color: var(--dark-charcoal); max-width: 800px; margin: 0 auto;">
          We believe in the power of community. Join hands with us to nurture tomorrow's leaders.
        </p>
      </div>

      <div class="flex-wrap" style="margin-bottom: 4rem;">
        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="color: var(--primary-maroon); margin-bottom: 1.5rem;">Partnership Benefits</h2>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; font-size: 1.1rem;">
              <span style="color: var(--accent-red); font-size: 1.5rem;">✨</span> Make an Impact
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; font-size: 1.1rem;">
              <span style="color: var(--accent-red); font-size: 1.5rem;">💡</span> Inspire Youth
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; font-size: 1.1rem;">
              <span style="color: var(--accent-red); font-size: 1.5rem;">📈</span> Gain Experience
            </li>
            <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; font-size: 1.1rem;">
              <span style="color: var(--accent-red); font-size: 1.5rem;">🤝</span> Holistic Community
            </li>
          </ul>
        </div>

        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="color: var(--accent-red); margin-bottom: 1.5rem;">Volunteer Program Areas</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌱</div>
              <div style="font-weight: 600;">Environment</div>
            </div>
            <div style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗣️</div>
              <div style="font-weight: 600;">Mentorship</div>
            </div>
            <div style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎨</div>
              <div style="font-weight: 600;">Talent/Sports</div>
            </div>
            <div style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">💻</div>
              <div style="font-weight: 600;">ICT/Digital Skills</div>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card" style="background: var(--dark-charcoal); color: var(--pure-white);">
        <h2 style="color: var(--pure-white); text-align: center; margin-bottom: 2rem;">Contact Us</h2>
        <div class="flex-wrap" style="align-items: flex-start;">
          <div style="flex: 1; min-width: 250px;">
            <div style="margin-bottom: 1.5rem;">
              <h3 style="color: var(--soft-gray); font-size: 1.1rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Address</h3>
              <p style="font-size: 1.2rem; font-weight: 500;">📍 Okatekok Stage, Nambale Town<br>off Busia-Bungoma Road</p>
            </div>
            <div>
              <h3 style="color: var(--soft-gray); font-size: 1.1rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Phone</h3>
              <p style="font-size: 1.2rem; font-weight: 500;">📞 +254 728 372 706</p>
            </div>
          </div>
          
          <div style="flex: 1; min-width: 250px;">
            <form style="display: flex; flex-direction: column; gap: 1rem;" onsubmit="event.preventDefault(); alert('Thank you for reaching out! We will get back to you soon.');">
              <input type="text" placeholder="Your Name" required style="padding: 1rem; border-radius: 8px; border: none; font-family: inherit; font-size: 1rem;">
              <input type="email" placeholder="Your Email" required style="padding: 1rem; border-radius: 8px; border: none; font-family: inherit; font-size: 1rem;">
              <textarea placeholder="Your Message" rows="4" required style="padding: 1rem; border-radius: 8px; border: none; font-family: inherit; font-size: 1rem; resize: vertical;"></textarea>
              <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
