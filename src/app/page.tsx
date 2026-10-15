import Link from "next/link";

const modules = [
  { title: "Dashboard", description: "Today’s training, fixtures, alerts and quick actions.", href: "/dashboard" },
  { title: "Teams", description: "Manage squads, coaches, players and team settings.", href: "/teams" },
  { title: "Fixtures", description: "Plan matchdays, squads, results and reports.", href: "/fixtures" },
  { title: "Training", description: "Build sessions from drills and publish them to teams.", href: "/training" },
  { title: "Attendance", description: "Track availability and attendance for every session.", href: "/attendance" },
  { title: "Messages", description: "Send focused updates to teams, parents and coaches.", href: "/messages" }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
      <section className="rounded-3xl bg-club-black p-8 text-white sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-club-yellow">
          Grassroots football OS
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
          Run your club from one place.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Club Hub brings team communication, fixtures, training, attendance, player development and club administration into one fast, mobile-first platform.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-full bg-club-yellow px-6 py-3 font-bold text-club-black transition hover:brightness-95">
            Open dashboard
          </Link>
          <Link href="/teams" className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            Manage teams
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link key={module.title} href={module.href} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-lg font-bold">{module.title}</h2>
            <p className="mt-2 text-sm text-club-muted">{module.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-club-black group-hover:underline">Open →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
