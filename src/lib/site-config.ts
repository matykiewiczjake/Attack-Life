export const siteConfig = {
  name: "Attack Life",
  founder: "Ryan",
  tagline: "Personal development, built around real conversations.",
  description:
    "Attack Life is a founder-led personal development brand offering guided retreats and one-on-one life coaching — every path leads to a direct conversation with Ryan.",
  url: "https://attacklife.com",
  ogImage: "/opengraph-image",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Retreats", href: "/retreats" },
  { label: "Coaching", href: "/coaching" },
  { label: "About", href: "/about" },
];

export const contactHref = "/contact";
