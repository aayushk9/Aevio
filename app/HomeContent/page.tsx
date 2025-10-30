import { Navbar } from "@/components/Navbar/Navbar"
import { Hero } from "@/components/Hero/Hero"
import { Footer } from "@/components/Footer/Footer"

export function HomeContent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-white">Our Flagship Model Aevio V1</h2>
          <text className="text-gray-100">The Aevio V1 is equipped with a powerful dual-processor architecture for precise motion control and sensor processing. At its core, the FMU Processor features the STM32H743VIT6, a 32-bit Arm® Cortex®-M7 running at 480 MHz, with 2 MB Flash memory and 1 MB RAM for high-performance flight management and real-time data handling. Complementing this, the IO Processor utilizes the STM32F103C8T7, a 32-bit Arm® Cortex®-M3 operating at 72 MHz, with 64 KB Flash and 20 KB SRAM in a compact LQFP-48 package, ensuring efficient input/output operations and peripheral management. This robust combination delivers reliable, low-latency performance in demanding embedded applications.</text>
          <img src="/image.jpg"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-white">
            V1 Controller can be operated at various places and situations...
          </h2>
          {/*examples of where controller can be used via images*/}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
