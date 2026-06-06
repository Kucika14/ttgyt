import Link from "next/link";
import Image from "next/image";
import { footer, navigation } from "@/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.43_0.15_255)] bg-[oklch(0.53_0.15_255)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt={footer.brand}
              width={200}
              height={120}
              className="w-44 h-auto rounded-sm"
            />
            <p className="mt-3 text-sm text-white/75">{footer.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label={footer.navAriaLabel}>
            <p className="text-sm font-semibold text-white">Navigáció</p>
            <ul className="mt-3 space-y-2" role="list">
              {navigation.links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">{footer.contactTitle}</p>
            <address className="mt-3 not-italic">
              <ul className="space-y-2 text-sm text-white/75" role="list">
                <li>
                  <a
                    href={footer.contact.emailHref}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {footer.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={footer.contact.phoneHref}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {footer.contact.phone}
                  </a>
                </li>
                <li>{footer.contact.address}</li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          <p>{footer.copyright(currentYear)}</p>
        </div>
      </div>
    </footer>
  );
}
