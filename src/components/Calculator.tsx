import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "@/components/AnimatedNumber";

const Calculator = () => {
  const [offertes, setOffertes] = useState(2);
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
    const nettoSaving = moneySaving - 45;

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
                    className="w-full rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      height: "6px",
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
                    min="1"
                    max="500"
                    step="1"
                    value={hourlyRate || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setHourlyRate(0);
                      } else {
                        const numValue = parseInt(value);
                        if (!isNaN(numValue)) {
                          setHourlyRate(numValue);
                        }
                      }
                    }}
                    onBlur={(e) => {
                      const value = parseInt(e.target.value);
                      if (isNaN(value) || value <= 0) {
                        setHourlyRate(50);
                      }
                    }}
                    className="flex-1 text-gray-900 border-none outline-none bg-transparent"
                    placeholder="50"
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
                <div className="text-lg font-bold text-white mb-4">
                  Per maand bespaar je €&nbsp;
                  <AnimatedNumber value={nettoSaving} duration={800} />
                  &nbsp;en&nbsp;
                  <AnimatedNumber
                    value={timeWinHours * 60}
                    decimals={0}
                    duration={600}
                  />
                  &nbsp;minuten.
                </div>

                {/* Prominent Yearly Savings */}
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="text-sm text-gray-200 mb-2">
                    Netto besparing per jaar
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    <AnimatedNumber
                      value={nettoSaving * 12}
                      prefix="€"
                      duration={1000}
                    />
                  </div>
                  <div className="text-sm text-gray-300">
                    dat is totaal&nbsp;
                    <AnimatedNumber
                      value={timeWinHours * 12}
                      decimals={1}
                      duration={800}
                    />
                    &nbsp;uur per jaar
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-xs text-gray-300">
                  Hoe komen we aan dit bedrag?
                </div>
                <div className="text-xs text-gray-400 mb-3 leading-relaxed">
                  <p className="mb-3">
                    Normaal kost het werk opnemen, het berekenen en het
                    uitwerken van een offerte je al snel 90 minuten. Met de
                    Calcuu app doe je dit in een fractie van de tijd. (60%
                    sneller)
                  </p>
                  <p>
                    De tijd die je bespaart x jouw uurloon = jouw winst.{" "}
                    <span style={{ color: "rgb(255, 255, 255)" }}>
                      Het bedrag dat je hierboven ziet staan, is inclusief een
                      Calcuu-abonnement{" "}
                    </span>
                    – je gaat er dus niets op achteruit, alleen maar op vooruit.
                  </p>
                </div>

                <Button
                  style={{ backgroundColor: "#5B29DE" }}
                  className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity mt-4"
                >
                  Start nu 14 dagen gratis
                </Button>

                <hr className="border-gray-600 my-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
