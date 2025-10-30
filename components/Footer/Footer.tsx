"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <section className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <Accordion type="single" collapsible className="space-y-6">
            <div className="flex flex-col items-center py-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:to-panelDark inline-block text-center text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:bg-linear-to-b lg:from-[#84878D] lg:via-[#84878D] lg:bg-clip-text lg:text-6xl lg:text-transparent"
                >
                  <span>Next Gen Controller Built for Tomorrow</span>
                </motion.div>
              </div>
          </Accordion>
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-12">
        <div className="md:col-span-3 flex flex-col justify-start">
          <h3 className="text-2xl font-bold mb-2">Aevio</h3>
          <p className="text-gray-400 text-sm">Hardware built to perform</p>
        </div>

        <div className="hidden md:block md:col-span-2" />
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  Erandwane, Pune
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  aevio@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Socials
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}