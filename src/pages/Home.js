export default function renderHome() {
  return `
    <section class="hero animate-fade-in">
      <div class="container">
        <h1>Nambale Shiners High School</h1>
        <p style="font-size: 1.5rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">Nurturing Tomorrow's Leaders and Human Resource Today</p>
        <div style="margin-top: 2rem;">
          <a href="#admission_fees" class="btn btn-white" style="background: var(--pure-white); color: var(--primary-maroon);">Admissions</a>
          <a href="#academics" class="btn" style="border: 1px solid var(--pure-white); color: var(--pure-white); margin-left: 1rem;">Explore Academics</a>
        </div>
      </div>
    </section>

    <section class="container py-4 animate-fade-in">
      <div class="glass-card text-center mb-4" style="margin-bottom: 3rem;">
        <h2 style="color: var(--primary-maroon); margin-bottom: 1rem;">Welcome to Nambale Shiners</h2>
        <p style="font-size: 1.25rem; max-width: 800px; margin: 0 auto; color: var(--dark-charcoal);">
          Upto 2026, Nambale Shiners High School has registered steady growth in academics, discipline, and student welfare.
        </p>
      </div>

      <div class="flex-wrap" style="justify-content: center; margin-bottom: 4rem;">
        <div class="glass-card text-center" style="flex: 1; min-width: 250px; background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">2019</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Founding Year</p>
        </div>
        <div class="glass-card text-center" style="flex: 1; min-width: 250px; background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">5/29</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Sub-County Rank</p>
        </div>
        <div class="glass-card text-center" style="flex: 1; min-width: 250px; background: var(--pure-white);">
          <div style="font-size: 3rem; color: var(--accent-red); font-weight: 700;">30+</div>
          <p style="font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; font-size: 0.9rem;">Students Per Stream</p>
        </div>
      </div>

      <div class="flex-wrap" style="align-items: stretch;">
        <div class="glass-card" style="flex: 1; min-width: 300px; border-top: 4px solid var(--primary-maroon);">
          <h3 style="color: var(--primary-maroon);">Our Vision</h3>
          <p>A society with God-fearing, functional, self-reliant, enlightened and law-abiding citizens.</p>
        </div>
        <div class="glass-card" style="flex: 1; min-width: 300px; border-top: 4px solid var(--accent-red);">
          <h3 style="color: var(--accent-red);">Our Mission</h3>
          <p>To provide value-based education that prepares learners for academic excellence.</p>
        </div>
        <div class="glass-card" style="flex: 1; min-width: 300px; border-top: 4px solid var(--dark-charcoal);">
          <h3 style="color: var(--dark-charcoal);">Our Motto</h3>
          <p style="font-size: 1.25rem; font-style: italic; font-weight: 600;">"Education for Service and Success"</p>
        </div>
      </div>
    </section>
  `;
}
