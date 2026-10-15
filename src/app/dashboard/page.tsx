export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Dashboard</h1>
      <p className="mt-2 text-club-muted">Your club’s live operating view: upcoming sessions, fixtures, attendance alerts and messages.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-bold">Next training</h2>
          <p className="mt-2 text-sm text-club-muted">No sessions scheduled yet.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-bold">Next fixture</h2>
          <p className="mt-2 text-sm text-club-muted">No fixtures scheduled yet.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-bold">Attendance alerts</h2>
          <p className="mt-2 text-sm text-club-muted">No availability responses yet.</p>
        </div>
      </div>
    </main>
  );
}
