export default function TeamsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Teams</h1>
      <p className="mt-2 text-club-muted">Create and manage your club’s teams, coaches and squads.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
        <h2 className="font-bold">No teams yet</h2>
        <p className="mt-2 text-sm text-club-muted">Create your first team to begin using Club Hub.</p>
      </div>
    </main>
  );
}
