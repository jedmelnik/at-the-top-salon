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
              Beautiful hair,
              <br />
              classically finished
            </>
          }
          lede="Discover a polished new look - or refine the timeless beauty you already love - with expert stylists who make you feel camera-ready and completely yourself."
          ledeOnMobile
          // Focal: eyes / face center; hair volume fills subject box
          image={{
            src: "/images/heroes/home-beauty.jpg",
            alt: "Woman with glossy, classically styled waves - the finished salon look",
            width: 1920,
            height: 512,
            focalX: 0.78,
            focalY: 0.48,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.55, t: 0.05, r: 0.98, b: 0.98 },
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
                className="h-11 rounded-md bg-champagne px-5 text-sm font-semibold text-ink shadow-none transition-transform hover:bg-champagne/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
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
              Leave looking your most elegant
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              At The Top Salon is a Mill Valley gallery / salon for cuts, color,
              highlights, smoothing, and finishing that read as beautiful and
              classy - never overdone. Fine jewelry, premier product lines, and
              local art frame a space that feels elevated and personal.
            </p>
            <p className="mt-4 hidden text-base leading-relaxed text-foreground/80 md:block md:text-lg">
              Every visit should leave you confident, refreshed, and ready to
              be seen - with hair that looks as considered as the rest of your
              style.
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
                Craft that shows in the mirror
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                Precision cuts, luminous color, and keratin smoothing - shaped
                for a polished result you can wear anywhere.
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
              src="/images/heroes/finish-beauty.jpg"
              alt="Glossy finished hair receiving a final polish at the salon"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              The finish
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Soft shine. Clean lines. Quiet luxury.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              Visit us at {site.address.full}. Book online or call {site.phone}
              - then settle into a space kept clean, calm, and ready for your
              best look.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne/90">
                Gallery
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                Looks worth dressing up for
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Browse finished styles and the salon atmosphere - then book the
                appointment that gets you there.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  nativeButton={false}
                  render={<Link href="/gallery" />}
                  size="lg"
                  className="h-11 rounded-md bg-champagne px-6 font-semibold text-ink hover:bg-champagne/90"
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
