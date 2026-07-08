export default function renderGallery() {
  // Build the list of gallery images based on the uploaded files
  const images = ['gallery.webp'];
  for (let i = 2; i <= 22; i++) {
    images.push(`gallery (${i}).webp`);
  }

  const imageCards = images.map(img => `
    <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
      <img src="/images/gallery/${img}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Nambale Shiners Gallery" loading="lazy" />
    </div>
  `).join('');

  return `
    <!-- Gallery Hero Section -->
    <section class="hero animate-fade-in" style="background: linear-gradient(135deg, rgba(92,6,18,0.8), rgba(45,49,52,0.9)), url('/images/home/fieldd 2.webp') center/cover; padding: 6rem 1rem; border-radius: 0 0 20px 20px;">
      <div class="container text-center">
        <h1 style="color: var(--pure-white); font-size: 3.5rem; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.4); margin-bottom: 1rem;">Our Gallery</h1>
        <p style="color: var(--soft-gray); font-size: 1.25rem; max-width: 600px; margin: 0 auto;">A visual journey through the vibrant life, learning, and events at Nambale Shiners High School.</p>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section style="background: var(--pure-white); padding: 5rem 1rem;">
      <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <h2 style="color: var(--primary-maroon); font-size: 2.5rem; font-weight: 800; text-align: center; margin-bottom: 3rem;">Photo Highlights</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          ${imageCards}
        </div>
      </div>
    </section>

    <!-- Video Gallery Section -->
    <section style="background: #f8f9fa; padding: 5rem 1rem;">
      <div class="container" style="max-width: 1100px; margin: 0 auto;">
        <h2 style="color: var(--accent-red); font-size: 2.5rem; font-weight: 800; text-align: center; margin-bottom: 1rem;">Video Gallery</h2>
        <p style="color: #666; font-size: 1.1rem; text-align: center; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Watch highlights, student testimonials, and special events happening at our school.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: stretch;">
          
          <!-- Video 1 -->
          <div style="background: var(--pure-white); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="background: #000; height: 350px; position: relative; display: flex; align-items: center; justify-content: center;">
              <video src="/images/gallery/Shiners-Web-Video.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>
            <div style="padding: 1.5rem;">
              <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Nambale Shiners Spotlight</h3>
              <p style="color: #777; font-size: 0.95rem;">Experience the spirit, discipline, and excellence that define our students and faculty every day.</p>
            </div>
          </div>
          
          <!-- Video 2 -->
          <div style="background: var(--pure-white); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="background: #000; height: 350px; position: relative; display: flex; align-items: center; justify-content: center;">
              <video src="/images/gallery/VID-20251120-WA0006.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>
            <div style="padding: 1.5rem;">
              <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Student Life & Highlights</h3>
              <p style="color: #777; font-size: 0.95rem;">Watch our students excel in their co-curricular activities, academics, and school events.</p>
            </div>
          </div>
          
          <!-- Video 3 -->
          <div style="background: var(--pure-white); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="background: #000; height: 350px; position: relative; display: flex; align-items: center; justify-content: center;">
              <video src="/images/gallery/VID-20251120-WA0005.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>
            <div style="padding: 1.5rem;">
              <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Campus Events</h3>
              <p style="color: #777; font-size: 0.95rem;">A glimpse into the ceremonies, activities, and proud moments of Nambale Shiners.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
