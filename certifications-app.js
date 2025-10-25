function CertificationsApp() {
  try {
    const certifications = [
      {
        id: 1,
        name: 'NABCEP PV Installation Professional',
        issuer: 'North American Board of Certified Energy Practitioners',
        date: 'March 2023',
        icon: 'award',
        color: 'var(--secondary-color)'
      },
      {
        id: 2,
        name: 'OSHA 30-Hour Construction Safety',
        issuer: 'Occupational Safety and Health Administration',
        date: 'January 2022',
        icon: 'shield-check',
        color: 'var(--primary-color)'
      },
      {
        id: 3,
        name: 'Electrical Safety Certification',
        issuer: 'National Safety Council',
        date: 'June 2022',
        icon: 'zap',
        color: 'var(--secondary-color)'
      },
      {
        id: 4,
        name: 'PV System Design Certificate',
        issuer: 'Renewable Energy Institute',
        date: 'August 2021',
        icon: 'sun',
        color: 'var(--primary-color)'
      }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="certifications-app" data-file="certifications-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Certifications</h1>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Professional certifications demonstrating expertise and commitment to safety and quality standards.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map(cert => (
                <div key={cert.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[var(--light-gray)] mr-4">
                      <div className={`icon-${cert.icon} text-2xl`} style={{color: cert.color}}></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-1">{cert.name}</h2>
                      <p className="text-[var(--text-secondary)] text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center text-[var(--text-secondary)] text-sm">
                        <div className="icon-calendar text-base mr-2"></div>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 rounded-lg border-2 font-medium transition-all" 
                    style={{borderColor: cert.color, color: cert.color}}>
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-[var(--light-gray)] to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Why Certifications Matter</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white mr-4">
                    <div className="icon-check text-xl text-[var(--secondary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Industry Recognition</h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Recognized credentials from leading organizations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white mr-4">
                    <div className="icon-check text-xl text-[var(--secondary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Safety Standards</h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Commitment to workplace safety and best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white mr-4">
                    <div className="icon-check text-xl text-[var(--secondary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Technical Expertise</h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Validated knowledge and hands-on skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white mr-4">
                    <div className="icon-check text-xl text-[var(--secondary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Quality Assurance</h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Adherence to industry quality standards
                    </p>
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
    console.error('CertificationsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CertificationsApp />);