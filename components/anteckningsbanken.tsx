"use client";

import React, { useState, useEffect } from 'react';
import { Search, Upload, BookOpen, User, Star, Heart, Download, CreditCard, Brain, FileText, Users, ArrowRight, Menu, X, Filter, Tag, University, Calendar, DollarSign, ShoppingCart, CheckCircle, AlertCircle, Eye, MessageCircle, Zap, Share2, TrendingUp, Award, Lock, Unlock } from 'lucide-react';

// Type definitions
interface Note {
  id: number;
  title: string;
  university: string;
  courseCode: string;
  subject: string;
  price: number;
  rating: number;
  downloads: number;
  uploader: string;
  uploadDate: string;
  format: string;
  pages: number;
  description: string;
  tags: string[];
  premium: boolean;
  previewAvailable: boolean;
}

interface UserType {
  id: number;
  name: string;
  email: string;
  university: string;
  credits: number;
  uploads: number;
  purchases: number;
  memberSince: string;
}

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface UploadData {
  title: string;
  university: string;
  courseCode: string;
  subject: string;
  description: string;
  price: string;
  tags: string;
  file: File | null;
}

const AnteckningsBanken = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [user, setUser] = useState<UserType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState({
    university: '',
    courseCode: '',
    subject: '',
    priceRange: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<Note[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Algoritmer och Datastrukturer - Komplett Guide",
      university: "KTH",
      courseCode: "DD1337",
      subject: "Datavetenskap",
      price: 45,
      rating: 4.8,
      downloads: 234,
      uploader: "Anna Larsson",
      uploadDate: "2024-11-15",
      format: "PDF",
      pages: 87,
      description: "Omfattande anteckningar som täcker alla viktiga algoritmer och datastrukturer. Inkluderar exempel, pseudokod och komplexitetsanalys.",
      tags: ["algoritmer", "datastrukturer", "python", "komplexitet"],
      premium: true,
      previewAvailable: true
    },
    {
      id: 2,
      title: "Linjär Algebra - Föreläsningsanteckningar",
      university: "KTH",
      courseCode: "SF1624",
      subject: "Matematik",
      price: 25,
      rating: 4.5,
      downloads: 156,
      uploader: "Erik Johansson",
      uploadDate: "2024-11-10",
      format: "PDF",
      pages: 45,
      description: "Detaljerade anteckningar från alla föreläsningar. Inkluderar lösningar till tentauppgifter.",
      tags: ["linjär algebra", "matriser", "vektorer", "egenvaluen"],
      premium: false,
      previewAvailable: true
    },
    {
      id: 3,
      title: "Objektorienterad Programmering - Java",
      university: "Chalmers",
      courseCode: "TDA552",
      subject: "Programmering",
      price: 35,
      rating: 4.7,
      downloads: 189,
      uploader: "Maria Andersson",
      uploadDate: "2024-11-08",
      format: "PDF",
      pages: 62,
      description: "Omfattande material om OOP-koncept, designmönster och Java-programmering.",
      tags: ["java", "oop", "designmönster", "programmering"],
      premium: true,
      previewAvailable: false
    }
  ]);

  const universities = ["KTH", "Chalmers", "Lund", "Uppsala", "Stockholms Universitet", "Göteborgs Universitet"];
  const subjects = ["Datavetenskap", "Matematik", "Fysik", "Kemi", "Ekonomi", "Programmering"];

  const addNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const login = (email: string, password: string) => {
    // Simulate login
    setUser({
      id: 1,
      name: "Johan Svensson",
      email: email,
      university: "KTH",
      credits: 150,
      uploads: 5,
      purchases: 12,
      memberSince: "2023-08-15"
    });
    addNotification("Välkommen tillbaka!", "success");
  };

  const logout = () => {
    setUser(null);
    setCurrentView('home');
    addNotification("Du har loggats ut", "info");
  };

  const addToCart = (note: Note) => {
    setCart(prev => [...prev, note]);
    addNotification(`${note.title} har lagts till i kundvagnen`, "success");
  };

  const removeFromCart = (noteId: number) => {
    setCart(prev => prev.filter(note => note.id !== noteId));
    addNotification("Anteckning borttagen från kundvagn", "info");
  };

  const Header = () => (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AnteckningsBanken
              </h1>
              <p className="text-blue-100 text-sm">Dela kunskap, lyckas tillsammans</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>Hem</span>
            </button>
            <button
              onClick={() => setCurrentView('search')}
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>Sök Anteckningar</span>
            </button>
            {user && (
              <button
                onClick={() => setCurrentView('upload')}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Upload className="h-5 w-5" />
                <span>Ladda Upp</span>
              </button>
            )}
            <button
              onClick={() => setCurrentView('ai-tools')}
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Brain className="h-5 w-5" />
              <span>AI-Verktyg</span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {cart.length > 0 && (
              <button
                onClick={() => setCurrentView('cart')}
                className="relative p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </button>
            )}
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-blue-200">{user.credits} krediter</p>
                </div>
                <button
                  onClick={() => setCurrentView('profile')}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <User className="h-5 w-5" />
                </button>
                <button
                  onClick={logout}
                  className="bg-red-500/80 px-3 py-1 rounded-lg hover:bg-red-500 transition-colors text-sm"
                >
                  Logga ut
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentView('login')}
                className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors font-medium"
              >
                Logga in
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="space-y-0">
      {/* Hero Section - from old hero-home.tsx */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="pb-12 text-center md:pb-16">
              <div
                className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                data-aos="zoom-y-out"
              >
                <div className="-mx-0.5 flex justify-center -space-x-3">
                  <div className="box-content rounded-full border-2 border-gray-50 bg-blue-500 w-8 h-8"></div>
                  <div className="box-content rounded-full border-2 border-gray-50 bg-green-500 w-8 h-8"></div>
                  <div className="box-content rounded-full border-2 border-gray-50 bg-purple-500 w-8 h-8"></div>
                  <div className="box-content rounded-full border-2 border-gray-50 bg-yellow-500 w-8 h-8"></div>
                  <div className="box-content rounded-full border-2 border-gray-50 bg-red-500 w-8 h-8"></div>
                  <div className="box-content rounded-full border-2 border-gray-50 bg-pink-500 w-8 h-8"></div>
                </div>
              </div>
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                <span className="text-blue-600">AnteckningsBanken</span> - Dela, Studera, <br className="max-lg:hidden" />
                Lyckas Tillsammans
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Den ultimata anteckningsdelningsplattformen för studenter med AI-kraft. 
                  Ladda upp dina anteckningar, få direkta flashcards och sammanfattningar, 
                  och upptäck studiematerial från studenter världen över.
                </p>
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <button
                      onClick={() => setCurrentView('register')}
                      className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      <span className="relative inline-flex items-center">
                        Kom igång gratis{" "}
                        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </button>
                    <button
                      onClick={() => setCurrentView('search')}
                      className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto px-6 py-3 rounded-lg font-medium border border-gray-200"
                    >
                      Utforska Anteckningar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero demo section */}
            <div
              className="mx-auto max-w-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={600}
            >
              <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,theme(colors.gray.600)_4.5px,transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white">
                    AnteckningsBanken
                  </span>
                </div>
                <div className="font-mono text-gray-500 text-sm">
                  <div className="text-blue-400 mb-2">📄 Ladda upp PDF filer...</div>
                  <div className="mb-2">✅ PDF bearbetades framgångsrikt</div>
                  <div className="text-green-400 mb-2">🧠 AI håller på att skapa flashcards..</div>
                  <div className="mb-2">✨ 15 flashcards skapade</div>
                  <div className="text-purple-400 mb-2">📝 Sammanfattning skapade</div>
                  <div className="text-blue-400">🚀 Redo att delas!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - from old features-notes.tsx */}
      <section id="features" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Allt du behöver för att lyckas i dina studier
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Från anteckningsuppladdning till AI-drivna studieverktyg - AnteckningsBanken har allt studenter behöver för att lyckas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
                    <Upload className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Ladda upp alla format
                </h3>
                <p className="text-gray-600 mb-4">
                  Ladda upp anteckningar i PDF, Word, PowerPoint eller vanlig text. Vår AI bearbetar alla format och gör dem sökbara och delbara.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    PDF, DOCX, PPTX-stöd
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    OCR textextrahering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automatisk organisering
                  </li>
                </ul>
              </div>

              <div className="relative rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  AI-drivna studieverktyg
                </h3>
                <p className="text-gray-600 mb-4">
                  Låt AI skapa flashcards, sammanfattningar och provfrågor från dina anteckningar automatiskt. Studera smartare, inte hårdare.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Auto-genererade flashcards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Smarta sammanfattningar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Övningsprov
                  </li>
                </ul>
              </div>

              <div className="relative rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Dela & upptäck
                </h3>
                <p className="text-gray-600 mb-4">
                  Dela dina anteckningar med klasskompisar och upptäck högkvalitativa studiematerial från studenter i dina kurser och utanför.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kursbaserad delning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kvalitetsbetyg
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Smart sökning
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-16 border-t border-gray-200 pt-16">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Studenter</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Delade anteckningar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100K+</div>
                  <div className="text-sm text-gray-600">Genererade flashcards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Universitet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section - from old middle-section.tsx */}
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Snabb AI-bearbetning</h3>
              <p className="text-gray-400">Få dina anteckningar bearbetade på sekunder</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kvalitetssäkrat</h3>
              <p className="text-gray-400">Endast verifierat och högkvalitativt innehåll</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Säker & privat</h3>
              <p className="text-gray-400">Dina anteckningar är trygga hos oss</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Notes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Populära Anteckningar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upptäck de mest populära och högst rankade anteckningarna från studenter i hela Sverige
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {notes.slice(0, 3).map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentView('search')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Se alla anteckningar</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const NoteCard = ({ note }: { note: Note }) => (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{note.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center">
                <University className="h-4 w-4 mr-1" />
                {note.university}
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {note.courseCode}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{note.price} kr</div>
            {note.premium && (
              <div className="text-xs text-purple-600 font-medium">Premium</div>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              {note.rating}
            </span>
            <span className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              {note.downloads}
            </span>
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {note.pages}p
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => addToCart(note)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Köp Nu</span>
          </button>
          {note.previewAvailable && (
            <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
              <Eye className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isRegister) {
        // Simulate registration
        login(email, password);
      } else {
        login(email, password);
      }
      setCurrentView('home');
    };

    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? 'Skapa Konto' : 'Logga In'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lösenord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Universitet</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Välj universitet</option>
                {universities.map(uni => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            {isRegister ? 'Skapa Konto' : 'Logga In'}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          {isRegister ? 'Har du redan ett konto?' : 'Har du inget konto?'}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="ml-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            {isRegister ? 'Logga in' : 'Skapa konto'}
          </button>
        </p>
      </div>
    );
  };

  const SearchPage = () => {
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
      let filtered = notes;
      
      if (searchQuery) {
        filtered = filtered.filter(note => 
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
      
      if (selectedFilters.university) {
        filtered = filtered.filter(note => note.university === selectedFilters.university);
      }
      
      if (selectedFilters.courseCode) {
        filtered = filtered.filter(note => note.courseCode.toLowerCase().includes(selectedFilters.courseCode.toLowerCase()));
      }
      
      setFilteredNotes(filtered);
    };

    useEffect(() => {
      handleSearch();
    }, [searchQuery, selectedFilters]);

    return (
      <div className="space-y-6">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Sök anteckningar, kurser, eller ämnen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Sök
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Universitet</label>
              <select
                value={selectedFilters.university}
                onChange={(e) => setSelectedFilters({...selectedFilters, university: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Alla universitet</option>
                {universities.map(uni => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kurskod</label>
              <input
                type="text"
                placeholder="t.ex. DD1337"
                value={selectedFilters.courseCode}
                onChange={(e) => setSelectedFilters({...selectedFilters, courseCode: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ämne</label>
              <select
                value={selectedFilters.subject}
                onChange={(e) => setSelectedFilters({...selectedFilters, subject: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Alla ämnen</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prisområde</label>
              <select
                value={selectedFilters.priceRange}
                onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Alla priser</option>
                <option value="0-25">0-25 kr</option>
                <option value="26-50">26-50 kr</option>
                <option value="51-100">51-100 kr</option>
                <option value="100+">100+ kr</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">
              {filteredNotes.length} anteckningar hittades
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sortera:</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Populärast</option>
                <option>Nyast</option>
                <option>Lägst pris</option>
                <option>Högst pris</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const UploadPage = () => {
    const [uploadData, setUploadData] = useState<UploadData>({
      title: '',
      university: '',
      courseCode: '',
      subject: '',
      description: '',
      price: '',
      tags: '',
      file: null
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Simulate upload
      const newNote = {
        id: notes.length + 1,
        title: uploadData.title,
        university: uploadData.university,
        courseCode: uploadData.courseCode,
        subject: uploadData.subject,
        price: parseInt(uploadData.price),
        rating: 0,
        downloads: 0,
        uploader: user?.name || '',
        uploadDate: new Date().toISOString().split('T')[0],
        format: "PDF",
        pages: 25,
        description: uploadData.description,
        tags: uploadData.tags.split(',').map(tag => tag.trim()),
        premium: false,
        previewAvailable: false
      };
      
      setNotes([...notes, newNote]);
      addNotification("Anteckning uppladdad framgångsrikt!", "success");
      setCurrentView('profile');
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Upload className="h-6 w-6 mr-2" />
            Ladda upp anteckningar
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
              <input
                type="text"
                value={uploadData.title}
                onChange={(e) => setUploadData({...uploadData, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Universitet</label>
                <select
                  value={uploadData.university}
                  onChange={(e) => setUploadData({...uploadData, university: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Välj universitet</option>
                  {universities.map(uni => (
                    <option key={uni} value={uni}>{uni}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kurskod</label>
                <input
                  type="text"
                  value={uploadData.courseCode}
                  onChange={(e) => setUploadData({...uploadData, courseCode: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="t.ex. DD1337"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ämne</label>
              <select
                value={uploadData.subject}
                onChange={(e) => setUploadData({...uploadData, subject: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Välj ämne</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Beskrivning</label>
              <textarea
                value={uploadData.description}
                onChange={(e) => setUploadData({...uploadData, description: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Beskriv innehållet i dina anteckningar..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pris (kr)</label>
              <input
                type="number"
                value={uploadData.price}
                onChange={(e) => setUploadData({...uploadData, price: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Taggar (separera med komma)</label>
              <input
                type="text"
                value={uploadData.tags}
                onChange={(e) => setUploadData({...uploadData, tags: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="t.ex. algoritmer, datastrukturer, python"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ladda upp fil</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Dra och släpp din fil här, eller klicka för att välja</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => setUploadData({...uploadData, file: e.target.files?.[0] || null})}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                >
                  Välj fil
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Ladda upp anteckning
            </button>
          </form>
        </div>
      </div>
    );
  };

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

  const CartPage = () => {
    const total = cart.reduce((sum, note) => sum + note.price, 0);
    const commission = Math.round(total * 0.3);
    const sellerAmount = total - commission;

    const handleCheckout = () => {
      // Simulate purchase
      setCart([]);
      addNotification("Köp genomfört! Du har nu tillgång till dina anteckningar.", "success");
      setCurrentView('profile');
    };

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ShoppingCart className="h-6 w-6 mr-2" />
            Kundvagn ({cart.length})
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Din kundvagn är tom</p>
              <button
                onClick={() => setCurrentView('search')}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Bläddra anteckningar
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {cart.map(note => (
                  <div key={note.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{note.title}</h3>
                      <p className="text-sm text-gray-500">{note.university} • {note.courseCode}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{note.price} kr</div>
                      <button
                        onClick={() => removeFromCart(note.id)}
                        className="text-red-500 hover:text-red-600 text-sm"
                      >
                        Ta bort
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{total} kr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plattformsavgift (30%):</span>
                    <span>{commission} kr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Till säljare:</span>
                    <span>{sellerAmount} kr</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>{total} kr</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Genomför köp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ProfilePage = () => {
    if (!user) return null;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Medlem sedan {user.memberSince}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{user.credits}</div>
                  <div className="text-sm text-gray-600">Krediter</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{user.uploads}</div>
                  <div className="text-sm text-gray-600">Uppladdningar</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{user.purchases}</div>
                  <div className="text-sm text-gray-600">Köp</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">4.9</div>
                  <div className="text-sm text-gray-600">Genomsnitt</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Mina uppladdningar</h3>
            <div className="space-y-3">
              {notes.filter(note => note.uploader === user.name).map(note => (
                <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{note.title}</div>
                    <div className="text-sm text-gray-500">{note.downloads} nedladdningar</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{note.price} kr</div>
                    <div className="text-xs text-gray-500">⭐ {note.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Senaste aktivitet</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Download className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">Köpte "Linjär Algebra - Guide"</div>
                  <div className="text-sm text-gray-500">2 timmar sedan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Upload className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">Laddade upp "Statistik Sammanfattning"</div>
                  <div className="text-sm text-gray-500">1 dag sedan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">Fick 5-stjärnigt betyg</div>
                  <div className="text-sm text-gray-500">3 dagar sedan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Notifications = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            notification.type === 'success' ? 'bg-green-500 text-white' :
            notification.type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
          } animate-slide-in`}
        >
          <div className="flex items-center space-x-2">
            {notification.type === 'success' && <CheckCircle className="h-5 w-5" />}
            {notification.type === 'error' && <AlertCircle className="h-5 w-5" />}
            {notification.type === 'info' && <AlertCircle className="h-5 w-5" />}
            <span>{notification.message}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'upload':
        return user ? <UploadPage /> : <LoginPage />;
      case 'login':
      case 'register':
        return <LoginPage />;
      case 'profile':
        return user ? <ProfilePage /> : <LoginPage />;
      case 'cart':
        return <CartPage />;
      case 'ai-tools':
        return <AIToolsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>
      <Notifications />
    </div>
  );
};

export default AnteckningsBanken;