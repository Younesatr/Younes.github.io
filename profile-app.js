function ProfileApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="profile-app" data-file="profile-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
                    <div className="icon-user text-[80px] text-white"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">Your Name</h1>
                  <div className="flex items-center text-[var(--text-secondary)] mb-4">
                    <div className="icon-map-pin text-lg mr-2"></div>
                    <span>Your Location</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <a href="mailto:your.email@example.com" className="flex items-center text-[var(--secondary-color)] hover:underline">
                      <div className="icon-mail text-lg mr-2"></div>
                      <span>Email</span>
                    </a>
                    <a href="#" className="flex items-center text-[var(--secondary-color)] hover:underline">
                      <div className="icon-linkedin text-lg mr-2"></div>
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center text-[var(--secondary-color)] hover:underline">
                      <div className="icon-github text-lg mr-2"></div>
                      <span>GitHub</span>
                    </a>
                  </div>
                  
                  <button className="btn-primary flex items-center">
                    <div className="icon-download text-lg mr-2"></div>
                    Download CV
                  </button>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Experienced Solar Energy Technician with expertise in PV system installation, maintenance, and diagnostics. 
                    Skilled in both rooftop and ground-mounted solar installations, with hands-on experience in off-grid system design and sizing. 
                    Proficient in 3D modeling using SketchUp and TRNSYS for solar system optimization. 
                    Background in R&D laboratory work, corrosion research, and comprehensive data analysis for photovoltaic performance evaluation.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Passionate about advancing renewable energy adoption through technical excellence and innovation. 
                    Seeking opportunities in solar installation, operations & maintenance, research & development, system design, or quality assurance roles. 
                    Committed to delivering high-quality, sustainable energy solutions that contribute to a cleaner future.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Solar Installation (Rooftop & Ground)',
                      'System Maintenance & Diagnostics',
                      'Off-Grid Design & Sizing',
                      '3D Modeling (SketchUp/TRNSYS)',
                      'R&D Laboratory Work',
                      'Corrosion Research',
                      'PV Performance Data Analysis',
                      'Quality Assurance'
                    ].map(area => (
                      <div key={area} className="flex items-center p-4 rounded-lg bg-[var(--light-gray)]">
                        <div className="icon-check-circle text-xl text-[var(--secondary-color)] mr-3"></div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProfileApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileApp />);