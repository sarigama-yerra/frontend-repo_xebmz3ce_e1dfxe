const teachers = [
  {
    id: "t1",
    name: "Sato Aiko",
    bio: "Native teacher specializing in conversation and culture.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Tanaka Hiro",
    bio: "JLPT expert with 10+ years of experience.",
    photo:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Nakamura Yui",
    bio: "Grammar and writing coach for all levels.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "t4",
    name: "Suzuki Ken",
    bio: "Pronunciation and listening mentor.",
    photo:
      "https://images.unsplash.com/photo-1556157381-9713b0f3f77d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "t5",
    name: "Yamamoto Mei",
    bio: "JLPT N3/N2 specialist and exam strategist.",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "t6",
    name: "Kobayashi Ren",
    bio: "Focus on business Japanese and keigo.",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function Instructors() {
  return (
    <section id="pengajar" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Featured Instructors</h2>
        <p className="mt-1 text-sm text-muted-foreground">Learn with experienced mentors from Japan and Indonesia.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teachers.map((t) => (
            <article key={t.id} className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
              <img src={t.photo} alt={t.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
