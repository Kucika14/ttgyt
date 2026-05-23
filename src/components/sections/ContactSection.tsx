import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactSection } from "@/content";

export function ContactSection() {
  const { contact } = contactSection;

  return (
    <SectionWrapper
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl bg-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {contactSection.heading}
        </h2>
        <p className="mt-4 text-base text-muted-foreground">{contactSection.description}</p>
      </div>

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
        </div>
      </address>
    </SectionWrapper>
  );
}
