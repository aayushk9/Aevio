import { Navbar } from "@/components/Navbar/Navbar"
import { Hero } from "@/components/Hero/Hero"
import { Footer } from "@/components/Footer/Footer"

export function HomeContent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-white">Our flagship model Aevio V1</h2>
          <p className="text-muted-foreground mb-8 text-white">some more information about it</p>
          <img />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-white">
            V1 Controller can be operated at various places and situations...
          </h2>
          {/*examples of where controller can be used via images*/}
        </div>
        <div>
          <div></div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
