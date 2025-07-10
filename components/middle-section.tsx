export default function MiddleSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-200 md:text-4xl mb-6">
            Varför studenter väljer AnteckningsBanken
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tusentals studenter har redan förbättrat sina studieresultat med vår plattform
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-gray-400">Aktiva studenter</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1M+</div>
            <div className="text-gray-400">Delade anteckningar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-400">Förbättrade betyg</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">AI-support</div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Snabb AI-bearbetning</h3>
            <p className="text-gray-400">Få dina anteckningar bearbetade på sekunder</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Kvalitetssäkrat</h3>
            <p className="text-gray-400">Endast verifierat och högkvalitativt innehåll</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Säker & privat</h3>
            <p className="text-gray-400">Dina anteckningar är trygga hos oss</p>
          </div>
        </div>
      </div>
    </section>
  );
}
