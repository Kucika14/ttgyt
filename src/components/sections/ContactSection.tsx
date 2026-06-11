import { contactSection } from "@/content";

export function ContactSection() {
  const { contact } = contactSection;

  return (
    <section id="contact" aria-label="Elérhetőség" className="w-full bg-[oklch(0.95_0.04_255)] py-16 sm:py-20">
      {/* Kapcsolati adatok – szűkített */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <address className="mx-auto mt-0 grid max-w-3xl gap-8 not-italic sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {contactSection.emailLabel}
            </span>
            <a
              href={contact.emailHref}
              className="text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {contactSection.phoneLabel}
            </span>
            <a
              href={contact.phoneHref}
              className="text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {contact.phone}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {contactSection.addressLabel}
            </span>
            <p className="text-sm text-foreground">{contact.address}</p>
            <p className="text-xs text-muted-foreground">{contact.addressNote}</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center sm:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {contactSection.areaLabel}
            </span>
            <p className="text-sm text-foreground">{contact.areaServed}</p>
          </div>
        </address>
      </div>

      {/* Térkép – teljes szélesség */}
      <div className="mt-12 overflow-hidden border-y border-border">
        <iframe
          title="Rendelő helyszíne – Google Maps"
          src={contact.mapsEmbedSrc}
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          href={contact.streetViewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Utcakép megtekintése (Street View) →
        </a>
      </div>
    </section>
  );
}
