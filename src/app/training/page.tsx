export default function TrainingPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Training</h1>
      <p className="mt-2 text-club-muted">Plan sessions, organise drills and publish training to your teams.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
        <h2 className="font-bold">No sessions yet</h2>
        <p className="mt-2 text-sm text-club-muted">Create a session to start building your training plan.</p>
      </div>
    </main>
  );
}
