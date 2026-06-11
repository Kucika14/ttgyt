import Link from "next/link";
import Image from "next/image";
import { footer, navigation } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-[#013d8a] bg-[#0251b4] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center lg:grid-cols-3 lg:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/thumbnail_ttgyt.png"
              alt={footer.brand}
              width={80}
              height={80}
              className="h-16 w-auto rounded-sm border border-transparent"
            />
            <p className="mt-3 text-sm text-white/75">{footer.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label={footer.navAriaLabel} className="flex flex-col items-center lg:items-start">
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
          <div className="flex flex-col items-center lg:items-start">
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

        {/* Facebook – jól látható sáv */}
        <div className="mt-10 border-t border-white/20 pt-8 flex justify-center">
          <a
            href={footer.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={footer.facebookLabel}
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Kövessen Facebookon
          </a>
        </div>

      </div>
    </footer>
  );
}
