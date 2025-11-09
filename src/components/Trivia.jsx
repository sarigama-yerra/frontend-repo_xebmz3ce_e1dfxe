const trivia = [
  {
    id: "j1",
    title: "Convenience Store Culture",
    image: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1470&auto=format&fit=crop",
    facts: ["Open 24/7", "Fresh bento & coffee", "Pay bills and tickets"],
  },
  {
    id: "j2",
    title: "Cherry Blossom Season",
    image: "https://images.unsplash.com/photo-1588822271122-618f64d65e3e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVycnklMjBCbG9zc29tJTIwU2Vhc29ufGVufDB8MHx8fDE3NjI2ODYzNjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    facts: ["Called 'Sakura'", "Symbol of renewal", "Peak in late March"],
  },
  {
    id: "j3",
    title: "Train Punctuality",
    image: "https://images.unsplash.com/photo-1760123416214-3003f69abeb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcmFpbiUyMFB1bmN0dWFsaXR5fGVufDB8MHx8fDE3NjI2ODYzNjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    facts: ["Delays are rare", "Apology notes issued", "Precise to the minute"],
  },
];

export default function Trivia() {
  return (
    <section id="buku" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Japan Trivia</h2>
        <p className="mt-1 text-sm text-muted-foreground">Quick facts to spark your curiosity about Japan.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trivia.map((t) => (
          <article key={t.id} className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <img src={t.image} alt={t.title} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                {t.facts.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
