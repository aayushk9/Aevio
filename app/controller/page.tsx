import { Navbar } from "@/components/Navbar/Navbar"
export default function Controller(){
    return (
        <section className="mb-5">
            <Navbar/>
         <div className="pt-20">
            <div className="absolute inset-0 z-0 relative h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border mx-0 sm:mx-6 my-0"
          style={{
            background:
              "linear-gradient(to bottom, black 10%, oklch(47.3% 0.137 46.201) 70%, oklch(83.7% 0.128 66.29))",
          }}>
            <div className="z-10 px-4 mb-6 md: mb-0">
                 <h1 className="text-3xl md:text-5xl font-semibold text-gray-100 leading-tight text-center sm: mb-30">V1 Intelligent <br/>Controller</h1>
            </div>

            <div className="z-10 max-w-md px-4 md:ml-40 rounded-2xl border">
                 <p className="text-gray-200 text-balance mb-10">Aevio V1 is an advanced flight controller engineered for precision, reliability, and real-time performance in aerial and robotics applications. It integrates a dual-processor architecture for efficient flight management and peripheral control, coupled with a Triple-IMU sensor suite for enhanced stability and attitude accuracy. The system features redundant barometers for consistent altitude readings and a 3-axis magnetometer for accurate heading reference. With its combination of 
                    high-performance processors, robust sensors, and fault-tolerant design, Aevio V1 ensures exceptional control responsiveness even under high dynamic conditions.
                 </p>
            </div>
            </div>
            
            <div>

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