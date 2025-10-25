function ExperienceApp() {
  try {
    const experiences = [
      {
        id: 1,
        company: 'Solar Solutions Inc.',
        position: 'Senior Solar Technician',
        dates: 'Jan 2022 - Present',
        responsibilities: [
          'Lead installation teams for commercial rooftop solar projects',
          'Perform system diagnostics and preventive maintenance',
          'Conduct thermal imaging inspections and IV curve analysis'
        ],
        achievements: [
          'Successfully installed 500+ kW of solar capacity',
          'Reduced system downtime by 30% through proactive maintenance'
        ],
        tools: ['SketchUp', 'PVsyst', 'Thermal Camera', 'Multimeter']
      },
      {
        id: 2,
        company: 'Renewable Energy Research Lab',
        position: 'R&D Technician Intern',
        dates: 'Jun 2020 - Dec 2021',
        responsibilities: [
          'Conducted corrosion testing on PV module frames',
          'Analyzed performance data from test installations',
          'Created 3D models using TRNSYS for system simulation'
        ],
        achievements: [
          'Published findings in renewable energy journal',
          'Developed improved testing protocols'
        ],
        tools: ['TRNSYS', 'Data Logger', 'Lab Equipment']
      }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="experience-app" data-file="experience-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Professional Experience</h1>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="bg-white rounded-2xl shadow-lg p-8 border-l-4" style={{borderColor: 'var(--primary-color)'}}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{exp.position}</h2>
                      <h3 className="text-xl text-[var(--secondary-color)] mb-2">{exp.company}</h3>
                    </div>
                    <div className="flex items-center text-[var(--text-secondary)]">
                      <div className="icon-calendar text-lg mr-2"></div>
                      <span>{exp.dates}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <div className="icon-chevron-right text-lg text-[var(--secondary-color)] mr-2 mt-0.5"></div>
                          <span className="text-[var(--text-secondary)]">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start">
                          <div className="icon-star text-lg text-[var(--primary-color)] mr-2 mt-0.5"></div>
                          <span className="text-[var(--text-secondary)]">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-[var(--light-gray)] text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ExperienceApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExperienceApp />);