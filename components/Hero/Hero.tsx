"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";
import TrueFocus from "../TrueFocus";

type Particle = {
  id: string;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  color: string;
};

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const PARTICLE_COUNT = 60;
    const newParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
      id: crypto.randomUUID(),
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 40,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * -15,
      color: "bg-indigo-300",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section>
      <div
        className="absolute inset-0 z-0 relative h-[95vh] flex items-center justify-center overflow-hidden rounded-2xl border mx-0 sm:mx-6 my-10"
        style={{
          background:
            "linear-gradient(to bottom, black 20%, oklch(39.8% 0.195 277.366) 70%, oklch(81.1% 0.111 293.571))",
        }}
      >
        {particles.map((p) => (
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
              transform: "translateX(0)",
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

      <section className="relative h-[50vh] mt-60">
        <div className="flex flex-col items-center justify-center">
          <TrueFocus
            sentence="Aevio V1"
            manualMode={false}
            blurAmount={5}
            textColor="white"
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <div className="px-8 py-10 max-w-3xl">
            <p className="max-w-2xl text-left text-gray-300 text-lg md:text-2xl leading-relaxed tracking-tight">
              V1 redefines the standard for <strong><span className="text-gray-400 font-semibold">flight control hardware</span></strong> a unified, precision built
              platform designed for mission critical reliability. Every layer, from sensing to computation
              is tuned for deterministic response and long-term stability. Built to outlast turbulence.
            </p>
            <div className="flex justify-center mt-8 mr-8">
              <Link href="/controller">
                <button className="bg-gray-200 text-black font-medium px-6 py-2 rounded-xl shadow-md hover:bg-gray-300 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 whitespace-nowrap">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-zinc-800 border-y-6 bg-[#0B0B0B] py-25 mb-10">
        <div>
          <h1 className="text-gray-300 text-center text-3xl md:text-5xl leading-relaxed">
            Parallel Processing <br />
            <span className="text-blue-600">Dual Architecture</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-3xl border sm:mx-6 my-10">
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-200"
            >
              FAQ
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  question: "What is Integrated Reliability Architecture (IRA) and why choose it over cube-style stacks?",
                  answer:
                    "IRA is our single-board flight core all cube class features on one PCB. Fewer connectors = fewer failures, lower mass, cleaner power and faster setup. Keep the ports, lose the stack.",
                },
                {
                  question: "Why does your single-board (FMUv6X-class) design deliver higher uptime than cube-style (stacked) autopilots?",
                  answer:
                    "Uptime is engineered in, not left to chance. The system features triple IMUs from diverse vendors, dual barometers and an independent safety MCU for built-in redundancy. By eliminating interboard and mezzanine connectors, which are common failure points under vibration and thermal stress, it achieves greater long-term stability. The compact single board layout also reduces internal wiring and minimizes EMI pickup and signal noise. According to MIL HDBK 217 reliability modeling, fewer connectors and components directly translate to higher MTBF and better field reliability.",
                },
                {
                  question: "Will it work with my current software, GPS, radios and peripherals?",
                  answer:
                    "Yes. Works natively with ArduPilot & PX4, using standard Pixhawk-style ports (TELEM, CAN, GPS, PWM, USB, etc). Just reflash, import parameters, and fly your GPS, radios and Jetson/RPi plug right in.",
                },
                {
                  question: "Is it truly field-replaceable (FRU)? How fast is a swap?",
                  answer:
                    "Yes—the entire controller is one FRU. Power off, unplug JST-GHs, four screws out, drop in spare, scan QR to load the right firmware/params, fly. Typical swap <2 minutes. No cube carrier mezzanines to diagnose, no internal ribbons to reseat, fewer spares to carry.",
                },
                {
                  question: "Does it support edge-AI today and future autonomy needs?",
                  answer:
                    "Absolutely. The FC streams clean, time-synced state/sensor data over TELEM/CAN to companion computers (Jetson, Xavier, RPi). Run object detection, tracking, assistive navigation, custom mission logic at the edge without a bulky stack. The compact singleboard design saves space/weight for payloads while staying fully ArduPilot/PX4 compatible.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-white/10 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 text-xl font-medium text-left text-gray-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-300 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes move-left-to-right {
          0% {
            transform: translateX(-100vw);
            opacity: 0.1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(150vw);
            opacity: 0;
          }
        }
        .animate-move-left-to-right {
          animation-name: move-left-to-right;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </section>
  );
}