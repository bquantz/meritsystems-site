import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Wordmark className="h-4 w-auto text-[var(--foreground)]" />
          <span className="text-[var(--muted-foreground)]/80">·</span>
          <span>Infrastructure · AI Platforms · Cloud Architecture</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:bquantz@meritnetsolutions.com"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            bquantz@meritnetsolutions.com
          </a>
          <span aria-hidden>·</span>
          <span>© {year} Merit Systems, LLC</span>
        </div>
      </div>
    </footer>
  );
}
