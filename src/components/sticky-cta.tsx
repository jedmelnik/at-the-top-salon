import { site } from "@/lib/site";

/** Mobile sticky bar - book + call without duplicating desktop chrome. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-[#f4f7f2]/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center rounded-md bg-sage text-sm font-semibold text-white"
        >
          Book
        </a>
        <a
          href={site.phoneHref}
          className="flex h-11 flex-1 items-center justify-center rounded-md border border-border bg-transparent text-sm font-semibold text-ink"
        >
          Call
        </a>
      </div>
    </div>
  );
}
