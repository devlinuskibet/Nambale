export default function renderAcademics() {
  return `
    <section class="container py-4 animate-fade-in">
      <div class="text-center mb-4" style="margin-bottom: 3rem;">
        <h1>Academic Excellence</h1>
        <p style="font-size: 1.25rem; color: var(--dark-charcoal); max-width: 800px; margin: 0 auto;">
          Empowering students through comprehensive pathways and state-of-the-art facilities.
        </p>
      </div>

      <div class="flex-wrap" style="margin-bottom: 4rem;">
        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="background: var(--primary-maroon); color: white; padding: 0.5rem; border-radius: 8px; font-size: 1.2rem;">📚</span>
            Academic Pathways
          </h2>
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.3rem; color: var(--primary-maroon);">Junior Secondary</h3>
            <p style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary-maroon);">Grades 7 - 9</p>
          </div>
          <div>
            <h3 style="font-size: 1.3rem; color: var(--accent-red);">Senior Secondary</h3>
            <p style="background: var(--soft-gray); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">Grades 10 - 12</p>
          </div>
        </div>

        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--pure-white);">
          <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="background: var(--accent-red); color: white; padding: 0.5rem; border-radius: 8px; font-size: 1.2rem;">⚽</span>
            Co-Curricular
          </h2>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 1rem; padding: 1rem; background: var(--soft-gray); border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
              <span style="font-size: 1.5rem;">🏆</span>
              <span style="font-weight: 600;">Competitive Sports & Games</span>
            </li>
            <li style="padding: 1rem; background: var(--soft-gray); border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
              <span style="font-size: 1.5rem;">🎭</span>
              <span style="font-weight: 600;">Music, Drama & Talent</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="glass-card" style="background: var(--dark-charcoal); color: var(--pure-white);">
        <h2 style="color: var(--pure-white); text-align: center; margin-bottom: 2rem;">Our Facilities</h2>
        
        <div class="flex-wrap">
          <div style="flex: 1; min-width: 250px;">
            <h3 style="color: var(--soft-gray); border-bottom: 2px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem;">Current Infrastructure</h3>
            <ul style="list-style: none; padding: 1rem 0;">
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Science Labs</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Dormitories</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">✅ Classrooms</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 250px;">
            <h3 style="color: var(--soft-gray); border-bottom: 2px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem;">Planned Expansions</h3>
            <ul style="list-style: none; padding: 1rem 0; opacity: 0.8;">
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Dining Hall</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Library</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Assembly Hall</li>
              <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🚀 Staff Housing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
