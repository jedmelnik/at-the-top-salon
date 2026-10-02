import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the stylists at At The Top Salon in Mill Valley - Jimmy O'Keefe and associates.",
};

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Our team"
          lede="Experienced stylists with deep roots in Mill Valley - book the artist who fits your look."
          // Focal: Jimmy and guest faces
          image={{
            src: "/images/heroes/home-hero.png",
            alt: "Jimmy O'Keefe with a guest at At The Top Salon",
            width: 1017,
            height: 773,
            focalX: 0.48,
            focalY: 0.36,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.25, t: 0.1, r: 0.9, b: 0.75 },
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
          <ul className="space-y-14 md:space-y-16">
            {team.map((member) => (
              <li
                key={member.slug}
                id={member.slug}
                className="grid items-start gap-6 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-sm bg-muted md:mx-0 md:w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-ink">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-sage">
                    {member.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
                    {member.bio}
                  </p>
                  {member.phone ? (
                    <a
                      href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                      className="mt-4 inline-block text-sm font-semibold text-sage hover:text-ink"
                    >
                      {member.phone}
                    </a>
                  ) : null}
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
