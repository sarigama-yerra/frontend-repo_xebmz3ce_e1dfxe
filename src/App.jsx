import Hero from "./components/Hero";
import ClassesPreview from "./components/ClassesPreview";
import Instructors from "./components/Instructors";
import Trivia from "./components/Trivia";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">Genkan Institute</h4>
            <p className="mt-2 text-sm text-gray-600">Learn Japanese with structured programs and expert mentors.</p>
          </div>
          <div>
            <h5 className="font-semibold">Navigation</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#kelas" className="hover:text-indigo-700">Classes</a></li>
              <li><a href="#pengajar" className="hover:text-indigo-700">Instructors</a></li>
              <li><a href="#buku" className="hover:text-indigo-700">Trivia</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>Email: hello@genkan.id</li>
              <li>WhatsApp: +62 812-0000-0000</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Follow</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-700">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-700">YouTube</a></li>
              <li><a href="#" className="hover:text-indigo-700">TikTok</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Genkan Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ClassesPreview />
      <Instructors />
      <Trivia />
      <Footer />
    </div>
  );
}
