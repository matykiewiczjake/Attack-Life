import Link from "next/link";
import Image from "next/image";
import { contactHref, navLinks, siteConfig } from "@/lib/site-config";
import logo from "@/assets/images/logo.webp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image src={logo} alt={siteConfig.name} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Retreats, coaching, and peptide research —
              every path leads to a conversation with Ryan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-foreground">Explore</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Connect</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href={contactHref}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact Ryan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground/90 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="max-w-xl">
            Peptide information on this site is provided for research
            purposes only. Not for human consumption. Not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
