import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-100 font-sans text-zinc-800">
      
      {/* ================= NAVBAR ================= */}
      <header className="bg-zinc-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          EMPLOYEE<span className="text-amber-500">TRACK</span>
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-amber-500 text-amber-500 rounded hover:bg-amber-500 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-400 transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight max-w-3xl">
          Smart Attendance Management for Modern Teams
        </h2>

        <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
          Track employee attendance, monitor performance insights, and manage
          your workforce efficiently with real-time analytics and secure
          authentication.
        </p>

        <div className="mt-10 space-x-6">
          <Link
            to="/login"
            className="px-6 py-3 bg-zinc-900 text-white rounded shadow hover:bg-zinc-800 transition"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 border border-zinc-900 text-zinc-900 rounded hover:bg-zinc-900 hover:text-white transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="p-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              Real-Time Tracking
            </h3>
            <p className="text-zinc-600">
              Instant check-in and check-out monitoring with accurate time
              calculation.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              Manager Dashboard
            </h3>
            <p className="text-zinc-600">
              View attendance analytics, department insights, and weekly
              trends.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              Secure & Reliable
            </h3>
            <p className="text-zinc-600">
              JWT-based authentication and role-based access control ensure
              data protection.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-zinc-900 text-zinc-400 text-center py-6">
        <p>
          © {new Date().getFullYear()} EmployeeTrack. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;