export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2 text-sm text-club-muted">{description}</p>
    </div>
  );
}
