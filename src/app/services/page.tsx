import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Haircuts, expert color, Keratin Complex smoothing, nails, and more at At The Top Salon in Mill Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Services"
          lede="Estimates for featured services - call or visit for an exact quote and complimentary consultation."
          // Focal: hair texture / orchid near the face
          image={{
            src: "/images/heroes/services.jpg",
            alt: "Woman with flowing hair resting on grass with orchids",
            width: 1000,
            height: 662,
            focalX: 0.62,
            focalY: 0.42,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.28, t: 0.15, r: 0.98, b: 0.85 },
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
              className="h-11 rounded-md bg-leaf px-5 text-sm font-semibold text-ink hover:bg-leaf/90"
            >
              {site.bookingLabel}
            </Button>
          }
        />

        <section className="site-wrap py-12 md:py-16">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            All pricing for featured services is an estimate. For an exact quote,
            visit the salon or call{" "}
            <a href={site.phoneHref} className="font-semibold text-sage">
              {site.phone}
            </a>
            .
          </p>

          <ul className="mt-12 space-y-14 md:space-y-16">
            {services.map((service) => (
              <li
                key={service.slug}
                id={service.slug}
                className="grid items-start gap-6 md:grid-cols-2 md:gap-10"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <div className="mt-3 h-[2px] w-14 bg-sage" />
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">
                    {service.summary}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/70">
                    {service.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
