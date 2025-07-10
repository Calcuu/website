import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-calcuu-white to-calcuu-background">
      {/* Header Navigation */}
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

            {/* Back to Home Button */}
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              Terug naar Home
            </Button>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-2xl mx-auto">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-9xl lg:text-[12rem] font-bold text-calcuu-primary/20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-calcuu-secondary">
              Oeps! Deze pagina bestaat niet
            </h2>
            <p className="text-lg text-calcuu-text-sub leading-relaxed">
              De pagina die je zoekt kan niet worden gevonden. Misschien is de
              link verouderd of heb je een verkeerde URL ingetypt.
            </p>
            <div className="text-sm text-calcuu-text-sub bg-calcuu-background rounded-lg p-4">
              <span className="font-medium">Gezochte pagina:</span>
              <code className="ml-2 bg-white px-2 py-1 rounded text-calcuu-primary">
                {location.pathname}
              </code>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold px-8"
            >
              <Home className="w-5 h-5 mr-2" />
              Ga naar Home
            </Button>

            <Button
              onClick={() => navigate(-1)}
              size="lg"
              variant="outline"
              className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold px-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ga Terug
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-calcuu-detail">
            <h3 className="text-lg font-semibold text-calcuu-secondary mb-4">
              Misschien zoek je dit:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/")}
                className="p-4 bg-white rounded-lg border border-calcuu-detail hover:border-calcuu-primary transition-colors group"
              >
                <div className="text-calcuu-primary group-hover:text-calcuu-primary font-semibold">
                  Functies
                </div>
                <div className="text-sm text-calcuu-text-sub mt-1">
                  Ontdek wat Calcuu kan
                </div>
              </button>

              <button
                onClick={() => navigate("/")}
                className="p-4 bg-white rounded-lg border border-calcuu-detail hover:border-calcuu-primary transition-colors group"
              >
                <div className="text-calcuu-primary group-hover:text-calcuu-primary font-semibold">
                  Prijzen
                </div>
                <div className="text-sm text-calcuu-text-sub mt-1">
                  Bekijk onze tarieven
                </div>
              </button>

              <button
                onClick={() => navigate("/")}
                className="p-4 bg-white rounded-lg border border-calcuu-detail hover:border-calcuu-primary transition-colors group"
              >
                <div className="text-calcuu-primary group-hover:text-calcuu-primary font-semibold">
                  Download
                </div>
                <div className="text-sm text-calcuu-text-sub mt-1">
                  Download de app
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
