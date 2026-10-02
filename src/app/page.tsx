import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, site, wellnessNotes } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker="Mill Valley · Gallery / Salon"
          title={
            <>
              At The Top
              <br />
              Salon
            </>
          }
          lede="Discover a new style or celebrate your own timeless beauty with expert stylists in a relaxed, feel-good space."
          ledeOnMobile
          // Focal: faces of stylist and guest (center of the pair)
          image={{
            src: "/images/heroes/home-hero.png",
            alt: "Stylist and guest smiling inside At The Top Salon",
            width: 1017,
            height: 773,
            focalX: 0.48,
            focalY: 0.38,
            subject: { l: 0.22, t: 0.12, r: 0.92, b: 0.95 },
          }}
          actions={
            <>
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
                className="h-11 rounded-md bg-leaf px-5 text-sm font-semibold text-ink shadow-none transition-transform hover:bg-leaf/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
              >
                {site.bookingLabel}
              </Button>
              <Button
                nativeButton={false}
                render={<a href={site.phoneHref} />}
                variant="outline"
                size="lg"
                className="hidden h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white lg:inline-flex md:h-12 md:px-6 md:text-base"
              >
                Call {site.phone}
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Find yourself at The Top
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              A full-service Mill Valley salon for haircuts, color, highlights,
              lowlights, corrective color, manicures, and pedicures. We carry
              fine jewelry and premier product lines, and we showcase local
              artists who support this community.
            </p>
            <p className="mt-4 hidden text-base leading-relaxed text-foreground/80 md:block md:text-lg">
              Every visit should leave you confident, refreshed, and completely
              you - with music that feels right and a vibe that stays
              effortlessly uplifting.
            </p>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Services
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Cuts, color, and smoothing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                Set your standard with creative, progressive stylists - pricing
                estimates on our services page, exact quotes in the salon.
              </p>
            </div>

            <div className="mt-8 md:hidden">
              <Link
                href="/services"
                className="block rounded-md bg-ink px-5 py-4 text-center text-base font-semibold text-white transition-transform hover:scale-[1.01]"
              >
                View all services
              </Link>
            </div>

            <ul className="mt-10 hidden gap-10 md:grid md:grid-cols-2">
              {services.slice(0, 4).map((service, index) => (
                <li
                  key={service.slug}
                  className={`animate-rise-delay-${Math.min(index + 1, 2)} max-w-md`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage/80">
                    {service.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">
                    {service.summary}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden md:block">
              <Button
                nativeButton={false}
                render={<Link href="/services" />}
                size="lg"
                className="h-11 rounded-md bg-sage px-6 font-semibold text-white hover:bg-sage/90"
              >
                Explore services
              </Button>
            </div>
          </div>
        </section>

        <section className="site-wrap grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/heroes/walkway.jpg"
              alt="Walkway entrance to At The Top Salon in Mill Valley"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Visit
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              On East Blithedale in Mill Valley
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              {site.address.full}. Call {site.phone} or book online through our
              scheduling system.
            </p>
            <ul className="mt-6 space-y-4">
              {wellnessNotes.map((note) => (
                <li key={note.title}>
                  <p className="font-semibold text-ink">{note.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75 md:text-base">
                    {note.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="h-11 rounded-md bg-sage px-6 font-semibold text-white hover:bg-sage/90"
              >
                Contact & directions
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/team" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-border bg-transparent px-6 font-semibold text-ink hover:bg-accent"
              >
                Meet the team
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 bg-ink py-14 text-white md:py-20">
          <div className="site-wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf/90">
                Salon tour
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                Come take a look inside
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Browse the gallery for hair finishes and salon spaces, or watch
                a quick video tour before you book.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  nativeButton={false}
                  render={<Link href="/gallery" />}
                  size="lg"
                  className="h-11 rounded-md bg-leaf px-6 font-semibold text-ink hover:bg-leaf/90"
                >
                  View gallery
                </Button>
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-white/30 bg-transparent px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  Book now
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm bg-black/30">
              <iframe
                title="At The Top Salon video tour"
                src={site.youtubeTour}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
