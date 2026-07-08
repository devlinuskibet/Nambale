export default function renderParticipate() {
  return `
    <!-- Hero Section -->
    <section class="animate-fade-in" style="background: var(--pure-white); padding: 6rem 1rem 3rem 1rem; text-align: center;">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <p style="color: var(--primary-maroon); font-weight: 700; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <span>🎓</span> Education for Service and Success
        </p>
        <h1 style="color: var(--primary-maroon); font-size: 3.5rem; font-weight: 800; margin-bottom: 0.5rem;">Participate & Connect</h1>
        <p style="color: var(--primary-maroon); font-size: 1.5rem; font-style: italic; font-weight: 600;">Serve. Inspire. Transform</p>
      </div>
    </section>

    <!-- Why Partner With Shiners -->
    <section style="background: var(--pure-white); padding: 2rem 1rem 4rem 1rem;">
      <div class="container" style="max-width: 1000px; margin: 0 auto;">
        <h2 style="color: var(--accent-red); font-size: 2rem; font-weight: 800; text-transform: uppercase; margin-bottom: 2.5rem; border-bottom: 3px solid #ffcc00; display: inline-block; padding-bottom: 0.5rem;">Why Partner With Shiners?</h2>
        
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
          <div style="background: var(--pure-white); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <h3 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: #28a745; font-size: 1.2rem;">💚</span> Make an Impact
            </h3>
            <p style="color: #555; font-size: 0.95rem; line-height: 1.5;">Drive real, lasting change within the community.</p>
          </div>
          
          <div style="background: var(--pure-white); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <h3 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: #28a745; font-size: 1.2rem;">💚</span> Inspire Youth
            </h3>
            <p style="color: #555; font-size: 0.95rem; line-height: 1.5;">Directly mentor and guide young people toward successful paths.</p>
          </div>
          
          <div style="background: var(--pure-white); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <h3 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: #28a745; font-size: 1.2rem;">💚</span> Gain Experience
            </h3>
            <p style="color: #555; font-size: 0.95rem; line-height: 1.5;">Build real-world leadership, communication, and teamwork skills.</p>
          </div>
          
          <div style="background: var(--pure-white); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <h3 style="color: var(--dark-charcoal); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: #28a745; font-size: 1.2rem;">💚</span> Holistic Community
            </h3>
            <p style="color: #555; font-size: 0.95rem; line-height: 1.5;">Belong to a rapidly growing, highly disciplined academic family.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Our Mission -->
    <section style="background: #f8f9fa; padding: 4rem 1rem;">
      <div class="container" style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <h2 style="color: var(--accent-red); font-size: 2rem; font-weight: 800; text-transform: uppercase; margin-bottom: 3rem;">Support Our Mission</h2>
        
        <div class="grid grid-cols-2" style="align-items: center; gap: 3rem; background: var(--pure-white); padding: 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
          <!-- 4-image collage -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <img src="/images/participate/participate (3).webp" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px 0 0 0;" alt="Support Mission 1" />
            <img src="/images/participate/participate (5).webp" style="width: 100%; height: 150px; object-fit: cover; border-radius: 0 8px 0 0;" alt="Support Mission 2" />
            <img src="/images/participate/participate (6).webp" style="width: 100%; height: 150px; object-fit: cover; border-radius: 0 0 0 8px;" alt="Support Mission 3" />
            <img src="/images/participate/participate (7).webp" style="width: 100%; height: 150px; object-fit: cover; border-radius: 0 0 8px 0;" alt="Support Mission 4" />
          </div>
          
          <div style="text-align: left;">
            <p style="color: var(--dark-charcoal); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; font-weight: 600;">
              At Nambale Shiners High School, we support a large number of students from disadvantaged families; in fact, three-quarters of our student body comes from vulnerable backgrounds. We welcome partnerships with the private sector, government agencies, religious groups, civil society organizations, and well-wishers to give these children a decent stab at education and empowerment for a good life.
            </p>
            <p style="color: var(--primary-maroon); font-size: 1.05rem; line-height: 1.7; font-weight: 700;">
              We highly appreciate donations both in cash and in kind to support school operations, resource expansion, and facility improvements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Volunteer Program -->
    <section style="background: var(--pure-white); padding: 5rem 1rem;">
      <div class="container" style="max-width: 1000px; margin: 0 auto;">
        <div class="grid grid-cols-2" style="align-items: center; gap: 4rem;">
          
          <div>
            <h2 style="color: var(--accent-red); font-size: 2rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.5rem;">Join Our Volunteer Program</h2>
            <p style="color: var(--primary-maroon); font-size: 1rem; line-height: 1.7; font-weight: 600; margin-bottom: 2rem;">
              Do you care about your community and the environment? Do you want to be part of positive change in society? Nambale Shiners High School welcomes volunteers who are passionate about making a difference through service, mentorship, and environmental conservation. Our doors are open to students, teachers, youth leaders, professionals, and community members willing to serve.
            </p>
            
            <h3 style="color: var(--accent-red); font-size: 1.1rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">Areas of Volunteering</h3>
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; text-align: center;">
              <li style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.95rem;">🌱 Environmental Conservation & Community Clean-Ups</li>
              <li style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.95rem;">🗣️ Student Mentorship, Guidance & Motivational Talks</li>
              <li style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.95rem;">🎨 Talent, Co-Curricular & Sports Support</li>
              <li style="color: var(--dark-charcoal); font-weight: 600; font-size: 0.95rem;">💻 ICT & Digital Skills Training</li>
            </ul>
          </div>
          
          <div style="text-align: center; background: #f8f9fa; padding: 3rem; border-radius: 16px; border: 1px dashed #adb5bd;">
            <h3 style="color: #28a745; font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">Download the form below to join.</h3>
            <a href="#" onclick="event.preventDefault(); alert('Volunteer form will be available shortly.');" style="background: #6c757d; color: white; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; font-size: 1rem; padding: 1rem 2rem; border-radius: 4px; border: none; cursor: pointer; text-decoration: none; width: 100%; max-width: 350px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: background 0.3s ease;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
              Shiners High School Volunteer Form
            </a>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Contact & Application Form Section -->
    <section style="background: #4a7c59; padding: 4rem 1rem;">
      <div class="container" style="max-width: 1000px; margin: 0 auto;">
        <div class="grid grid-cols-2" style="background: var(--pure-white); border-radius: 8px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.2);">
          
          <!-- Contact Info -->
          <div style="padding: 3rem;">
            <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 2rem;">Reach Out Directly To Us</h3>
            
            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 2rem;">
              <div style="background: #20c997; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
              </div>
              <div>
                <h4 style="color: var(--dark-charcoal); font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem;">Phone/ WhatsApp</h4>
                <p style="color: #777; font-size: 0.9rem;">+254 728 372 706</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 2rem;">
              <div style="background: #20c997; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
              </div>
              <div>
                <h4 style="color: var(--dark-charcoal); font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem;">Email</h4>
                <p style="color: #777; font-size: 0.9rem;">info@shinershighschool.sc.ke</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="background: #20c997; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
              </div>
              <div>
                <h4 style="color: var(--dark-charcoal); font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem;">Address</h4>
                <p style="color: #777; font-size: 0.95rem; line-height: 1.5;">Okatekok Stage, Nambale<br>Town, off Busia-Bungoma<br>Road</p>
              </div>
            </div>
            
          </div>
          
          <!-- Application Form -->
          <div style="background: var(--primary-maroon); padding: 3rem;">
            <h2 style="color: var(--pure-white); font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">Submit an Inquiry or Application</h2>
            <p style="color: var(--pure-white); font-size: 0.9rem; line-height: 1.5; margin-bottom: 2rem;">
              Use the form below to send us your feedback, comments, or volunteer applications. Please specify your area of interest in the message field.
            </p>
            
            <form onsubmit="event.preventDefault(); alert('Message sent successfully!');" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <input type="text" placeholder="Your Name*" required style="padding: 0.8rem; border-radius: 4px; border: 1px solid #ddd; font-family: inherit; font-size: 0.9rem; outline: none;">
                <input type="email" placeholder="Your Email*" required style="padding: 0.8rem; border-radius: 4px; border: 1px solid #ddd; font-family: inherit; font-size: 0.9rem; outline: none;">
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <input type="tel" placeholder="Your Phone*" required style="padding: 0.8rem; border-radius: 4px; border: 1px solid #ddd; font-family: inherit; font-size: 0.9rem; outline: none;">
                <input type="text" placeholder="Subject" style="padding: 0.8rem; border-radius: 4px; border: 1px solid #ddd; font-family: inherit; font-size: 0.9rem; outline: none;">
              </div>
              <textarea placeholder="Start Writing Your Message" rows="5" required style="padding: 0.8rem; border-radius: 4px; border: 1px solid #ddd; font-family: inherit; font-size: 0.9rem; outline: none; resize: vertical;"></textarea>
              <button type="submit" style="background: #20c997; color: white; border: none; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 1rem; cursor: pointer; align-self: flex-start; margin-top: 0.5rem; transition: background 0.3s ease;">
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
