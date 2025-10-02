import agriculture from "../../public/agriculture.png";
import gold from "../../public/gold.png";
import stockTrading from "../../public/stock-trading-3.png";
import realEstate from "../../public/real-estate.png";
import autoMobile from "../../public/auto-mobile.png";
import transportation from "../../public/transportation-1.png";

export const productList = [
  {
    id: 0,
    roi: 24,
    name: "Agriculture",
    title: "Agriculture | 24%",
    description:
      "Agriculture investment involves putting money into farming-related ventures to earn a return. This could include crop farming, livestock, agro-processing, storage, or agri-tech.",
    image: agriculture,
    link: "/invest/agriculture",
    background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", // Tempting Azure
  },
  {
    id: 1,
    roi: 24,
    name: "Auto-Mobile",
    title: "Auto-mobile | 24%",
    description:
      "Automobile investment refers to putting money into the car industry or related sectors to earn profits.",
    image: autoMobile,
    link: "/invest/automobile",
    background:
      "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)", //Cloudy Apple,
  },
  {
    id: 2,
    roi: 24,
    name: "Real Estate",
    title: "Real-estate | 24%",
    description:
      "Real estate investment is the act of putting money into property—land or buildings—with the goal of earning a return through rental income, capital appreciation, or both.",
    image: realEstate,
    link: "/invest/real-estate",
    background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", //Lovely lilly,
  },
  {
    id: 3,
    roi: 24,
    name: "Shares/Stock Trading",
    title: "Shares/Stock Trading | 24%",
    description:
      "Shares/Stock Trading Investment involves buying and selling ownership units (called shares or stocks) of publicly listed companies to earn a profit.",
    image: stockTrading,
    link: "/invest/stock-trading",
    background: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)", //Spring Warmth
  },
  {
    id: 4,
    roi: 24,
    name: "Transportation",
    title: "Transportation | 24%",
    description:
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
    image: transportation,
    link: "/invest/transportation",
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)", //Malibu Beach
  },
  {
    id: 5,
    roi: 24,
    name: "Gold",
    title: "Gold | 24%",
    description:
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
    image: gold,
    link: "/invest/gold",
    background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)", //Sunny Morning
  },
];

export const productHero = {
  agriculture: {
    pageTitle: "Agriculture",
    color: productList.find((productList) => productList.id === 0)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 0)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Agriculture investment involves putting money into farming-related ventures to earn a return. This could include crop farming, livestock, agro-processing, storage, or agri-tech.",
    buttonBackground: productList.find((productList) => productList.id === 0)
      ?.background,
  },
  autoMobile: {
    pageTitle: "Auto-Mobile",
    color: productList.find((productList) => productList.id === 1)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 1)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Automobile investment refers to putting money into the car industry or related sectors to earn profits.",
    buttonBackground: productList.find((productList) => productList.id === 1)
      ?.background,
  },
  realEstate: {
    pageTitle: "Real Estate",
    color: productList.find((productList) => productList.id === 2)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 2)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Real estate investment is the act of putting money into property—land or buildings—with the goal of earning a return through rental income, capital appreciation, or both.",
    buttonBackground: productList.find((productList) => productList.id === 2)
      ?.background,
  },
  stockTrading: {
    pageTitle: "Shares/Stock Trading",
    color: productList.find((productList) => productList.id === 3)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 3)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Shares/Stock Trading Investment involves buying and selling ownership units (called shares or stocks) of publicly listed companies to earn a profit.",
    buttonBackground: productList.find((productList) => productList.id === 3)
      ?.background,
  },
  transportation: {
    pageTitle: "Transportation",
    color: productList.find((productList) => productList.id === 4)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 4)?.roi
    } Returns on Investment`,
    pageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    buttonBackground: productList.find((productList) => productList.id === 4)
      ?.background,
  },
  gold: {
    pageTitle: "Gold",
    color: productList.find((productList) => productList.id === 5)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 0)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    buttonBackground: productList.find((productList) => productList.id === 5)
      ?.background,
  },
};

export const whyThisProduct = {
  agriculture: {
    product: "Agriculture",
    backgroundColor: productList.find((productList) => productList.id === 0)
      ?.background,
    description: [
      "High demand (food is essential)",
      "Government support & incentives",
      "Export opportunities",
      "Job creation",
      "Often recession-resistant",
    ],
    image: agriculture,
  },
  autoMobile: {
    product: "Auto-Mobile",
    backgroundColor: productList.find((productList) => productList.id === 1)
      ?.background,
    description: [
      "High demand for vehicles in developing countries",
      "Transport is essential to daily life",
      "Can generate steady cash flow  ",
      "Strong resale value for certain vehicles",
    ],
    image: autoMobile,
  },
  realEstate: {
    product: "Real Estate",
    backgroundColor: productList.find((productList) => productList.id === 2)
      ?.background,
    description: [
      "Steady cash flow (rent)",
      "Property value increases over time",
      "Assets can be used as collateral",
      "Tax advantages and incentives",
    ],
    image: realEstate,
  },
  stockTrading: {
    product: "Stock Trading",
    backgroundColor: productList.find((productList) => productList.id === 3)
      ?.background,
    description: [
      "Potential for high returns",
      "Easy to start with small capital",
      "Liquidity (can sell any time)",
      "Ownership in top-performing companies",
      "Regulated and transparent markets",
    ],
    image: stockTrading,
  },
  transportation: {
    product: "Transportation",
    backgroundColor: productList.find((productList) => productList.id === 4)
      ?.background,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    image: transportation,
  },
  gold: {
    product: "Gold",
    backgroundColor: productList.find((productList) => productList.id === 5)
      ?.background,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    image: gold,
  },
};
