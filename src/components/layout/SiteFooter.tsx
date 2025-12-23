export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-8 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {year} WQT – World&apos;s Quality Talent. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          <p className="text-[11px]">
            Built for product-led teams scaling world-class digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}


