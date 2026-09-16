import { Link } from './Link';
import { DEPARTMENTS } from '../data/departments';

export function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 py-12 text-white sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-emerald-400">Federal Medical Centre Asaba</p>
          <h1 className="text-4xl tracking-tight sm:text-6xl" style={{ fontFamily: 'var(--font-heading)' }}>Hospital Departments</h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">Select a department to open its dedicated page, writeup, leadership profile, and service overview.</p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((department, index) => (
            <Link key={department.id} href={`/departments/${department.id}`} className="group flex min-h-36 flex-col justify-between border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-emerald-400/60 hover:bg-emerald-950/30">
              <span className="text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}</span>
              <span><strong className="block text-lg font-medium text-white group-hover:text-emerald-300">{department.name}</strong><span className="mt-2 block text-sm text-neutral-400">{department.category}</span></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}