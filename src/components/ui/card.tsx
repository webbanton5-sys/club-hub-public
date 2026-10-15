import type { ReactNode } from "react";

export function Card({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      {description ? <p className="mt-2 text-sm text-club-muted">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
