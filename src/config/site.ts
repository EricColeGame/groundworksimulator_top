export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  websiteUrl?: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const SCHEMA_ORG_URL = "https://schema.org";

export const siteConfig: SiteConfig = {
  name: "Groundwork Simulator Wiki",
  shortName: "Groundwork Simulator",
  logoText: "G",
  tagline: "Excavation, Heavy Machinery & Gold Mining Guides",
  description: "Groundwork Simulator guides covering excavation, heavy machinery, gold mining, terrain shaping, wash plant setups, transportation, and four-player cooperative gameplay.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://groundworksimulator.top",
  supportEmail: "support@groundworksimulator.top",
  websiteUrl: "https://groundworksimulator.com/",
  gameUrl: "https://store.steampowered.com/app/5306540/Groundwork_Simulator/",
  heroVideoId: "LnW2wxww8nw", // Groundwork Simulator official announcement trailer
  social: {
    youtube: "https://www.youtube.com/@groundworksimulator",
    instagram: "https://www.instagram.com/groundworksimulator/",
  },
  locales: ["en", "de", "fr", "pt-BR"],
  defaultLocale: "en",
};
