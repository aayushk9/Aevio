"use client"

import { useEffect, useState } from "react"

export function Hero() {

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foregroundb text-white">Building the Future of Flight Controllers</span>
          <br />
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-center text-base font-medium text-[#B7B7B7] md:text-lg">
          Redefine the core controller of unmanned systems with precision engineering
        </p>
      </div>
    </section>
  )
}