'use client';

const bootLog = `
 Booting Aevio V1 firmware
 Initializing sensors
 IMU: Dual 6-axis calibrated
 GPS: 12 satellites locked
 Barometer: Stable pressure data
 FMU Load: 37%
 Co-Processor Sync: Active
 Loop Time: 2.1 ms
 Telemetry: 58 packets/sec
 Logging: microSD active
 Flight Mode: Stabilize
 System Status: All systems nominal`.trim();

export default function BootLog() {
  // No state or timer needed – just render the full text
  const lines = bootLog.split('\n').map(l => l.trim());

  return (
    <div className="rounded-2xl border border-gray-800 px-10 py-10">
      <pre className="text-gray-300 text-base md:text-base leading-relaxed md:mr-40 font-serif text-md md:text-xl ml-10">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </pre>
    </div>
  );
}