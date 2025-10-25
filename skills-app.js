function SkillsApp() {
  try {
    const technicalSkills = [
      { name: 'PV System Installation', level: 95, icon: 'wrench' },
      { name: 'Inverter Configuration', level: 90, icon: 'cpu' },
      { name: 'Battery Storage Systems', level: 85, icon: 'battery-charging' },
      { name: 'Thermal Imaging (IR)', level: 88, icon: 'camera' },
      { name: 'IV Curve Analysis', level: 92, icon: 'activity' },
      { name: 'Electrical Wiring', level: 94, icon: 'zap' },
      { name: 'Safety Protocols', level: 98, icon: 'shield-check' },
      { name: 'Corrosion Testing', level: 82, icon: 'flask-conical' },
      { name: 'SketchUp 3D Modeling', level: 87, icon: 'box' },
      { name: 'TRNSYS Simulation', level: 80, icon: 'globe' },
      { name: 'Data Logging & Analysis', level: 89, icon: 'chart-bar' },
      { name: 'Quality Assurance', level: 91, icon: 'check-check' }
    ];

    const softSkills = [
      { name: 'Team Leadership', icon: 'users' },
      { name: 'Technical Communication', icon: 'message-square' },
      { name: 'Problem Solving', icon: 'lightbulb' },
      { name: 'Report Writing', icon: 'file-text' },
      { name: 'Project Management', icon: 'clipboard-list' },
      { name: 'Client Relations', icon: 'handshake' }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="skills-app" data-file="skills-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Skills & Expertise</h1>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map(skill => (
                  <div key={skill.name} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--light-gray)] mr-4">
                        <div className={`icon-${skill.icon} text-xl text-[var(--secondary-color)]`}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{skill.name}</h3>
                      </div>
                      <span className="text-[var(--secondary-color)] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000" 
                        style={{width: `${skill.level}%`, backgroundColor: 'var(--primary-color)'}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-8">Soft Skills</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {softSkills.map(skill => (
                  <div key={skill.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--light-gray)] mx-auto mb-4">
                      <div className={`icon-${skill.icon} text-2xl text-[var(--secondary-color)]`}></div>
                    </div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('SkillsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SkillsApp />);