/**
 * JSON-LD script tag renderelő komponens.
 * Kizárólag szerveroldali komponensként (RSC) használandó –
 * ne adj hozzá "use client" direktívát.
 *
 * Biztonsági megjegyzés: a `data` prop fejlesztői kontrollált objektum,
 * nem tartalmaz felhasználói bemenetet, ezért a dangerouslySetInnerHTML
 * itt biztonságos és elfogadott schema.org minta.
 */

type JsonLdProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
