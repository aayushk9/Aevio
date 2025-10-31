"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
     
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