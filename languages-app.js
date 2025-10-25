function LanguagesApp() {
  try {
    const languages = [
      { name: 'Arabic', level: 'Native', proficiency: 100 },
      { name: 'French', level: 'Fluent', proficiency: 95 },
      { name: 'English', level: 'Fluent', proficiency: 90 },
      { name: 'German', level: 'Elementary (A2)', proficiency: 40 },
      { name: 'Lithuanian', level: 'Learning', proficiency: 20 }
    ];

    const getLevelColor = (proficiency) => {
      if (proficiency >= 90) return 'var(--secondary-color)';
      if (proficiency >= 70) return 'var(--primary-color)';
      return 'var(--text-secondary)';
    };

    return (
      <div className="min-h-screen bg-white" data-name="languages-app" data-file="languages-app.js">
        <Header />
        
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Languages</h1>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Multilingual professional with strong communication skills across diverse international teams.
            </p>
            
            <div className="space-y-6">
              {languages.map(lang => (
                <div key={lang.name} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--light-gray)] mr-4">
                        <div className="icon-globe text-2xl text-[var(--secondary-color)]"></div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{lang.name}</h2>
                        <p className="text-[var(--text-secondary)]">{lang.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold mr-2" style={{color: getLevelColor(lang.proficiency)}}>
                        {lang.proficiency}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000" 
                      style={{width: `${lang.proficiency}%`, backgroundColor: getLevelColor(lang.proficiency)}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-[var(--light-gray)] to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Language Advantages</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="icon-check-circle text-xl text-[var(--secondary-color)] mr-3 mt-1"></div>
                  <span className="text-[var(--text-secondary)]">
                    Effective communication with international clients and partners
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="icon-check-circle text-xl text-[var(--secondary-color)] mr-3 mt-1"></div>
                  <span className="text-[var(--text-secondary)]">
                    Technical documentation in multiple languages
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="icon-check-circle text-xl text-[var(--secondary-color)] mr-3 mt-1"></div>
                  <span className="text-[var(--text-secondary)]">
                    Cross-cultural team collaboration
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="icon-check-circle text-xl text-[var(--secondary-color)] mr-3 mt-1"></div>
                  <span className="text-[var(--text-secondary)]">
                    Access to diverse research and technical resources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('LanguagesApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LanguagesApp />);