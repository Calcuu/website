import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Download, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-calcuu-white font-inter">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-calcuu-white/95 backdrop-blur-sm border-b border-calcuu-detail">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-calcuu-primary rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-calcuu-white rounded opacity-90 flex items-center justify-center">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-calcuu-primary rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-calcuu-secondary">
                Calcuu
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Functies
              </a>
              <a
                href="#demo"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Prijzen
              </a>
              <a
                href="#download"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Download
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-calcuu-accent hover:bg-calcuu-accent/90 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Probeer Gratis
              </Button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-calcuu-secondary hover:text-calcuu-primary transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-calcuu-white to-calcuu-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              {/* Headlines */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-calcuu-secondary leading-[1.1] tracking-tight">
                  Maakt offertes,{" "}
                  <span className="text-calcuu-primary">zonder rekenwerk</span>
                </h1>
                <p className="text-lg md:text-xl text-calcuu-text-sub leading-relaxed max-w-2xl">
                  Slimme calculatie-app voor vakschilders. Van tekening naar
                  professionele offerte in enkele minuten.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-calcuu-accent hover:bg-calcuu-accent/90 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Probeer Gratis
                </Button>
              </div>
            </div>

            {/* App Mockup */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-calcuu-background rounded-[2.5rem] overflow-hidden">
                    <div className="h-8 bg-calcuu-white flex items-center justify-center">
                      <div className="w-20 h-1 bg-black rounded-full opacity-30"></div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-calcuu-primary rounded w-24"></div>
                      <div className="h-32 bg-calcuu-detail rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-calcuu-detail rounded w-3/4"></div>
                        <div className="h-4 bg-calcuu-detail rounded w-1/2"></div>
                      </div>
                      <div className="h-12 bg-calcuu-accent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-calcuu-secondary mb-6 tracking-tight">
              Alles wat je nodig hebt voor snelle offertes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Visuele Calculatie",
                description:
                  "Teken je project, wij berekenen automatisch materiaal en uren",
                icon: "📐",
              },
              {
                title: "Direct Offreren",
                description:
                  "Professionele offertes ter plekke, zelfs tijdens het klantbezoek",
                icon: "📄",
              },
              {
                title: "Alles-in-één",
                description:
                  "Urenregistratie, fotodocumentatie, relatiebeheer en materiaalplanning",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-calcuu-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-16 lg:py-24 bg-calcuu-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary mb-4">
            Zie Calcuu in actie
          </h2>
          <p className="text-lg text-calcuu-text-sub mb-12 max-w-2xl mx-auto">
            Bekijk hoe snel je van schets naar offerte gaat
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-calcuu-detail rounded-2xl aspect-video flex items-center justify-center shadow-lg">
              <Button
                size="lg"
                variant="ghost"
                className="bg-calcuu-white/90 hover:bg-calcuu-white text-calcuu-secondary rounded-full w-20 h-20 shadow-lg"
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold px-8 py-3 rounded-xl"
              >
                Bekijk Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-16">
            Perfect voor elke schilder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "ZZP Schilders",
                description:
                  "Meer tijd voor schilderen, minder tijd achter de computer",
              },
              {
                title: "Schildersbedrijven",
                description:
                  "Consistente offertes en betere calculaties voor je team",
              },
              {
                title: "Klussen & Onderhoud",
                description:
                  "Ook voor kleinere klussen altijd een professionele offerte",
              },
            ].map((audience, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                  {audience.title}
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-calcuu-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-16">
              Waarom kiezen voor Calcuu?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Bespaar uren per offerte",
                "Geen rekenmistoeken meer",
                "Professionele uitstraling",
                "Werkt offline",
                "Direct ter plekke offreren",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <CheckCircle className="w-6 h-6 text-calcuu-success flex-shrink-0" />
                  <span className="text-lg text-calcuu-secondary">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-16">
            Eenvoudige prijsstelling
          </h2>

          <div className="max-w-md mx-auto">
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-xl border border-calcuu-detail relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-calcuu-success text-white font-semibold px-4 py-1">
                50% KORTING
              </Badge>

              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="text-calcuu-text-sub line-through text-xl">
                    €50
                  </div>
                  <div className="text-5xl font-bold text-calcuu-accent">
                    €25
                  </div>
                  <div className="text-calcuu-text-sub">per maand</div>
                </div>

                <div className="text-sm text-calcuu-text-sub">
                  Eerste maand gratis proberen
                </div>

                <div className="space-y-3 text-left">
                  {[
                    "Onbeperkte projecten",
                    "Alle functies inbegrepen",
                    "Email ondersteuning",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-calcuu-success" />
                      <span className="text-calcuu-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-full bg-calcuu-accent hover:bg-calcuu-accent/90 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Vandaag
                </Button>

                <p className="text-sm text-calcuu-text-sub">
                  Beperkte tijd aanbieding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section
        id="download"
        className="py-16 lg:py-24 bg-gradient-to-br from-calcuu-background to-calcuu-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary mb-8">
              Download Calcuu
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <div className="w-48 h-96 bg-black rounded-[2rem] p-1 shadow-xl">
              <div className="w-full h-full bg-calcuu-background rounded-[1.5rem]"></div>
            </div>
            <div className="w-48 h-96 bg-black rounded-[2rem] p-1 shadow-xl hidden sm:block">
              <div className="w-full h-full bg-calcuu-background rounded-[1.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-calcuu-secondary text-calcuu-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-calcuu-primary rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-calcuu-white rounded opacity-90"></div>
                </div>
                <span className="text-xl font-bold">Calcuu</span>
              </div>
              <p className="text-gray-300 text-sm">
                Slimme calculatie-app voor vakschilders
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@calcuu.nl</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+31 6 12345678</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Voorwaarden
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs bg-white text-black px-3 py-2 rounded-lg">
                  <Download className="w-4 h-4" />
                  <span>App Store</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-white text-black px-3 py-2 rounded-lg">
                  <Download className="w-4 h-4" />
                  <span>Google Play</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            © 2024 Calcuu by Zinger Company. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
