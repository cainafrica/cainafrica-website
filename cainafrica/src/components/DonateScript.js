
import { useState } from "react";

const useDonationCurrency = () => {
  const [currency, setCurrency] = useState("USD");

  const isNGN = currency === "NGN";

  const toggleCurrency = () => {
    setCurrency((current) => current === "USD" ? "NGN" : "USD");
  };

  const price = (usd) => {
    if (isNGN) {
      return `₦${(usd * 1500).toLocaleString("en-NG")}/mo`;
    }
    return `$${usd}/mo`;
  };

  const conversion = (usd) => {
    if (isNGN) {
      return `≈ $${usd}`;
    }
    return `≈ ₦${(usd * 1500).toLocaleString("en-NG")}`;
  };

  return {
    isNGN,
    toggleCurrency,
    price,
    conversion
  };
};

export default useDonationCurrency;