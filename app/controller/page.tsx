import { Navbar } from "@/components/Navbar/Navbar"
export default function Controller() {
    return (
        <section className="mb-5">
            <Navbar />
            <div className="pt-20">
                <div className="absolute inset-0 z-0 relative h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border mx-0 sm:mx-6 my-10"
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

                <div className="absolute inset-0 z-0 relative h-[50vh] flex flex-col md:flex-row items-center justify-center mt-50 mx-0">
                    <div className="z-10 px-4 mb-1 md:mb-6 max-w-2xl md:mr-60">
                        <h1 className="text-gray-200 text-3xl md:text-5xl font-semibold leading-tight">
                            Run precise flight <br />logic on dual-core <br />architecture
                        </h1>
                        <p className="text-gray-300 text-base md:text-md mb-10 mt-6 leading-relaxed">
                            V1 uses its STM32H743VIT6 Arm® Cortex®-M7 processor to execute real-time control loops and sensor fusion at high speed. Its co-processor handles telemetry, GPS, and motor control — ensuring stability even in demanding conditions.
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
                </div>

                <div className="absolute insert-0 z-0 relative h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border mx-0 sm:mx-6"
                    style={{
                        background:
                            "linear-gradient(to bottom, black 10%, oklch(47.3% 0.137 46.201) 70%, oklch(83.7% 0.128 66.29))"
                    }}
                >
                    <div>
                        <h1 className="text-white">Random</h1>
                    </div>

                    <div>
                        <p className="text-white">fnmmdm</p>
                    </div>
                </div>
                <h1 className="text-white">jkdndnfn</h1>
                <div>

                </div>

                <div>

                </div>
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