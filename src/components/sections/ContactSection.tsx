import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactSection } from "@/content";

export function ContactSection() {
  const { contact } = contactSection;

  return (
    <SectionWrapper
      id="contact"
      aria-label="Elérhetőség"
      className="mx-auto w-full max-w-6xl bg-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <address className="mx-auto mt-12 grid max-w-3xl gap-8 not-italic sm:grid-cols-3">
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
      </address>

      {/* Térkép */}
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border">
        <iframe
          title="Rendelő helyszíne – Google Maps"
          src={contact.mapsEmbedSrc}
          width="100%"
          height="360"
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
    </SectionWrapper>
  );
}
