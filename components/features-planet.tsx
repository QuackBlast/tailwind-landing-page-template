export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Gå med i en global gemenskap av studenter
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              Anslut med studenter världen över, dela kunskap och påskynda ditt lärande genom samarbete.
            </p>
          </div>
          
          {/* How it works */}
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                1. Ladda upp dina anteckningar
              </h3>
              <p className="text-gray-400">
                Ladda upp ditt studiematerial i valfritt format. Vår AI bearbetar och organiserar dem automatiskt.
              </p>
            </div>
            
            <div className="p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                2. AI-förbättring
              </h3>
              <p className="text-gray-400">
                Få direkta flashcards, sammanfattningar och övningsfrågor genererade från ditt innehåll.
              </p>
            </div>
            
            <div className="p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                3. Dela & lär
              </h3>
              <p className="text-gray-400">
                Dela med klasskompisar och upptäck kvalitativt studiematerial från studenter världen över.
              </p>
            </div>
          </div>

          {/* Benefits section */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Varför studenter älskar AnteckningsBanken
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 mt-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Spara 3+ timmar per vecka</h4>
                    <p className="text-gray-400 text-sm">Automatiserade studieverktyg innebär mindre tid att skapa flashcards, mer tid att lära.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 mt-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Förbättra betyg med 15%</h4>
                    <p className="text-gray-400 text-sm">AI-genererat studiematerial hjälper dig att behålla mer information.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 mt-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Tillgång till kvalitetsmaterial</h4>
                    <p className="text-gray-400 text-sm">Upptäck anteckningar från toppstudenter i dina kurser och universitet.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="mb-4 text-4xl">📚</div>
                  <h4 className="text-xl font-bold text-white mb-2">Redo att komma igång?</h4>
                  <p className="text-gray-300 mb-6">Gå med i tusentals studenter som redan använder AnteckningsBanken för att lyckas i sina studier.</p>
                  <a
                    href="/signup"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Börja lära idag
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
