import { BadgeCheck } from "lucide-react";

const sampleClasses = [
  {
    id: "1",
    title: "N5 Foundation",
    level: "N5",
    startDate: "2025-11-20",
    schedule: "Mon & Wed • 19:00 WIB",
    price: 750000,
    spots: 8,
    image:
      "https://images.unsplash.com/photo-1494475673543-6a6a27143b22?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Conversational Japanese",
    level: "Beginner",
    startDate: "2025-11-15",
    schedule: "Sat • 10:00 WIB",
    price: 650000,
    spots: 3,
    image:
      "https://images.unsplash.com/photo-1520697222863-cede622fa8d8?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "JLPT N3 Prep",
    level: "N3",
    startDate: "2025-12-02",
    schedule: "Tue & Thu • 19:30 WIB",
    price: 1150000,
    spots: 5,
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1470&auto=format&fit=crop",
  },
];

function formatIDR(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}

export default function ClassesPreview() {
  return (
    <section id="kelas" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Upcoming & Ongoing Classes</h2>
          <p className="mt-1 text-sm text-muted-foreground">Auto-updated status based on start date.</p>
        </div>
        <a href="#daftar" className="text-indigo-600 hover:text-indigo-700">See all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleClasses.map((c) => (
          <article key={c.id} className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
            <div className="relative">
              <img src={c.image} alt={c.title} className="h-44 w-full object-cover" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-indigo-700 shadow">
                <BadgeCheck className="h-3.5 w-3.5" /> Starting Soon
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="rounded bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">{c.level}</span>
                <span className="text-xs text-gray-500">{new Date(c.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
              </div>
              <h3 className="mt-2 line-clamp-1 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{c.schedule}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-base font-bold text-indigo-700">{formatIDR(c.price)}</p>
                <p className="text-xs text-gray-500">{c.spots} spots</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
