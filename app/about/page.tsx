import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

export default function About() {
  return (
    <section className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl space-y-12 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
          <div id="about" className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          </div>

          <div id="mission">
            <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-300">
              Zero is an AI-powered email client that manages your inbox, so you
              don’t have to. We help busy professionals unclutter their inboxes,
              prioritize important messages, summarize conversations, complete
              tasks, and even chat with their inbox — letting them spend less
              time managing email and more time getting things done.
            </p>
          </div>

          <div id="start">
            <h3 className="mb-2 text-xl font-semibold">Why We Started</h3>
            <p className="text-gray-300">
              We started Zero because we were frustrated that email — the
              most-used communication tool in the world — hasn’t meaningfully
              evolved in decades. Despite countless new apps, none actually
              solve the real problem: helping you finish what you intend to do.
              We realized the real solution isn’t just a new interface — it’s AI
              acting like a true assistant inside your inbox.
            </p>
          </div>

          <div id="journey">
            <h3 className="mb-2 text-xl font-semibold">Our Journey</h3>
            <p className="text-gray-300">
              We launched our early access program and have already seen strong
              demand, with over 15,000 signups in just under 3 months. What we
              found is that users want an assistant that streamlines their
              inbox, providing features to summarize emails, compose responses,
              and take necessary actions.
            </p>
          </div>

          <div id="founders">
            <h3 className="mb-2 text-xl font-semibold">Our Founders</h3>
            <p className="text-gray-300">
              Adam and Nizar, the cofounders of Zero, met through family
              friends. Coming from backgrounds in product design and software
              engineering, we both felt the pain of drowning in email firsthand
              while trying to build and grow companies.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}