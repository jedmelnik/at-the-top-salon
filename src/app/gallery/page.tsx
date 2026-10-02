import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { galleryImages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Salon tour and hair gallery from At The Top Salon in Mill Valley.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Salon tour & hair gallery"
          lede="Finished styles and a quietly glamorous room - beauty you can picture yourself wearing."
          // Focal: elegant updo / vanity glow
          image={{
            src: "/images/heroes/atmosphere-beauty.jpg",
            alt: "Elegant updo finished at a softly lit salon vanity",
            width: 1920,
            height: 512,
            focalX: 0.68,
            focalY: 0.48,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.4, t: 0.05, r: 0.98, b: 0.98 },
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

        <section className="site-wrap py-12 md:py-16">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-sm bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
