interface StockDataPoint {
  date: string;
  price: number;
}

/**
 * Generates random stock price data starting from a given date
 * @param startDate - Starting date (YYYY-MM-DD format)
 * @param days - Number of days to generate
 * @param basePrice - Initial price
 * @param volatility - Price volatility (0-1, default 0.02 = 2%)
 */
export function generateStockData(
  startDate: string = "2024-11-20",
  days: number = 400,
  basePrice: number = 105,
  volatility: number = 0.02
): StockDataPoint[] {
  const data: StockDataPoint[] = [];
  let currentPrice = basePrice;
  const date = new Date(startDate);

  for (let i = 0; i < days; i++) {
    // Generate random price change within volatility range
    const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
    currentPrice = Math.max(currentPrice + change, 1); // Ensure price stays positive

    data.push({
      date: date.toISOString().split("T")[0],
      price: Math.round(currentPrice * 100) / 100,
    });

    // Move to next day
    date.setDate(date.getDate() + 1);
  }

  return data;
}

// Generate stock data
export const stockData = generateStockData();