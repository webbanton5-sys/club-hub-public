export default function MessagesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Messages</h1>
      <p className="mt-2 text-club-muted">Send clear updates to teams, parents, coaches and club staff.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
        <h2 className="font-bold">No messages yet</h2>
        <p className="mt-2 text-sm text-club-muted">Team announcements and updates will appear here.</p>
      </div>
    </main>
  );
}
