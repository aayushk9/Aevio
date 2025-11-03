import { Navbar } from "@/components/Navbar/Navbar"
import { Footer } from "@/components/Footer/Footer"

export default function Controller() {
    return (
        <section className="mb-5 w-full overflow-x-hidden">
            <Navbar />
            <div className="pt-20">
                <div className="z-0 relative h-[85vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border sm:mx-6 my-10"
                    style={{
                        background:
                            "linear-gradient(to bottom, black 10%, oklch(47.3% 0.137 46.201) 70%, oklch(83.7% 0.128 66.29))",
                    }}>
                    <div className="z-10 px-4 mb-1 md:mb-6">
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-300 leading-tight text-center mb-10 md:mb-30">V1 Intelligent <br />Controller</h1>
                    </div>

                    <div className="z-10 max-w-md px-4 md:ml-40 md: rounded-2xl md:border-l border-amber-800">
                        <p className="text-gray-300 text-balance mb-10 text-base md:text-2xl">Aevio V1 is an advanced flight controller engineered for precision, reliability, and real-time performance in aerial and robotics applications. It integrates a dual-processor architecture for efficient flight management and peripheral control, coupled with a Triple-IMU sensor suite for enhanced stability and attitude accuracy.
                        </p>
                    </div>
                </div>

                <section className="absolute inset-0 z-0 relative h-[50vh] flex flex-col md:flex-row items-center justify-center mt-20 mx-0 h-screen">
                    <div className="z-10 px-4 mb-1 md:mb-6 max-w-2xl md:mr-60">
                        <h1 className="text-gray-200 text-3xl md:text-5xl font-semibold leading-tight">
                            Run precise flight <br />logic on <a className="no-underline text-orange-500">dual core</a> <br />architecture
                        </h1>
                        <p className="text-gray-300 text-base md:text-xl mb-10 mt-6 leading-relaxed">
                            V1 uses its <strong><a className="text-gray-400">Arm® Cortex®-M7 processor</a></strong> to execute real time control loops and sensor fusion at high speed. 
                            Its co-processor handles telemetry, GPS and motor control ensuring stability.
                        </p>
                    </div>
                    <div className="rounded-2xl  md: border border-gray-800 px-10 py-10">
                        <pre className="text-white">
                            {`> Booting Aevio V1 firmware...
                              > Initializing sensors... 
                              > IMU: Dual 6-axis calibrated
                              > GPS: 12 satellites locked
                              > Barometer: Stable pressure data
                              > FMU Load: 37%
                              > Co-Processor Sync: Active
                              > Loop Time: 2.1 ms
                              > Telemetry: 58 packets/sec
                              > Logging: microSD active
                              > Flight Mode: Stabilize
                              > System Status: All systems nominal `}
                        </pre>
                    </div>
                </section>

                <section className="flex flex-col h-screen md:space-x-45 mb-20">
                    <div className="ml-4 md:ml-40 max-w-2xl">
                        <h2 className="text-gray-200 text-3xl md:text-5xl font-semibold leading-tight">Integrated <a className="text-indigo-500">Reliability</a> <br /> Architecture</h2>
                        <p className="text-gray-300 md:text-md leading-relaxed mb-10 mt-6">
                            V1 single, monobolic flight core combines all cube class features
                            into one compact PCB . It is cleaner, lighter and more reliable
                            alternative to traditional cube style stacks, Why choose IRA over cube stacks?
                        </p>
                    </div>

                    <div className="md:ml-22 rounded-xl border-gray-800 py-10 px-6 md:px-16">
                        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 text-gray-300 border-t border-b border-zinc-700 py-10">

                            <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-zinc-700"></div>
                            <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-zinc-700"></div>
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
                                    Fewer Failure Points
                                </h3>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Higher real-world uptime with reduced interconnects and simplified PCB routing.
                                </p>
                            </div>

                            <div className="md:ml-5">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
                                    Lower Profile & Mass
                                </h3>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Compact monobloc design ensures better vibration resilience and weight efficiency.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
                                    Cleaner Power & EMI Behavior
                                </h3>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Optimized grounding and component layout minimize brownouts and EMI interference.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
                                    Faster Integration
                                </h3>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Shorter wiring and unified design simplify quality control and assembly.
                                </p>
                            </div>

                            <div className="ml-5">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
                                    Same Ecosystem
                                </h3>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Fully compatible with ArduPilot, PX4, and standard Pixhawk-style ports.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="absolute insert-0 z-0 relative h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border mx-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, black 60%, oklch(47.3% 0.137 46.201) 80%, oklch(83.7% 0.128 66.29))"
                    }}
                >
                    <div>
                        <h1 className="text-white">Random</h1>
                    </div>

                    <div>
                        <p className="text-white">fnmmdm</p>
                    </div>
                </section>

                <Footer />

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
    )
}