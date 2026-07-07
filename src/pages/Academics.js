export default function renderAcademics() {
  return `
    <section class="container py-4 animate-fade-in">
      <div class="text-center mb-4" style="margin-bottom: 3rem;">
        <h1>Academics & Co-Curricular Activities</h1>
        <p style="font-size: 1.25rem; color: var(--dark-charcoal); max-width: 800px; margin: 0 auto;">
          Shiners offers a comprehensive path designed to foster academic excellence and character development.
        </p>
      </div>

      <div class="flex-wrap" style="margin-bottom: 4rem; align-items: stretch;">
        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; color: var(--primary-maroon);">
            📚 Academic Pathways
          </h2>
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.3rem; color: var(--dark-charcoal);">Junior Secondary School</h3>
            <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--primary-maroon);">
              <p style="font-weight: 600; margin-bottom: 0.5rem;">Grades 7 - 9</p>
              <p style="font-size: 0.95rem; margin-bottom: 0;">Implementing the Competency-Based Curriculum (CBC) to build strong foundational knowledge, critical thinking, and core skills.</p>
            </div>
          </div>
          <div>
            <h3 style="font-size: 1.3rem; color: var(--dark-charcoal);">Senior Secondary School</h3>
            <div style="background: var(--soft-gray); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
              <p style="font-weight: 600; margin-bottom: 0.5rem;">Grades 10 - 12</p>
              <p style="font-size: 0.95rem; margin-bottom: 0;">Providing specialized pathways as we fully transition into the advanced CBC senior system, empowering students for higher education and future careers.</p>
            </div>
          </div>
        </div>

        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; color: var(--accent-red);">
            ⚽ Co-Curricular Activities
          </h2>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">🏆 Competitive Sports & Games</h3>
            <p style="font-size: 0.95rem;">Through track events, field games, and competitive sports, we foster a culture of physical fitness, resilience, and teamwork. Our students actively participate in inter-school championships, consistently carrying the school flag high.</p>
          </div>
          
          <div>
            <h3 style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">🎭 Music, Drama & Talent Clubs</h3>
            <p style="font-size: 0.95rem;">Nambale Shiners High School consistently shines on the national stage. Our performing arts teams, including the girls' music festival team, dedicate themselves to creative excellence, representing the school with discipline and pride at regional and national competitions.</p>
          </div>
        </div>
      </div>

      <div class="glass-card mb-4" style="background: var(--dark-charcoal); color: var(--pure-white); margin-bottom: 4rem;">
        <h2 style="color: var(--pure-white); text-align: center; margin-bottom: 2rem;">Our Facilities</h2>
        
        <div class="grid grid-cols-2">
          <div>
            <h3 style="color: var(--soft-gray); border-bottom: 2px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem;">Current Facilities</h3>
            <ul style="list-style: none; padding: 1rem 0;">
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Science Laboratories</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Dormitories for boarding students</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Classrooms</li>
            </ul>
          </div>
          
          <div>
            <h3 style="color: var(--soft-gray); border-bottom: 2px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem;">Planned Facilities (Future Campus)</h3>
            <ul style="list-style: none; padding: 1rem 0; opacity: 0.8; columns: 2;">
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Dining hall</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Library</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Assembly hall</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Modern dormitories</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Staff housing</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Sports grounds</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Parking areas</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Computer lab</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="glass-card text-center" style="background: linear-gradient(135deg, rgba(92,6,18,0.1), rgba(128,10,29,0.1)); border: 2px dashed var(--primary-maroon);">
        <h2 style="color: var(--primary-maroon);">Academic Downloads</h2>
        <p style="margin-bottom: 1.5rem;">Access essential resources and materials for our Senior School staff.</p>
        <a href="#" class="btn btn-primary" onclick="event.preventDefault(); alert('Handbook download will be available shortly.');">
          <span style="margin-right: 0.5rem;">📥</span> Download Senior School Teachers Handbook
        </a>
      </div>

    </section>
  `;
}
