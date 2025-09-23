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
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
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
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
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
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
    image: realEstate,
    link: "/invest/real-estate",
    background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", //Lovely lilly,
  },
  {
    id: 3,
    roi: 24,
    name: "Stock Trading",
    title: "Stock Tranding | 24%",
    description:
      "Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    buttonBackground: productList.find((productList) => productList.id === 2)
      ?.background,
  },
  stockTrading: {
    pageTitle: "Stock Trading",
    color: productList.find((productList) => productList.id === 3)?.background,
    buzzText: `Get up to ${
      productList.find((productList) => productList.id === 3)?.roi
    }% Returns on Investment`,
    pageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    image: agriculture,
  },
  autoMobile: {
    product: "Auto-Mobile",
    backgroundColor: productList.find((productList) => productList.id === 1)
      ?.background,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    image: autoMobile,
  },
  realEstate: {
    product: "Real Estate",
    backgroundColor: productList.find((productList) => productList.id === 2)
      ?.background,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
    image: realEstate,
  },
  stockTrading: {
    product: "Stock Trading",
    backgroundColor: productList.find((productList) => productList.id === 3)
      ?.background,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, adipisci veritatis animi eum tempora consequatur voluptatibus. Minima totam voluptates at culpa nobis eum aspernatur quo? Assumenda cum dolorum illo.",
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
