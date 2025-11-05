'use client';  
import { useEffect, useState } from 'react';

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
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const lines = bootLog.split('\n').map(l => l.trim());

  useEffect(() => {
    setVisibleLines([]);

    let index = 0;
    const timer = setInterval(() => {
      if (index < lines.length) {
        setVisibleLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 180); 

    return () => clearInterval(timer);
  }, []); 

  return (
    
    <div className="rounded-2xl border border-gray-800 px-10 py-10">
      <pre className="text-gray-300 text-base md:text-base leading-relaxed md:mr-40 font-serif text-xl">
        {visibleLines.map((line, i) => (
          <span key={i} className="block animate-fadeIn">
            {line}
            {'\n'}
          </span>
        ))}
       
      </pre>
    </div>
  );
}

const style = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.12s ease-out forwards;
}
`;