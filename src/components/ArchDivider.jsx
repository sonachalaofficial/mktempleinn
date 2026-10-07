export default function ArchDivider({ className = '', tone = 'gold' }) {
  const stroke = tone === 'light' ? '#e9dcc3' : '#b8874a';
  return (
    <div className={`arch-divider ${className}`} aria-hidden="true">
      <svg viewBox="0 0 46 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24V14C2 6 10 2 23 2C36 2 44 6 44 14V24" stroke={stroke} strokeWidth="1.3" />
        <circle cx="23" cy="8" r="1.6" fill={stroke} />
        <line x1="2" y1="24" x2="44" y2="24" stroke={stroke} strokeWidth="1.3" />
      </svg>
    </div>
  );
}
