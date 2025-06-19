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
            <div className="flex items-end gap-3">
              <img
                src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                alt="Calcuu Logo"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <span
                className="text-xl lg:text-2xl font-bold text-calcuu-secondary"
                style={{ fontFamily: "Toxigenesis, sans-serif" }}
              >
                CALCUU
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
                className="hidden sm:inline-flex bg-calcuu-success hover:bg-calcuu-success/90 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
                  Stop met het maken van&nbsp;
                  <span className="text-calcuu-primary">offertes</span> in de
                  avonduren
                </h1>
                <p className="text-lg md:text-xl text-calcuu-text-sub leading-relaxed max-w-2xl">
                  Calcuu is de slimme calculatie-app voor vakschilders. Van
                  tekening naar professionele offerte in enkele minuten.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-calcuu-success hover:bg-calcuu-success/90 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Probeer Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Bekijk demo video
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
                      <div className="h-12 bg-calcuu-success rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Block Section */}
      <section className="py-16 lg:py-20 bg-calcuu-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Block 1 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-calcuu-primary/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-calcuu-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-full bg-calcuu-detail flex items-center justify-center group-hover:bg-calcuu-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Automatische berekeningen
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Laat de app het werk doen. Voer je project in en krijg direct
                nauwkeurige calculaties voor materiaal en arbeid.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-calcuu-success/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-calcuu-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-full bg-calcuu-detail flex items-center justify-center group-hover:bg-calcuu-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Professionele offertes
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Genereer direct ter plekke professionele offertes die indruk
                maken op je klanten en je bedrijf serieus laten overkomen.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-calcuu-success/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-calcuu-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-full bg-calcuu-detail flex items-center justify-center group-hover:bg-calcuu-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Bespaar tijd
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Van uren naar minuten. Besteed je avonden aan wat echt
                belangrijk is in plaats van achter de computer zitten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-calcuu-primary mb-6 tracking-tight">
              Bereken en verstuur de offerte direct op locatie.
            </h2>
            <p className="text-lg md:text-xl text-calcuu-text-sub leading-relaxed max-w-3xl mx-auto">
              Geen gedoe meer met ingewikkelde spreadsheets of handmatige
              berekeningen. Maak professionele offertes voor binnen- en
              buitenwerk in minuten, geen uren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Side - 50% width - 1 block */}
            <div className="lg:col-span-1">
              <div className="bg-calcuu-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail flex flex-col min-h-[207px] mr-0.5 -mb-1 px-8 pt-8 pb-16">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mt-5 mb-4">
                      Visuele Calculatie
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Teken je project direct in de app en krijg automatisch
                      nauwkeurige berekeningen voor materiaal, arbeid en
                      totaalprijs.
                      <br />
                      <br />
                      Zowel met het binnen- als buitenwerk worden alle kozijnen,
                      ramen, deuren, direct berekend.
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F5b56eb342c2e4f31a15814e558107f2d"
                      alt="Visuele Calculatie"
                      className="aspect-[0.5] object-cover object-top w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 50% width - 2 blocks stacked */}
            <div className="lg:col-span-1 flex flex-col gap-8 justify-start -ml-px">
              <div className="bg-calcuu-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail justify-start ml-auto flex flex-col">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                      Overzicht
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Urenregistratie, fotodocumentatie, klantbeheer en
                      materiaalplanning in één overzichtelijke app.
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2Fec3c5b217a284078a3636c326043c92f"
                      alt="Directe offreren"
                      className="aspect-[1.16] object-cover object-bottom w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-calcuu-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail justify-start ml-auto flex flex-col">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                      Direct offreren
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Genereer overzichtelijke en professionele offertes ter
                      plekke bij de klant.
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F5514f8cbf39b428b975beafed6af49bf"
                      alt="Alles-in-één"
                      className="aspect-[1.35] object-cover object-top w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
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
                className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold px-8 py-3 rounded-lg"
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
            Wij zijn benieuwd of jij dit ook herkent. Dat ...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                question:
                  "Het maken van een offerte een saai en tijdrovend proces is?",
                description:
                  "Overdag het werk opnemen en s'avonds thuis alles uitwerken / calculeren en dan digitaal omzetten naar een offerte.",
                isMiddle: false,
              },
              {
                question:
                  "Het inschatten van materialen en uren best wel moeilijk is?",
                description:
                  "Je eerst maar eens begint met één liter verf en dat je er al snel achter komt dat je tekort hebt en je weer verf moet halen.",
                isMiddle: true,
              },
              {
                question:
                  "Je eigenlijk niet precies weet hoeveel kosten je hebt gemaakt.",
                description:
                  "Ja, je schat het allemaal een beetje in. Plusminus zoveel verf en zoveel uren. Maar precies weten doe je het niet.",
                isMiddle: false,
              },
            ].map((audience, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-calcuu-primary/5 ${audience.isMiddle ? "flex flex-col" : ""}`}
              >
                <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                  {audience.question}
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-calcuu-secondary mb-6 tracking-tight">
                Offerte Maken doe je in 4 Stappen
              </h2>
              <p className="text-lg text-calcuu-text-sub max-w-3xl mx-auto">
                Maak het jezelf gemakkelijk en gebruik de&nbsp;
                <span className="font-semibold text-calcuu-secondary">
                  Calcuu app&nbsp;
                </span>
                <br />
                om het offerte proces te versnellen en te vereenvoudigen..
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual Side - Left */}
              <div className="relative">
                <div className="relative">
                  {/* Background Circle */}
                  <div className="absolute -inset-8 bg-calcuu-primary/5 rounded-full"></div>

                  {/* Desktop Mockup */}
                  <div className="relative z-10 bg-calcuu-secondary rounded-lg p-6 shadow-xl mb-8">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-calcuu-background rounded p-4 space-y-2">
                      <div className="h-4 bg-calcuu-primary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-calcuu-detail rounded w-1/2"></div>
                      <div className="h-4 bg-calcuu-detail rounded w-2/3"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-calcuu-success/20 rounded"></div>
                        <div className="h-12 bg-calcuu-primary/20 rounded"></div>
                        <div className="h-12 bg-calcuu-detail rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Mockup */}
                  <div className="absolute -bottom-4 -right-4 w-48 h-96 bg-black rounded-[2rem] p-1 shadow-2xl z-20">
                    <div className="w-full h-full bg-calcuu-background rounded-[1.5rem] overflow-hidden">
                      <div className="h-8 bg-calcuu-white flex items-center justify-center">
                        <div className="w-20 h-1 bg-black rounded-full opacity-30"></div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="h-6 bg-calcuu-primary rounded w-20"></div>
                        <div className="h-20 bg-calcuu-detail rounded"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-calcuu-detail rounded w-3/4"></div>
                          <div className="h-3 bg-calcuu-detail rounded w-1/2"></div>
                        </div>
                        <div className="h-10 bg-calcuu-success rounded"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-calcuu-detail rounded"></div>
                          <div className="h-8 bg-calcuu-primary/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps Side - Right */}
              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "Teken Je Project",
                    description:
                      "Maak een schets van het te schilderen object direct in de app. Voeg eenvoudig kamers, ramen en deuren toe via onze visuele interface.",
                  },
                  {
                    number: "2",
                    title: "Automatische Berekening",
                    description:
                      "Calcuu berekent automatisch benodigde materialen (verf, primer, etc.) en geschatte uren op basis van je tekening en oppervlaktes.",
                  },
                  {
                    number: "3",
                    title: "Controleer Gegevens",
                    description:
                      "Controleer de berekeningen en pas indien nodig aan. Voeg extra kosten toe zoals steigers, afplakwerk of voorbereiding.",
                  },
                  {
                    number: "4",
                    title: "Verstuur Offerte",
                    description:
                      "Genereer een professionele offerte en verstuur deze direct naar je klant via e-mail of print ter plekke uit.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-transparent border-2 border-calcuu-primary text-calcuu-secondary rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 relative cursor-pointer">
                      {step.number}
                    </div>
                    <div className="flex-1 transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-semibold text-calcuu-secondary mb-2 transition-all duration-300 group-hover:text-calcuu-primary">
                        {step.title}
                      </h3>
                      <p className="text-calcuu-text-sub leading-relaxed transition-all duration-300 group-hover:text-calcuu-secondary mb-10">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-calcuu-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-6">
              Waarom Calcuu voor jou de beste keuze is!
            </h2>
            <p className="text-lg text-calcuu-text-sub text-center mb-16 max-w-3xl mx-auto">
              Ontdek de voordelen die Calcuu biedt en zie waarom je geen last
              meer hebt van het gebruiken van meerdere app's en zoekrakende
              notities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Je bespaard heel veel tijd",
                "Maakt geen rekenfouten meer",
                "Professionele uitstraling",
                "Werkt zowel online als offline",
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
                  <div className="text-5xl font-bold text-calcuu-success">
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
                  className="w-full bg-calcuu-success hover:bg-calcuu-success/90 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              <div className="flex items-end gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                  alt="Calcuu Logo"
                  className="w-8 h-8"
                />
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Toxigenesis, sans-serif" }}
                >
                  CALCUU
                </span>
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
