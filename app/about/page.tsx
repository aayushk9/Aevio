import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

export default function About() {
  return (
    <section className="min-h-screen bg-black text-gray-100">
      <Navbar />

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl space-y-12 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
          <div id="about" className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About us
            </h1>
          </div>

          <div id="mission">
            <h2 className="mb-3 text-2xl font-semibold">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To deliver reliable, deterministic, and future-proof flight
              controllers that empower engineers and operators to push the
              boundaries of unmanned systems—without compromise on safety,
              weight, or performance.
            </p>
          </div>

          <div id="start">
            <h2 className="mb-3 text-2xl font-semibold">
              Why We Started
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The drone industry is exploding, yet the core flight-control stack
              has remained largely unchanged for years. Stacked modules,
              fragile connectors, and opaque firmware create hidden failure
              points. We saw an opportunity to **re-imagine the entire stack**
              from the ground up—single-board, high-reliability, and
              open-source-friendly.
            </p>
          </div>

          <div id="journey">
            <h2 className="mb-3 text-2xl font-semibold">
              Our Journey
            </h2>
            <p className="text-gray-300 leading-relaxed">
              From a pre final year engineering project to a fully-functional FMUv6X-class
              controller, every iteration has been driven by real-world
              feedback. We’ve stress-tested in extreme vibration, thermal
              cycles, and EMI-rich environments. Today, **Aevio V1** is in
              limited beta with early adopters who are already flying
              mission-critical payloads.
            </p>
          </div>

          <div id="founders">
            <h2 className="mb-3 text-2xl font-semibold">
              Our Founders
            </h2>
            <p className="text-gray-300 leading-relaxed">
             Devesh and Shivanker founder and co-founder of aevio come from the College of Engineering Pune (COEP).
             Passionate about drones and embedded systems, we're hacking away at the future of 
             autonomy one line of code at a time. We believe the edge is where the real magic happens,
             hardware and software in perfect.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}