export const siteConfig = {
  name: "Attack Life",
  founder: "Ryan",
  tagline: "Personal development, built around real conversations.",
  description:
    "Attack Life is a founder-led personal development brand offering guided retreats, one-on-one life coaching, and research peptide connections — every path leads to a direct conversation with Ryan.",
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
  { label: "Peptides", href: "/peptides" },
  { label: "About", href: "/about" },
];

export const contactHref = "/contact";
