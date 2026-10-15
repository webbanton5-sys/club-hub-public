export default function AttendancePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black">Attendance</h1>
      <p className="mt-2 text-club-muted">Record availability and attendance for training and matches.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
        <h2 className="font-bold">No attendance records yet</h2>
        <p className="mt-2 text-sm text-club-muted">Attendance will appear once sessions and players are added.</p>
      </div>
    </main>
  );
}
