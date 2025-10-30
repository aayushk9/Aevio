// components/AevioLogo.tsx
export function Logo() {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* A E V I O – Bold, modern, slightly futuristic */}
      <text
        x="0"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#e2e8f0"
        letterSpacing="-0.8"
      >
        A
      </text>
      <text
        x="26"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#e2e8f0"
        letterSpacing="-0.8"
      >
        E
      </text>
      <text
        x="50"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#e2e8f0"
        letterSpacing="-0.8"
      >
        V
      </text>
      <text
        x="78"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#e2e8f0"
        letterSpacing="-0.8"
      >
        I
      </text>
      <text
        x="90"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#e2e8f0"
        letterSpacing="-0.8"
      >
        O
      </text>

      {/* Subtle AI/tech node (top-right of the O) */}
      <circle cx="118" cy="12" r="5" fill="#8b5cf6" opacity="0.85">
        <animate
          attributeName="r"
          values="5;6;5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="118" cy="12" r="2.5" fill="#c4b5fd" />
    </svg>
  );
}