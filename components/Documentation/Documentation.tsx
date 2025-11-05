"use client";

export function Documentation() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 font-mono text-sm leading-relaxed mt-10">
      <main className="max-w-4xl mx-auto space-y-12">

        <section>
          <h2 className="text-xl font-bold mb-4">Processors & Sensors</h2>
          <div className="space-y-3 pl-6 border-l border-gray-800">
            <Spec label="FMU Processor">
              STM32H743VIT6 – 32-bit Arm® Cortex®-M7, 480 MHz, 2 MB Flash, 1 MB RAM
            </Spec>
            <Spec label="IO Processor">
              STM32F103C8T7 – 32-bit Arm® Cortex®-M3, 72 MHz, 64 KB Flash, 20 KB SRAM, LQFP-48
            </Spec>

            <h3 className="text-lg font-semibold mt-6 mb-3">On-board Sensors</h3>
            <div className="space-y-5">

              <SensorGroup title="Triple-IMU configuration">
                <Sensor name="BMI088" desc="vibration-robust 6-axis; stable bias for primary attitude." />
                <Sensor name="ICM-42688-P" desc="ultra-low-noise 6-axis; fast interrupts for tight loops." />
                <Sensor name="ICM-20649" desc="high-g 6-axis; avoids saturation in aggressive maneuvers." />
              </SensorGroup>

              <SensorGroup title="Dual barometers (redundant)">
                <Sensor name="MS5611" desc="high-resolution pressure for precise altitude hold." />
                <Sensor name="BMP388" desc="temperature-stable cross-check/fault tolerance." />
              </SensorGroup>

              <SensorGroup title="Magnetometer">
                <Sensor name="BMM150" desc="3-axis geomagnetic heading reference." />
              </SensorGroup>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Peripherals & I/O (Core)</h2>
          <ul className="pl-6 border-l border-gray-800 space-y-1 text-gray-300">
            <li>TELEM1 (UART)</li>
            <li>TELEM2 (UART)</li>
            <li>TELEM3 (UART)</li>
            <li>GPS1 (UART + PPS)</li>
            <li>GPS2 (UART + PPS)</li>
            <li>CAN1 / CAN2 / CAN3 (DroneCAN, 120 Ω selectable)</li>
            <li>I²C1 (EXT) – supports external mag / airspeed / flow</li>
            <li>PWM AUX OUT 1-8 (3.3 V logic)</li>
            <li>ETH (RMII, 10/100)</li>
            <li>USB-C (device)</li>
            <li>microSD (logging)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Electrical Specifications</h2>
          <div className="pl-6 border-l border-gray-800 space-y-5">
            <div>
              <h4 className="font-semibold mb-2">Voltage ratings</h4>
              <Spec label="Max input voltage (5 V rail)">5 V</Spec>
              <Spec label="USB power input">4.75–5.25 V</Spec>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Current ratings</h4>
              <Spec label="TELEM1 & GPS2 (combined)">1.5 A</Spec>
              <Spec label="All other ports (combined)">1.5 A</Spec>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mechanical</h4>
              <Spec label="Standard Baseboard">53 × 102 × 16.7 mm</Spec>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Logging & Storage – Dual-Path Recorder</h2>
          <div className="pl-6 border-l border-gray-800 space-y-3">
            <Spec label="Primary">microSD (SDMMC 4-bit) – full-rate logs.</Spec>
            <Spec label="Secondary">32 MiB QSPI NOR (W25Q256JVFIM) – always-on ring buffer from power-up.</Spec>
            <Spec label="Policy">
              SD present → SD is primary, QSPI mirrors last N s (configurable). On disarm, QSPI tail is auto-appended to the SD log. If SD is absent/error → log to QSPI (reduced set).
            </Spec>
            <Spec label="Retention (QSPI)">~0.9-3.6 min (rate-dependent).</Spec>
            <Spec label="Retrieval">remove SD or download QSPI via GCS.</Spec>
            <Spec label="Benefit">preserves pre-arm and post-flight tail data most often lost.</Spec>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Firmware Support</h2>
          <div className="pl-6 border-l border-gray-800">
            <span className="inline-block mr-4 mb-2">ArduPilot</span>
            <span className="inline-block">PX4</span>
          </div>
        </section>

      </main>
    </div>
  );
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1">
      <span className="font-medium min-w-[180px]">{label}:</span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
}

function SensorGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="ml-4 space-y-1">{children}</div>
    </div>
  );
}

function Sensor({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span>•</span>
      <div>
        <span className="font-medium">{name}</span>{" "}
        <span className="text-gray-400">– {desc}</span>
      </div>
    </div>
  );
}