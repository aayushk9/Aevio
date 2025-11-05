"use client"

import { Navbar } from "@/components/Navbar/Navbar"
import { Footer } from "@/components/Footer/Footer"
import BootLog from "@/components/Bootlog/Bootlog"

export default function Controller() {
    return (
        <section className="mb-5 w-full overflow-x-hidden">
            <Navbar />
            <div className="pt-20">
                <div
                    className="z-0 relative h-[85vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-3xl border sm:mx-6 my-10"
                    style={{
                        background:
                            "linear-gradient(to bottom, black 20%, oklch(39.8% 0.195 277.366) 70%, oklch(81.1% 0.111 293.571))"
                    }}
                >
                    <div className="z-10 px-4 mb-1 md:mb-6">
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-300 leading-tight text-center mb-10">
                            V1 Intelligent <br />Controller
                        </h1>
                    </div>

                    <div className="z-10 max-w-md px-4 md:ml-40 rounded-2xl md:border-l border-indigo-900">
                        <p className="text-gray-300 text-balance mb-10 text-base md:text-2xl">
                            Aevio V1 is an advanced flight controller engineered for precision, reliability, and real-time performance in aerial and robotics applications. It integrates a dual-processor architecture for efficient flight management and peripheral control, coupled with a Triple-IMU sensor suite for enhanced stability and attitude accuracy.
                        </p>
                    </div>
                </div>

                <section className="relative h-[80vh] flex flex-col md:flex-row items-center justify-center mt-10 mx-0">
                    <div className="z-10 px-4 mb-1 md:mb-6 max-w-2xl md:mr-40">
                        <h1 className="xs:text-center text-gray-200 text-3xl md:text-5xl font-semibold leading-tight">
                            Run precise flight <br />logic on <a className="no-underline text-indigo-600">dual core</a> <br />architecture
                        </h1>
                        <p className="text-gray-300 text-base md:text-xl mb-10 mt-6 leading-relaxed">
                            V1 uses its <strong><a className="text-gray-400">Arm® Cortex®-M7 processor</a></strong> to execute real-time control loops and sensor fusion at high speed.
                            Its co-processor handles telemetry, GPS and motor control ensuring stability.
                        </p>
                    </div>
                    <div>
                       <BootLog/>
                    </div>
                 </section>

                <section className="flex flex-col items-center justify-center overflow-hidden rounded-3xl border mx-8 mt-4 mb-10">
                    <div className="flex flex-col items-center justify-center mt-20 space-y-5 text-center mr-6">
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-300">Engineered For Real World Missions</h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto mt-20 items-stretch">
                            <div className="border border-gray-800 rounded-2xl px-8 py-15"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, oklch(58.5% 0.233 277.117) 2%, oklch(25.7% 0.09 281.288) 30%, black 80%)",
                                }}
                            >
                                <h3 className="text-gray-200 text-xl md:text-3xl">Artificial Intelligence</h3>
                                <br/>
                                <p className="text-gray-300">
                                    Reliable flight control for surveillance, border security, and live perimeter monitoring. Redundant IMUs and protected power keep systems stable.
                                </p>
                            </div>
                            <div className="border border-gray-800 rounded-2xl px-8 py-15"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, oklch(58.5% 0.233 277.117) 2%, oklch(25.7% 0.09 281.288) 30%, black 80%)",
                                }}
                            >
                                <h3 className="text-gray-200 text-xl md:text-3xl">Tactical Mission Platforms</h3>
                                <br/>
                                <p className="text-gray-300">
                                    Dedicated safety processors maintain motor control even during resets — ideal for defense-grade reliability and compliance.
                                </p>
                            </div>
                            <div className="border border-gray-800 rounded-2xl px-8 py-15"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, oklch(58.5% 0.233 277.117) 2%, oklch(25.7% 0.09 281.288) 30%, black 80%)",
                                }}
                            >
                                <h3 className="text-gray-200 text-xl md:text-3xl">Precision Agrospray Fleet</h3>
                                <br/>
                                <p className="text-gray-300">
                                    Stable attitude control for heavy-lift drones. Brownout-resistant design ensures uptime under vibration.
                                </p>
                            </div>
                            <div className="border border-gray-800 rounded-2xl px-8 py-15"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, oklch(58.5% 0.233 277.117) 2%, oklch(25.7% 0.09 281.288) 30%, black 80%)",
                                }}
                            >
                                <h3 className="text-gray-200 text-xl md:text-3xl">Industrial Inspection</h3>
                                <br/>
                                <p className="text-gray-300">
                                    Ideal for solar farms, wind turbines, and pipelines. Expansion-ready interfaces make integrating payloads effortless.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="flex flex-col h-auto mt-55">
                    <div className="flex items-center justify-center">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-gray-200 text-3xl md:text-5xl font-semibold leading-tight">
                                Integrated <a className="text-indigo-600">Reliability</a> <br /> Architecture
                            </h2>
                            <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-10 mt-4">
                                V1 single, monobolic flight core combines all cube class features
                                into <strong><a className="text-gray-400">one compact PCB</a></strong>. It is cleaner, lighter, and more reliable
                                a better alternative to traditional cube stacks.
                            </p>
                        </div>
                    </div>


                    <div className="md:ml-22 py-10 px-6 md:px-16">
                        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 text-gray-300 md:border-t md:border-b md:border-zinc-700 py-8">
                            <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-zinc-700"></div>
                            <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-zinc-700"></div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-100">Fewer Failure Points</h3>
                                <p className="mt-2 text-sm text-gray-400">Higher uptime with reduced interconnects and simpler routing.</p>
                            </div>

                            <div className="md:ml-5">
                                <h3 className="text-lg font-semibold text-gray-100">Lower Profile & Mass</h3>
                                <p className="mt-2 text-sm text-gray-400">Compact monobloc design ensures better vibration resilience.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-100">Cleaner Power & EMI Behavior</h3>
                                <p className="mt-2 text-sm text-gray-400">Optimized layout minimizes brownouts and EMI interference.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-100">Faster Integration</h3>
                                <p className="mt-2 text-sm text-gray-400">Unified design simplifies wiring, QC, and assembly.</p>
                            </div>

                            <div className="md:ml-5">
                                <h3 className="text-lg font-semibold text-gray-100">Same Ecosystem</h3>
                                <p className="mt-2 text-sm text-gray-400">Fully compatible with ArduPilot, PX4, and Pixhawk-style ports.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden rounded-3xl border sm:mx-6 my-10"
                    style={{
                        background: "linear-gradient(to bottom, black 20%, oklch(39.8% 0.195 277.366) 70%, oklch(81.1% 0.111 293.571))"
                    }}
                >
                    <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto mt-10">
                        <h1 className="text-gray-200 text-2xl md:text-5xl mb-4">Precision flight control<br />for demanding operations</h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-3">
                            Launching soon, stay tuned
                        </p>
                    </div>
                </section>

                <Footer />

            </div>

            <style>{`
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
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </section>
    )
}