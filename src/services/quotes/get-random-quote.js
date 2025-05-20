import motivationalQuotes from "../../assets/data/motivational-quotes.json";

const getRandomQuote = () => {
  const quotes = motivationalQuotes;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return randomQuote;
};

export { getRandomQuote };
