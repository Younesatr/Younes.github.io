function EducationApp() {
  try {
    const education = [
      {
        id: 1,
        degree: 'Bachelor of Science in Renewable Energy Engineering',
        university: 'Technical University of Energy',
        location: 'City, Country',
        dates: '2017 - 2021',
        gpa: '3.8/4.0',
        coursework: [
          'Photovoltaic Systems Design',
          'Power Electronics',
          'Renewable Energy Systems',
          'Materials Science',
          'Electrical Safety Standards',
          'Mechanical Engineering Fundamentals'
        ]
      },
      {
        id: 2,
        degree: 'Diploma in Electrical Technology',
        university: 'Technical Institute',
        location: 'City, Country',
        dates: '2015 - 2017',
        coursework: [
          'Electrical Circuits',
          'Industrial Automation',
          'Energy Storage Systems',
          'Control Systems'
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="education-app" data-file="education-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Education</h1>
            
            <div className="space-y-8">
              {education.map(edu => (
                <div key={edu.id} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[var(--light-gray)]">
                      <div className="icon-graduation-cap text-2xl text-[var(--secondary-color)]"></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{edu.degree}</h2>
                      <h3 className="text-xl text-[var(--secondary-color)] mb-1">{edu.university}</h3>
                      <div className="flex flex-wrap gap-4 text-[var(--text-secondary)]">
                        <div className="flex items-center">
                          <div className="icon-map-pin text-lg mr-2"></div>
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="icon-calendar text-lg mr-2"></div>
                          <span>{edu.dates}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center">
                            <div className="icon-award text-lg mr-2"></div>
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Relevant Coursework:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, i) => (
                        <div key={i} className="flex items-center">
                          <div className="icon-check text-lg text-[var(--primary-color)] mr-2"></div>
                          <span className="text-[var(--text-secondary)]">{course}</span>
                        </div>
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
    console.error('EducationApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EducationApp />);
