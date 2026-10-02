import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-secondary text-secondary-foreground">
      <div className="site-wrap py-12 md:py-16">
        <Image
          src="/images/logo.png"
          alt={site.name}
          width={516}
          height={298}
          className="h-14 w-auto brightness-0 invert md:h-16"
        />

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Mill Valley gallery / salon
            </p>
            <p className="mt-3 font-display text-[clamp(1.85rem,3vw,2.35rem)] leading-[1.15] tracking-tight text-white">
              Find yourself at The Top
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Beautiful, classy finishes from expert stylists - book online or
              call to visit {site.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:pb-1">
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
              className="h-12 w-full rounded-md bg-champagne px-6 text-base font-semibold text-ink hover:bg-champagne/90 sm:w-auto"
            >
              {site.bookingLabel}
            </Button>
            <Button
              nativeButton={false}
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm text-white/70 md:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <address className="not-italic leading-relaxed">
              {site.address.street}, {site.address.suite}, {site.address.city},{" "}
              {site.address.state} {site.address.zip}
            </address>
            <a
              href={site.phoneHref}
              className="font-medium text-white hover:text-white/80"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="font-medium text-white hover:text-white/80"
            >
              {site.email}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-white/80"
            >
              Get directions
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav
              className="flex flex-wrap gap-x-4 gap-y-2"
              aria-label="Footer"
            >
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <SocialLinks className="text-white" />
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/45">
          Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
