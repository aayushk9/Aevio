"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function Hero() {

  const PARTICLE_COUNT = 60;
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      id: Math.random(),
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 40,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * -15,
      color: 'bg-indigo-300'
    }));
  }, []);

  return (
      <section>
        <div className="absolute inset-0 z-0 relative h-[95vh] flex items-center justify-center overflow-hidden rounded-2xl border mx-0 sm:mx-6 my-10"
          style={{
            background:
              "linear-gradient(to bottom, black 20%, oklch(39.8% 0.195 277.366) 70%, oklch(81.1% 0.111 293.571)",
          }}>
          {particles.map(p => (
            <div
              key={p.id}
              className={`absolute rounded-full opacity-70 animate-move-left-to-right shadow-lg ${p.color}`}
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                transform: 'translateX(0)',
              }}
            />
          ))}


          <div className="relative z-10 text-center px-8">
            <h1 className="text-3xl md:text-7xl font-semibold text-gray-100 leading-tight">
              Building the Future of
              <br /> Flight Controllers
            </h1>
            <p className="mt-4 text-gray-200 max-w-xl mx-auto">
              Redefine the core controller of unmanned systems with precision
              engineering
            </p>
            <div className="mt-8 flex justify-center gap-4">
            
              <button className="px-6 py-2 border border-white/50 text-white font-medium rounded-full hover:bg-white/10">
                Now in beta
              </button>
            </div>
          </div>
        </div>

        <div className="mt-50">
           <h3 className="text-gray-100 text-2xl md:text-6xl text-center font-bold tracking-wide leading-tight">Aevio V1</h3>
          <text className="text-gray-200">V1 is equipped with a powerful dual-processor architecture for precise motion control and sensor processing. At its core, the FMU Processor features the STM32H743VIT6, a 32-bit Arm® Cortex®-M7 running at 480 MHz, with 2 MB Flash memory and 1 MB RAM for high-performance flight management and real-time data handling. Complementing this, the IO Processor utilizes the STM32F103C8T7, a 32-bit Arm® Cortex®-M3 operating at 72 MHz, with 64 KB Flash and 20 KB SRAM in a compact LQFP-48 package, ensuring efficient input/output operations and peripheral management. This robust combination delivers reliable, low-latency performance in demanding embedded applications.</text>
        </div>

        <div className="absolute inset-0 z-0 relative h-[90vh] overflow-hidden rounded-2xl border mx-0 sm:mx-6 my-70"
          style={{
            background:
              "linear-gradient(to bottom, oklch(81.1% 0.111 293.571) 2%, oklch(39.8% 0.195 277.366) 30%, black 80%)",
          }}>
          <h1 className="text-center mt-30 font-bold text-4xl md: text-7xl tracking-wide leading-tight text-gray-200">Hardware Built to Perform</h1>
        </div>
        <style>{`
                @keyframes move-left-to-right {
                    0% {
                        /* Start off-screen to the left, slightly faded */
                        transform: translateX(-100vw);
                        opacity: 0.1;
                    }
                    50% {
                        /* Max opacity in the middle of the screen */
                        opacity: 0.8;
                    }
                    100% {
                        /* End off-screen to the right, fully faded */
                        transform: translateX(150vw);
                        opacity: 0;
                    }
                }
                .animate-move-left-to-right {
                    animation-name: move-left-to-right;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }
                
                /* Inter Font is loaded via the parent container */ 
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
      </section>
  );
}
