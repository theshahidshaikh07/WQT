export function SignupSection() {
  return (
    <section
      id="signup"
      className="relative border-b border-soft bg-strong py-16 sm:py-20"
    >
      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
            Signup
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
            Start your WQT journey.
          </h2>
          <p className="text-sm text-soft sm:text-base">
            Share a few details about your organization and the kind of talent
            you&apos;re looking for. Our team will follow up with a tailored
            blueprint.
          </p>
        </div>

        <form className="mt-8 grid gap-4 rounded-3xl border border-soft bg-subtle/90 p-5 shadow-sm backdrop-blur-xl sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-soft">
              Work email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="mt-1 w-full rounded-xl border border-soft bg-strong px-3 py-2 text-sm text-strong outline-none transition focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-soft">
              Company
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="mt-1 w-full rounded-xl border border-soft bg-strong px-3 py-2 text-sm text-strong outline-none transition focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-soft">
              Role / Title
            </label>
            <input
              type="text"
              placeholder="VP Engineering, Head of Product..."
              className="mt-1 w-full rounded-xl border border-soft bg-strong px-3 py-2 text-sm text-strong outline-none transition focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-soft">
              Primary need
            </label>
            <input
              type="text"
              placeholder="e.g. Data/AI pod, Platform squad"
              className="mt-1 w-full rounded-xl border border-soft bg-strong px-3 py-2 text-sm text-strong outline-none transition focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-soft">
              What are you trying to achieve?
            </label>
            <textarea
              rows={3}
              placeholder="Share timelines, team structure, and key outcomes..."
              className="mt-1 w-full rounded-xl border border-soft bg-strong px-3 py-2 text-sm text-strong outline-none transition focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <p className="text-[11px] text-soft">
              We&apos;ll respond within 1–2 business days with next steps.
            </p>
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_35px_rgba(255,255,255,0.6)] transition hover:bg-zinc-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


