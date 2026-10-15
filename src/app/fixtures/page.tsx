export default function FixturesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Fixtures</h1>
      <p className="mt-2 text-club-muted">Plan matchdays, select squads and record results.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
        <h2 className="font-bold">No fixtures yet</h2>
        <p className="mt-2 text-sm text-club-muted">Add your first fixture to activate the Matchday Centre.</p>
      </div>
    </main>
  );
}
