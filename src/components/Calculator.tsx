import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "@/components/AnimatedNumber";

const Calculator = () => {
  const [offertes, setOffertes] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Calculate values based on your formulas
  const calculateValues = () => {
    // Formulas from specification:
    // • Totale tijdwinst per maand (in minuten): x × 90 × 0.60
    // • Tijdwinst in uren (afronden op 1 decimaal): (x × 90 × 0.60) ÷ 60
    // • Geldbesparing op tijd (in €): Tijdwinst in uren × €50
    // • Netto besparing: Geldbesparing – €45

    const totalTimeWinMinutes = offertes * 90 * 0.6;
    const timeWinHours = Math.round((totalTimeWinMinutes / 60) * 10) / 10;
    const moneySaving = timeWinHours * hourlyRate;
    const nettoSaving = moneySaving - 35;

    return {
      timeWinHours,
      moneySaving: Math.round(moneySaving),
      nettoSaving: Math.round(nettoSaving),
    };
  };

  const { timeWinHours, moneySaving, nettoSaving } = calculateValues();

  const increaseHourlyRate = () => setHourlyRate((prev) => prev + 1);
  const decreaseHourlyRate = () =>
    setHourlyRate((prev) => Math.max(1, prev - 1));

  return (
    <section className="py-16 lg:py-24 bg-calcuu-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-calcuu-secondary mb-12">
            Hoeveel tijd scheelt het jou?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Side - Calculator Input */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-sm text-gray-600 mb-4">
                <p>
                  Hoeveel offertes maak je per maand? Schuif de slider en zie
                  direct je tijdwinst en kostenbesparing!
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <b>
                    Aantal offertes per maand:{" "}
                    <AnimatedNumber value={offertes} />
                  </b>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={offertes}
                    onChange={(e) => setOffertes(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: "#242447",
                      outline: "none",
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wat is je uurloon? (optioneel)
                </label>
                <div className="flex items-center border-2 border-gray-300 rounded px-3 py-3 bg-white w-full">
                  <span className="text-gray-700 mr-3">€</span>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(parseFloat(e.target.value) || 50)
                    }
                    className="flex-1 text-gray-900 border-none outline-none bg-transparent"
                  />
                  <span className="text-gray-500 mr-3">/uur</span>
                  <div className="flex flex-col items-center justify-center">
                    <button
                      className="text-xs text-gray-500 leading-none mb-px hover:text-gray-700"
                      onClick={increaseHourlyRate}
                    >
                      ▲
                    </button>
                    <button
                      className="text-xs text-gray-500 leading-none hover:text-gray-700"
                      onClick={decreaseHourlyRate}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Calculation Result */}
            <div
              style={{ backgroundColor: "#242447" }}
              className="rounded-lg p-6 text-white"
            >
              <div className="text-center mb-4">
                <div className="text-sm text-gray-300 mb-2">
                  Netto besparing per maand met Calcuu
                </div>
                <div
                  className="text-5xl font-bold text-white"
                  style={{ margin: "20px 0" }}
                >
                  <AnimatedNumber
                    value={nettoSaving}
                    prefix="€"
                    duration={800}
                  />
                </div>
                <div className="text-sm text-gray-300">
                  en je bespaart{" "}
                  <AnimatedNumber
                    value={timeWinHours}
                    decimals={1}
                    duration={600}
                  />{" "}
                  uur per maand
                </div>
              </div>

              <Button
                style={{ backgroundColor: "#5B29DE" }}
                className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Start nu 14 dagen gratis
              </Button>

              <div className="mt-4 space-y-2">
                <div className="text-xs text-gray-300">
                  Hoe komen we aan dit bedrag?
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">Tijdwinst per maand</span>
                  <span className="text-white">
                    <AnimatedNumber
                      value={timeWinHours}
                      decimals={1}
                      suffix=" uur"
                      duration={600}
                    />
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">
                    Besparing (tijdwinst × uurloon)
                  </span>
                  <span className="text-white">
                    <AnimatedNumber
                      value={moneySaving}
                      prefix="€"
                      duration={600}
                    />
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">
                    Minus abonnement Calcuu per maand
                  </span>
                  <span className="text-white">€35</span>
                </div>
                <hr className="border-gray-600 my-2" />
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white">Netto besparing per maand</span>
                  <span className="text-white">
                    <AnimatedNumber
                      value={nettoSaving}
                      prefix="€"
                      duration={800}
                    />
                  </span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-white">Netto besparing per jaar</span>
                  <span className="text-white">
                    <AnimatedNumber
                      value={nettoSaving * 12}
                      prefix="€"
                      duration={800}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
