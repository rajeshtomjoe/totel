export default function Bicycle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} fill="none">
      <circle
        cx={9.833}
        cy={18.193}
        r={3}
        stroke="#141414"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={23.167}
        cy={18.193}
        r={3}
        stroke="#141414"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="#141414"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.833 15.526-1.666-7h5.666M13.167 18.193h3.666m0 0-4.666-7H14.5 9.833m7 7h3M6.833 25.193h19.334"
      />
    </svg>
  );
}
