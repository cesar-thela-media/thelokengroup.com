export const BRAND = {
  name: "The Loken Group",
  tagline: "We Guarantee To Sell Your Home",
  phone: "(281) 861-4624",
  phoneHref: "tel:2818614624",
  email: "info@lokengroup.com",
  pressEmail: "press@lokengroup.com",
  address: "The Woodlands, TX",
  url: "https://www.thelokengroup.com",
  kw: "Keller Williams",
} as const;

export const STATS = {
  avgDaysOnMarket: 29,
  avgAboveAskingPct: 2,
  homesPerYear: 500,
  guaranteedSuccessRate: 100,
  teamSize: 26,
  countiesServed: 9,
  yearsInBusiness: new Date().getFullYear() - 2008,
} as const;

export const COLORS = {
  red: "#BE1E2D",
  dark: "#1A1A1A",
} as const;

export const ROUTES = {
  // Sell
  sell: "/sell",
  guaranteed: "/your-home-sold-guaranteed",
  buyBeforeYouSell: "/buybeforeyousell",
  cashOffer: "/cash-offer-upfront",
  // Buy
  buy: "/buy",
  buildDreamHome: "/build-your-dream-home",
  // Communities
  communities: "/houston-communities",
  schools: "/schools",
  mapSearch: "/houston-map-search",
  // Search
  searchHomes: "/search-for-homes",
  recentlySold: "/recently-sold",
  // About
  meetTheTeam: "/meet-the-team",
  experience: "/the-loken-group-experience",
  reviews: "/reviews",
  mission: "/mission-statement",
  careers: "/careers",
  partners: "/partners",
  referrals: "/referrals",
  // Media
  blog: "/blog",
  media: "/media",
  pressReleases: "/press-releases",
  tvRadioAds: "/tv-radio-ads",
  // Other
  contact: "/contact",
  resources: "/resources",
  faq: "/faq",
  tlgGives: "/tlggives",
} as const;
