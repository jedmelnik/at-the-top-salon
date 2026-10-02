import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit At The Top Salon at 219 E. Blithedale Ave. in Mill Valley, or call (415) 381-3707.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Contact"
          lede="Book the appointment that gets you looking beautiful and classy - we are on East Blithedale in Mill Valley."
          // Focal: vanity / updo atmosphere
          image={{
            src: "/images/heroes/atmosphere-beauty.jpg",
            alt: "Quietly glamorous salon vanity ready for your appointment",
            width: 1280,
            height: 720,
            focalX: 0.48,
            focalY: 0.42,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.18, t: 0.08, r: 0.9, b: 0.92 },
          }}
          actions={
            <Button
              nativeButton={false}
              render={
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="h-11 rounded-md bg-champagne px-5 text-sm font-semibold text-ink hover:bg-champagne/90"
            >
              {site.bookingLabel}
            </Button>
          }
        />

        <section className="site-wrap grid gap-12 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              Visit the salon
            </h2>
            <div className="mt-3 h-[2px] w-14 bg-champagne" />
            <dl className="mt-6 space-y-5 text-base">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                  Address
                </dt>
                <dd className="mt-1 leading-relaxed text-foreground/85">
                  <address className="not-italic">{site.address.full}</address>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-ink hover:text-sage"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.emailHref}
                    className="font-semibold text-ink hover:text-sage"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="h-11 rounded-md bg-sage px-6 font-semibold text-white hover:bg-sage/90"
              >
                Get directions
              </Button>
              <Button
                nativeButton={false}
                render={<a href={site.phoneHref} />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-border bg-transparent px-6 font-semibold text-ink hover:bg-accent"
              >
                Call {site.phone}
              </Button>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-border/70 bg-muted">
              <iframe
                title="Map to At The Top Salon"
                src={site.mapsEmbed}
                className="h-64 w-full md:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              Send a message
            </h2>
            <div className="mt-3 h-[2px] w-14 bg-champagne" />
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Prefer email? Share a few details and we will follow up. For the
              fastest booking, use the online scheduler.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
