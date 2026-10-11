import React from 'react';

export function Squiggle({ className = '', color = '#12B3A4' }) {
  return (
    <svg
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZigZag({ className = '', color = '#FF5B57' }) {
  return (
    <svg
      viewBox="0 0 80 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 18 L 15 3 L 28 18 L 41 3 L 54 18 L 67 3 L 78 18"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusSign({ className = '', color = '#17140D', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="4" strokeLinecap="square" />
      <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="4" strokeLinecap="square" />
    </svg>
  );
}

export function HalfCircle({ className = '', color = '#FFC531', size = 48, rotate = 0 }) {
  return (
    <div
      style={{
        width: size,
        height: size / 2,
        backgroundColor: color,
        border: '3px solid #17140D',
        borderTopLeftRadius: `${size}px`,
        borderTopRightRadius: `${size}px`,
        transform: `rotate(${rotate}deg)`,
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}

export function QuarterArc({ className = '', color = '#6B5BE6', size = 40 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: '3px solid #17140D',
        borderTopLeftRadius: `${size}px`,
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}

export function MemphisTriangle({ className = '', color = '#3AA0FF', size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <polygon
        points="20,4 36,36 4,36"
        fill={color}
        stroke="#17140D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DottedCircle({ className = '', size = 50, color = '#17140D' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export function Asterisk({ className = '', color = '#FF5B57', size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <line x1="16" y1="4" x2="16" y2="28" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="4" y1="16" x2="28" y2="16" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="7.5" y1="24.5" x2="24.5" y2="7.5" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
