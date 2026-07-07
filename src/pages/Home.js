export default function renderHome() {
  return `
    <section class="hero animate-fade-in">
      <div class="container">
        <h1>Nambale Shiners High School</h1>
        <p style="font-size: 1.5rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">Nurturing Tomorrow's Leaders and Human Resource Today</p>
        <div style="margin-top: 2rem;">
          <a href="#admission_fees" class="btn btn-white" style="background: var(--pure-white); color: var(--primary-maroon);">Enrol Now</a>
          <a href="#academics" class="btn btn-outline" style="border-color: var(--pure-white); color: var(--pure-white); margin-left: 1rem;">Explore Academics</a>
        </div>
      </div>
    </section>

    <section class="container py-4 animate-fade-in">
      <div class="glass-card text-center mb-4" style="margin-bottom: 3rem;">
        <h2 style="color: var(--primary-maroon); margin-bottom: 1rem;">Welcome to Nambale Shiners High School</h2>
        <p style="font-size: 1.15rem; max-width: 900px; margin: 0 auto; color: var(--dark-charcoal);">
          Upto 2026, Nambale Shiners High School has registered steady growth in academics, discipline, and student welfare. Through intensified remedial teaching, academic clinics, and candidate mentorship, the school has achieved marked improvements in examination performance compared to previous years. This momentum is sustained by timely syllabus coverage across all departments and enhanced ICT integration in our daily learning environments. Furthermore, strengthened guidance, counseling, and boarding supervision programs have fostered exceptional teamwork and shared dedication among staff and students alike.
        </p>
      </div>

      <div class="grid grid-cols-4" style="margin-bottom: 4rem;">
        <div class="glass-card text-center" style="background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">2019</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Founding Year</p>
        </div>
        <div class="glass-card text-center" style="background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">1/29</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Position in Sub-County 2025</p>
        </div>
        <div class="glass-card text-center" style="background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">1+</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Students per stream</p>
        </div>
        <div class="glass-card text-center" style="background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">1+</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Parents</p>
        </div>
      </div>

      <div class="flex-wrap" style="margin-bottom: 4rem; align-items: stretch;">
        <div class="glass-card" style="flex: 2; min-width: 300px; background: linear-gradient(135deg, var(--pure-white), var(--soft-gray));">
          <h2 style="color: var(--primary-maroon);">Our History</h2>
          <p>Nambale Shiners High School is a young and ambitious institution located on the outskirts of Nambale Town, in Nambale Sub-County, Busia County. Established to provide access to quality, Christ-centered education, we are already admitting students from Junior Secondary (Grades 7–9) to Senior Secondary (Grades 10–12).</p>
        </div>
        
        <div class="glass-card" style="flex: 1; min-width: 300px; background: var(--dark-charcoal); color: var(--pure-white);">
          <h2 style="color: var(--pure-white);">Institutional Statements</h2>
          <div style="margin-bottom: 1rem;">
            <strong style="color: var(--accent-red); text-transform: uppercase; font-size: 0.9rem;">Vision</strong>
            <p style="margin-bottom: 0;">A society with God-fearing, functional, self-reliant, enlightened and law-abiding citizens</p>
          </div>
          <div style="margin-bottom: 1rem;">
            <strong style="color: var(--accent-red); text-transform: uppercase; font-size: 0.9rem;">Mission</strong>
            <p style="margin-bottom: 0;">To provide value-based education that prepares learners for academic excellence, positive outcomes, and meaningful integration into society.</p>
          </div>
          <div>
            <strong style="color: var(--accent-red); text-transform: uppercase; font-size: 0.9rem;">Motto</strong>
            <p style="margin-bottom: 0; font-style: italic;">"Education for Service and Success"</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 4rem;">
        <h2 class="text-center" style="color: var(--primary-maroon); margin-bottom: 2rem;">Our Core Values</h2>
        <div class="grid grid-cols-3">
          <div class="glass-card text-center" style="background: var(--pure-white); border-top: 4px solid var(--primary-maroon);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🙏</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-maroon);">Faith in God</h3>
            <p style="font-size: 0.95rem;">Christ is at the center of all that we do.</p>
          </div>
          <div class="glass-card text-center" style="background: var(--pure-white); border-top: 4px solid var(--primary-maroon);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⭐</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-maroon);">Excellence</h3>
            <p style="font-size: 0.95rem;">Striving for high standards in academics and in life.</p>
          </div>
          <div class="glass-card text-center" style="background: var(--pure-white); border-top: 4px solid var(--primary-maroon);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛡️</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-maroon);">Integrity</h3>
            <p style="font-size: 0.95rem;">Building character through honesty and discipline.</p>
          </div>
          <div class="glass-card text-center" style="background: var(--pure-white); border-top: 4px solid var(--primary-maroon);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤝</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-maroon);">Community</h3>
            <p style="font-size: 0.95rem;">Working together as students, parents and teachers.</p>
          </div>
          <div class="glass-card text-center" style="background: var(--pure-white); border-top: 4px solid var(--primary-maroon);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌱</div>
            <h3 style="font-size: 1.2rem; color: var(--primary-maroon);">Growth</h3>
            <p style="font-size: 0.95rem;">Helping students develop intellectually, spiritually, socially, and physically.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-center" style="color: var(--accent-red); margin-bottom: 2rem;">Real Stories of Impact</h2>
        <div class="grid grid-cols-3">
          <div class="glass-card" style="background: var(--pure-white);">
            <h3 style="font-size: 1.2rem;">Nurturing Confidence</h3>
            <p style="font-size: 0.95rem;">Many learners join the institution with low confidence and trailing performance, but improve steadily through teacher mentorship, eventually rising to become top-performing students.</p>
          </div>
          <div class="glass-card" style="background: var(--pure-white);">
            <h3 style="font-size: 1.2rem;">Beyond the Classroom</h3>
            <p style="font-size: 0.95rem;">Our robust sports and arts programs empower student-athletes to build leadership skills and successfully represent the school in sub-county competitions.</p>
          </div>
          <div class="glass-card" style="background: var(--pure-white);">
            <h3 style="font-size: 1.2rem;">Trusted by Parents</h3>
            <p style="font-size: 0.95rem;">Parents, community leaders, and stakeholders frequently commend our exceptional discipline standards, academic commitment, and impeccably clean environment.</p>
          </div>
        </div>
      </div>

    </section>
  `;
}
