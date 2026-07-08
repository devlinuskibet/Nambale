export default function renderAcademics() {
  return `
    <section class="hero animate-fade-in" style="background: linear-gradient(135deg, rgba(92,6,18,0.7), rgba(45,49,52,0.8)), url('/images/academics/hero-placeholder.jpg') center/cover; padding: 6rem 1rem; border-radius: 0 0 20px 20px;">
      <div class="container text-center">
        <h1 style="color: var(--pure-white); font-size: 3.5rem; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.4); margin-bottom: 1rem;">Academics & Co-Curricular</h1>
        <p style="color: var(--soft-gray); font-size: 1.25rem; max-width: 600px; margin: 0 auto;">Fostering academic excellence and character development</p>
      </div>
    </section>

    <section class="container py-4 animate-fade-in" style="margin-top: 3rem;">
      
      <!-- Academics Section -->
      <div class="grid grid-cols-2" style="margin-bottom: 5rem; align-items: center; gap: 4rem;">
        
        <!-- Image Collage Placeholder -->
        <div style="position: relative;">
          <h3 style="color: var(--accent-red); font-size: 1.1rem; font-weight: 700; text-align: center; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 1px;">Life & Learning at Shiners</h3>
          <div class="image-collage" style="min-height: 400px; padding: 0;">
            <div style="width: 65%; height: 250px; background: linear-gradient(135deg, #e0e0e0, #f5f5f5); position: absolute; z-index: 2; transform: translateX(-15%) translateY(-10%); border-radius: 16px; border: 4px solid var(--pure-white); box-shadow: var(--shadow-lg); display: flex; align-items: center; justify-content: center;">
              <span style="color: #888; font-weight: bold; font-size: 1.1rem; text-align: center; padding: 1rem;">[ cbc grade 1st ]</span>
            </div>
            <div style="width: 65%; height: 250px; background: linear-gradient(135deg, #e0e0e0, #f5f5f5); position: absolute; z-index: 1; transform: translateX(15%) translateY(15%); border-radius: 16px; border: 4px solid var(--pure-white); box-shadow: var(--shadow-lg); display: flex; align-items: center; justify-content: center;">
              <span style="color: #888; font-weight: bold; font-size: 1.1rem; text-align: center; padding: 1rem;">[ cbc 4th ]</span>
            </div>
          </div>
          <div style="text-align: center; margin-top: -2rem; color: #ccc; letter-spacing: 5px; font-size: 1.2rem;">● ● ●</div>
        </div>

        <div>
          <h2 style="color: var(--primary-maroon); font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 800;">Academic Pathways</h2>
          <p style="font-weight: 500; margin-bottom: 2.5rem; color: var(--dark-charcoal); font-size: 1.1rem; line-height: 1.6;">Shiners offers a comprehensive path designed to foster academic excellence and character development.</p>
          
          <div class="glass-card" style="margin-bottom: 1.5rem; background: var(--pure-white); border-left: 4px solid var(--accent-red); transition: transform 0.3s ease; cursor: default;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
            <h3 style="color: var(--primary-maroon); font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>📘</span> Junior Secondary School
            </h3>
            <p style="color: var(--accent-red); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Grades 7–9</p>
            <p style="color: var(--dark-charcoal); line-height: 1.6; margin-bottom: 0;">Implementing the Competency-Based Curriculum (CBC) to build strong foundational knowledge, critical thinking, and core skills.</p>
          </div>
          
          <div class="glass-card" style="background: var(--pure-white); border-left: 4px solid var(--primary-maroon); transition: transform 0.3s ease; cursor: default;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
            <h3 style="color: var(--primary-maroon); font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>🎓</span> Senior Secondary School
            </h3>
            <p style="color: var(--accent-red); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Grades 10–12</p>
            <p style="color: var(--dark-charcoal); line-height: 1.6; margin-bottom: 0;">Providing specialized pathways as we fully transition into the advanced CBC senior system, empowering students for higher education and future careers.</p>
          </div>
        </div>
      </div>

      <!-- Co-Curricular Section -->
      <div style="margin-bottom: 6rem;">
        <h2 class="text-center" style="color: var(--primary-maroon); font-size: 2.5rem; margin-bottom: 3rem; font-weight: 800;">Co-Curricular Activities</h2>
        
        <!-- Sports -->
        <div class="glass-card" style="background: var(--pure-white); margin-bottom: 3rem; padding: 3rem;">
          <div class="grid grid-cols-2" style="gap: 4rem; align-items: center;">
            <div>
              <h3 style="color: var(--primary-maroon); font-size: 1.8rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>⚽</span> Competitive Sports & Games
              </h3>
              <p style="margin-bottom: 1.5rem; color: var(--dark-charcoal); line-height: 1.7; font-size: 1.05rem;">Through track events, field games, and competitive sports, we foster a culture of physical fitness, resilience, and teamwork. Our students actively participate in inter-school championships, consistently carrying the school flag high.</p>
            </div>
            
            <div>
              <h4 style="color: var(--accent-red); font-weight: 700; font-size: 1rem; text-align: center; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Nambale Shiners High School during sports</h4>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                <div style="background: #f0f0f0; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #888; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ sports image ]</div>
                <div style="background: #f0f0f0; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #888; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ sports2 ]</div>
                <div style="background: #f0f0f0; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #888; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ sportsprep ]</div>
                <div style="background: #f0f0f0; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #888; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ sports4 ]</div>
                <div style="background: #f0f0f0; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #888; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ sports3 ]</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Music / Drama -->
        <div class="glass-card" style="background: linear-gradient(135deg, var(--pure-white), var(--soft-gray)); padding: 3rem;">
          <div class="grid grid-cols-2" style="gap: 4rem; align-items: center;">
            <div style="order: 2;">
              <h3 style="color: var(--primary-maroon); font-size: 1.8rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>🎭</span> Music, Drama & Talent
              </h3>
              <p style="margin-bottom: 1.5rem; color: var(--dark-charcoal); line-height: 1.7; font-size: 1.05rem;">Nambale Shiners High School consistently shines on the national stage. Our performing arts teams, including the girls' music festival team, dedicate themselves to creative excellence, representing the school with discipline and pride at regional and national competitions.</p>
            </div>
            
            <div style="order: 1;">
              <h4 style="color: var(--accent-red); font-weight: 700; font-size: 1rem; text-align: center; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Creative Arts & Drama Team</h4>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div style="background: #e6e6e6; height: 150px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #777; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); grid-column: span 2;">[ music1 ]</div>
                <div style="background: #e6e6e6; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #777; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ music2 ]</div>
                <div style="background: #e6e6e6; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; color: #777; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">[ music3 ]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section style="background: var(--primary-maroon); color: var(--pure-white); padding: 6rem 1rem; margin-bottom: 0;">
      <div class="container">
        <h2 class="text-center" style="color: var(--pure-white); font-size: 2.5rem; margin-bottom: 4rem; font-weight: 800;">Our Facilities</h2>
        <div class="grid grid-cols-2" style="gap: 3rem;">
          
          <div class="glass-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 2.5rem;">
            <h3 style="color: var(--pure-white); font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">Current Facilities</h3>
            <ul style="list-style-type: none; padding: 0; margin-bottom: 2rem; line-height: 2.5; font-size: 1.1rem; color: #f0f0f0;">
              <li style="display: flex; align-items: center; gap: 0.75rem;">✅ Science Laboratories</li>
              <li style="display: flex; align-items: center; gap: 0.75rem;">✅ Dormitories for boarding students</li>
              <li style="display: flex; align-items: center; gap: 0.75rem;">✅ Classrooms</li>
            </ul>
            <div style="background: rgba(0,0,0,0.2); height: 200px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px dashed rgba(255,255,255,0.2);">
              <span style="font-size: 2rem; margin-bottom: 0.5rem;">📸</span>
              <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">[ Facilities Image Slider Placeholder ]</p>
            </div>
          </div>
          
          <div class="glass-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 2.5rem;">
            <h3 style="color: var(--pure-white); font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">Planned Facilities (Future Campus)</h3>
            <ul style="list-style-type: none; padding: 0; line-height: 2.5; font-size: 1.1rem; color: #f0f0f0; columns: 2; column-gap: 2rem;">
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Dining hall</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Library</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Assembly hall</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Modern dormitories</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Staff housing</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Sports grounds</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Parking areas</li>
              <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;"><span style="color: var(--accent-red);">🚀</span> Computer lab</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- Downloads -->
    <section class="container text-center animate-fade-in" style="padding: 6rem 1rem;">
      <div class="glass-card" style="max-width: 600px; margin: 0 auto; background: var(--pure-white); border: 1px solid #eee; box-shadow: var(--shadow-lg);">
        <div style="background: rgba(92,6,18,0.05); border-radius: 50%; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
          <span style="font-size: 2.5rem;">📥</span>
        </div>
        <h2 style="color: var(--primary-maroon); font-size: 2rem; margin-bottom: 1rem; font-weight: 800;">Academic Downloads</h2>
        <p style="color: #28a745; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">Senior School Teachers Handbook</p>
        <p style="color: var(--dark-charcoal); margin-bottom: 2rem;">Click the button below to download the resources securely.</p>
        
        <a href="#" onclick="event.preventDefault(); alert('Handbook download will be available shortly.');" class="btn" style="background: var(--primary-maroon); color: white; display: inline-flex; align-items: center; gap: 0.75rem; font-weight: 600; padding: 1rem 2.5rem; border-radius: 30px; border: none; cursor: pointer; text-decoration: none; box-shadow: 0 4px 15px rgba(92,6,18,0.2); transition: all 0.3s ease;">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
          Download Handbook
        </a>
      </div>
    </section>
  `;
}
