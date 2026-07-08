export default function renderGallery() {
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
          <!-- Using images from the home and academic folders as beautiful gallery placeholders -->
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/home/background-change.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/home/march past.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/academics/Competitive Sports.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/home/waterpoint.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/academics/Creative Arts & Drama Team1.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); height: 250px;">
            <img src="/images/academics/Life & Learning1.webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" alt="Gallery Image" />
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
          <button style="background: transparent; color: var(--primary-maroon); border: 2px solid var(--primary-maroon); padding: 0.8rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.background='var(--primary-maroon)'; this.style.color='white';" onmouseout="this.style.background='transparent'; this.style.color='var(--primary-maroon)';">
            Load More Photos
          </button>
        </div>
      </div>
    </section>

    <!-- Video Gallery Section -->
    <section style="background: #f8f9fa; padding: 5rem 1rem;">
      <div class="container" style="max-width: 1100px; margin: 0 auto;">
        <h2 style="color: var(--accent-red); font-size: 2.5rem; font-weight: 800; text-align: center; margin-bottom: 1rem;">Video Gallery</h2>
        <p style="color: #666; font-size: 1.1rem; text-align: center; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Watch highlights, student testimonials, and special events happening at our school.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: stretch;">
          
          <!-- Video 1 -->
          <div style="background: var(--pure-white); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="background: #000; height: 300px; position: relative; display: flex; align-items: center; justify-content: center;">
              <!-- Video Placeholder: Can be replaced with <video> or <iframe> later -->
              <p style="color: #555; font-size: 0.9rem;">[ Video Placeholder 1 ]</p>
              <div style="position: absolute; width: 60px; height: 60px; background: rgba(255,255,255,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                <svg width="24" height="24" fill="var(--primary-maroon)" viewBox="0 0 16 16" style="margin-left: 4px;"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
              </div>
            </div>
            <div style="padding: 1.5rem;">
              <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Nambale Shiners Campus Tour</h3>
              <p style="color: #777; font-size: 0.95rem;">Take a virtual walk through our modern facilities and beautifully landscaped grounds.</p>
            </div>
          </div>
          
          <!-- Video 2 -->
          <div style="background: var(--pure-white); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="background: #000; height: 300px; position: relative; display: flex; align-items: center; justify-content: center;">
              <!-- Video Placeholder: Can be replaced with <video> or <iframe> later -->
              <p style="color: #555; font-size: 0.9rem;">[ Video Placeholder 2 ]</p>
              <div style="position: absolute; width: 60px; height: 60px; background: rgba(255,255,255,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                <svg width="24" height="24" fill="var(--primary-maroon)" viewBox="0 0 16 16" style="margin-left: 4px;"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
              </div>
            </div>
            <div style="padding: 1.5rem;">
              <h3 style="color: var(--dark-charcoal); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Student Life & Co-Curricular Highlights</h3>
              <p style="color: #777; font-size: 0.95rem;">Watch our students excel in competitive sports, drama, and academic challenges.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
