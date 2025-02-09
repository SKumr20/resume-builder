import React from "react";
import { useId } from "react";

const Features = () => {
  return (
    <>
    <div className="flex p-10 items-center justify-center bg-background">
    <h2 className="text-3xl text-foreground bg-background font-semibold tracking-tight first:mt-0">
      Features
    </h2>
    </div>
    <div className="bg-background">
      <div className="grid p-20 py-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

const grid = [
  {
    title: "Dynamic Resume Builder",
    description:
      "Add various resume sections as per your needs.",
  },
  {
    title: "Creative UI",
    description:
      "Draw attention to your unique resume, and get noticed by recruiters.",
  },
  {
    title: "Download And Share",
    description:
      "Quickly download and share your resume in PDF form.",
  },
  {
    title: "100% Free",
    description:
      "No strain on your wallet.",
  },
];

export const Grid = ({ pattern, size }) => {
  const p =
    pattern ||
    Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 4) + 7,
      Math.floor(Math.random() * 6) + 1,
    ]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id="gridPattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" stroke="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#gridPattern)" />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], i) => (
            <rect
              strokeWidth="0"
              key={i}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default Features;
