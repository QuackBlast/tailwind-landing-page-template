import React, { useState } from 'react';
import { FileText, Brain, CheckCircle, MessageCircle, Zap } from 'lucide-react';

const AIToolsPage = () => {
  const [selectedTool, setSelectedTool] = useState('summarize');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const tools = [
    { id: 'summarize', name: 'Sammanfattning', icon: FileText, description: 'Skapa koncisa sammanfattningar av långa texter' },
    { id: 'flashcards', name: 'Flashcards', icon: Brain, description: 'Generera flashcards för effektiv memorering' },
    { id: 'quiz', name: 'Quiz', icon: CheckCircle, description: 'Skapa quiz-frågor för att testa din kunskap' },
    { id: 'explain', name: 'Förklara', icon: MessageCircle, description: 'Få enkla förklaringar av komplexa koncept' }
  ];

  const handleProcess = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    switch (selectedTool) {
      case 'summarize':
        setResult('Sammanfattning: Detta är en automatiskt genererad sammanfattning av den inmatade texten. Huvudpunkterna inkluderar de viktigaste koncepten och slutsatserna från originaltexten.');
        break;
      case 'flashcards':
        setResult('Flashcards genererade:\n\n1. Q: Vad är algoritmkomplexitet?\n   A: Ett mått på hur mycket tid och utrymme en algoritm behöver.\n\n2. Q: Vad betyder O(n)?\n   A: Linjär tidskomplexitet - tiden ökar proportionellt med input-storleken.');
        break;
      case 'quiz':
        setResult('Quiz-frågor:\n\n1. Vad är huvudsyftet med datastrukturer?\n   a) Att organisera data effektivt\n   b) Att skriva snabbare kod\n   c) Att spara minne\n   d) Alla ovanstående\n\n2. Vilken av följande är en sökalgoritm?\n   a) Merge Sort\n   b) Binary Search\n   c) Quick Sort\n   d) Heap Sort');
        break;
      case 'explain':
        setResult('Förklaring: Baserat på den inmatade texten, här är en förenklad förklaring av koncepten. Komplexa tekniska termer har omformulerats till vardagssvenska för bättre förståelse.');
        break;
    }
    
    setIsProcessing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Brain className="h-6 w-6 mr-2" />
          AI-Verktyg
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {tools.map(tool => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedTool === tool.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">{tool.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mata in text eller ladda upp fil
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Klistra in din text här eller ladda upp en fil..."
            />
          </div>

          <button
            onClick={handleProcess}
            disabled={isProcessing || !inputText.trim()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Bearbetar...</span>
              </>
            ) : (
              <>
                <Zap className="h-5 w-5" />
                <span>Kör AI-verktyg</span>
              </>
            )}
          </button>

          {result && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Resultat:</h3>
              <div className="whitespace-pre-wrap text-gray-700">{result}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;