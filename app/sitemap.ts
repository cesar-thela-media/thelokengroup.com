import type { MetadataRoute } from "next";
import { BRAND, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: ROUTES.sell, priority: 0.9, changeFrequency: "monthly" as const },
    { path: ROUTES.guaranteed, priority: 0.9, changeFrequency: "monthly" as const },
    { path: ROUTES.buyBeforeYouSell, priority: 0.9, changeFrequency: "monthly" as const },
    { path: ROUTES.cashOffer, priority: 0.9, changeFrequency: "monthly" as const },
    { path: ROUTES.buy, priority: 0.9, changeFrequency: "monthly" as const },
    { path: ROUTES.buildDreamHome, priority: 0.8, changeFrequency: "monthly" as const },
    { path: ROUTES.communities, priority: 0.8, changeFrequency: "monthly" as const },
    { path: ROUTES.schools, priority: 0.8, changeFrequency: "monthly" as const },
    { path: ROUTES.mapSearch, priority: 0.8, changeFrequency: "weekly" as const },
    { path: ROUTES.searchHomes, priority: 0.8, changeFrequency: "weekly" as const },
    { path: ROUTES.recentlySold, priority: 0.7, changeFrequency: "weekly" as const },
    { path: ROUTES.meetTheTeam, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.experience, priority: 0.7, changeFrequency: "yearly" as const },
    { path: ROUTES.reviews, priority: 0.7, changeFrequency: "weekly" as const },
    { path: ROUTES.mission, priority: 0.6, changeFrequency: "yearly" as const },
    { path: ROUTES.careers, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.partners, priority: 0.6, changeFrequency: "monthly" as const },
    { path: ROUTES.referrals, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.blog, priority: 0.8, changeFrequency: "weekly" as const },
    { path: ROUTES.media, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.pressReleases, priority: 0.6, changeFrequency: "monthly" as const },
    { path: ROUTES.tvRadioAds, priority: 0.5, changeFrequency: "monthly" as const },
    { path: ROUTES.tlgGives, priority: 0.6, changeFrequency: "monthly" as const },
    { path: ROUTES.contact, priority: 0.8, changeFrequency: "yearly" as const },
    { path: ROUTES.resources, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.faq, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
