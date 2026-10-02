import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Featured product lines at At The Top Salon including Davines, Redken, Keratin Complex, EVO, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Featured products"
          lede="The lines we trust to keep salon shine, color, and softness looking classy at home."
          // Focal: glossy hair finish / brush detail
          image={{
            src: "/images/heroes/finish-beauty.jpg",
            alt: "Silky finished hair receiving a final brush",
            width: 1920,
            height: 512,
            focalX: 0.7,
            focalY: 0.5,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.4, t: 0.05, r: 0.98, b: 0.98 },
          }}
          actions={
            <Button
              nativeButton={false}
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-champagne px-5 text-sm font-semibold text-ink hover:bg-champagne/90"
            >
              Call about products
            </Button>
          }
        />

        <section className="site-wrap py-12 md:py-16">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            From Davines and Redken to Keratin Complex, EVO, BLNDN, ColorProof,
            Bumble and Bumble, and Style Edit - we stock lines that keep salon
            results looking strong at home.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <li key={product.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h2 className="mt-3 font-display text-xl tracking-tight text-ink">
                  {product.name}
                </h2>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
