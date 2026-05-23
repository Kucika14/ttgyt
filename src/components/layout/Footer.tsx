import Link from "next/link";
import { footer, navigation } from "@/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-base font-bold text-foreground">{footer.brand}</p>
            <p className="mt-2 text-sm text-muted-foreground">{footer.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label={footer.navAriaLabel}>
            <p className="text-sm font-semibold text-foreground">Navigáció</p>
            <ul className="mt-3 space-y-2" role="list">
              {navigation.links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-foreground">{footer.contactTitle}</p>
            <address className="mt-3 not-italic">
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li>
                  <a
                    href={footer.contact.emailHref}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {footer.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={footer.contact.phoneHref}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {footer.contact.phone}
                  </a>
                </li>
                <li>{footer.contact.address}</li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>{footer.copyright(currentYear)}</p>
        </div>
      </div>
    </footer>
  );
}
