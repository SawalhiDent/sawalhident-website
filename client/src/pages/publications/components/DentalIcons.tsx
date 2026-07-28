/** أيقونات SVG مخصصة لتخصصات طب الأسنان */

interface IconProps {
  className?: string;
  size?: number;
}

/** زراعة الأسنان — ضرس مع زرعة (implant screw + crown) */
export function ImplantIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Crown */}
      <path
        d="M10 18 C10 10 14 5 20 5 C26 5 30 10 30 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="10" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Neck */}
      <rect x="17" y="18" width="6" height="4" rx="1" fill="currentColor" opacity="0.3" />

      {/* Implant screw body */}
      <rect x="18" y="22" width="4" height="12" rx="1" fill="currentColor" opacity="0.15" />

      {/* Screw threads */}
      <line x1="16" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Screw tip */}
      <path
        d="M18 33 L20 36 L22 33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** تقويم الأسنان — أسنان مع قوس وسلك (bracket + archwire) */
export function OrthodonticsIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Three teeth */}
      {/* Tooth 1 (left) */}
      <path
        d="M6 22 C6 16 8 10 12 10 C14 10 15 12 16 14 C17 12 18 10 20 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M6 22 C6 27 8 30 10 30 L14 30 C15 30 16 28 16 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Tooth 2 (center) */}
      <path
        d="M16 14 C16 10 18 8 20 8 C22 8 24 10 24 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M16 25 C16 28 17 32 20 32 C23 32 24 28 24 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Tooth 3 (right) */}
      <path
        d="M20 10 C22 10 23 12 24 14 C25 12 26 10 28 10 C32 10 34 16 34 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M24 25 C24 28 25 30 26 30 L30 30 C32 30 34 27 34 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Archwire */}
      <path
        d="M8 19 Q20 16 32 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Bracket left */}
      <rect x="9" y="17" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
      <line x1="10" y1="17" x2="10" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
      <line x1="13" y1="17" x2="13" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />

      {/* Bracket center */}
      <rect x="17.5" y="16.5" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
      <line x1="18.5" y1="16.5" x2="18.5" y2="20.5" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
      <line x1="21.5" y1="16.5" x2="21.5" y2="20.5" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />

      {/* Bracket right */}
      <rect x="26" y="17" width="5" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
      <line x1="27" y1="17" x2="27" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
      <line x1="30" y1="17" x2="30" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
    </svg>
  );
}

/** تجميل الأسنان — ابتسامة مع لمعة (veneer + shine) */
export function EstheticIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Smile arc */}
      <path
        d="M8 18 Q20 30 32 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Teeth inside smile */}
      {/* Tooth 1 */}
      <path d="M8 18 L10 12 L14 12 L14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Tooth 2 */}
      <path d="M14 12 L14 22 L20 23 L26 22 L26 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="20" y1="12" x2="20" y2="23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Tooth 3 */}
      <path d="M26 12 L30 12 L32 18 L26 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Top line (gum line) */}
      <path d="M8 18 L10 12 Q14 10 20 10 Q26 10 30 12 L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Shine marks (top right) */}
      <line x1="31" y1="7" x2="31" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="28.5" y1="7.5" x2="30" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="33.5" y1="7.5" x2="32" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}
