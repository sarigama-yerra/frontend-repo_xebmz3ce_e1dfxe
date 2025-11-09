import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Star className="h-4 w-4 text-yellow-300" />
              Premium Japanese Courses
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Genkan Institute
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-indigo-100">
              Master Japanese from zero to JLPT with live classes, native instructors, and a supportive community. Start your journey today.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#daftar"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-sm transition hover:shadow-md"
              >
                <Rocket className="h-5 w-5" /> Register Now
              </a>
              <a
                href="#kelas"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                Explore Classes
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md sm:text-left">
              <div>
                <dt className="text-3xl font-bold">6+</dt>
                <dd className="text-sm text-indigo-100">Expert Instructors</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold">JLPT</dt>
                <dd className="text-sm text-indigo-100">N5 – N2 Levels</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold">Live</dt>
                <dd className="text-sm text-indigo-100">Interactive Sessions</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1470&auto=format&fit=crop"
                alt="Japanese learning"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
