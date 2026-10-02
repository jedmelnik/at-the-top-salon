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
          lede="A look at the space, the finishes, and the work that happens upstairs on East Blithedale."
          // Focal: entrance walkway / sign area
          image={{
            src: "/images/heroes/walkway.jpg",
            alt: "Walkway and signage at At The Top Salon",
            width: 1020,
            height: 750,
            focalX: 0.55,
            focalY: 0.42,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.2, t: 0.15, r: 0.95, b: 0.85 },
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
