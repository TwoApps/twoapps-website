"use client";

import { useState, useCallback, createContext, useContext, type ReactNode } from "react";

export type Currency = {
  code: string;
  symbol: string;
  label: string;
  multiplier: number;
};

export const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", label: "US Dollar", multiplier: 1 },
  { code: "SGD", symbol: "S$", label: "Singapore Dollar", multiplier: 1.35 },
  { code: "AED", symbol: "د.إ", label: "UAE Dirham", multiplier: 3.67 },
  { code: "AUD", symbol: "A$", label: "Australian Dollar", multiplier: 1.53 },
  { code: "NZD", symbol: "NZ$", label: "New Zealand Dollar", multiplier: 1.71 },
  { code: "EUR", symbol: "€", label: "Euro", multiplier: 0.92 }
];

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (usdPrice: number) => number;
  formatPrice: (usdPrice: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return ctx;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(CURRENCIES[0]);

  const setCurrency = useCallback((c: Currency) => setCurrencyState(c), []);

  const convertPrice = useCallback(
    (usdPrice: number) => Math.round(usdPrice * currency.multiplier),
    [currency.multiplier]
  );

  const formatPrice = useCallback(
    (usdPrice: number) => {
      const converted = convertPrice(usdPrice);
      return `${currency.symbol}${converted.toLocaleString()}`;
    },
    [currency, convertPrice]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function CurrencySelector({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className={`relative inline-block ${className}`}>
      <select
        value={currency.code}
        onChange={(e) => {
          const found = CURRENCIES.find((c) => c.code === e.target.value);
          if (found) setCurrency(found);
        }}
        className="focus-ring appearance-none rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 pr-10 text-sm text-ink/90 hover:border-accent-1/20 hover:bg-accent-1/[0.04] cursor-pointer transition-colors"
        aria-label="Select currency"
      >
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code} className="bg-[#020406] text-ink">
            {c.code} — {c.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg className="h-4 w-4 text-ink/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export function Price({ usdAmount, className = "" }: { usdAmount: number; className?: string }) {
  const { formatPrice, currency } = useCurrency();
  return (
    <span className={className} data-usd={usdAmount} data-currency={currency.code}>
      {formatPrice(usdAmount)}
    </span>
  );
}
