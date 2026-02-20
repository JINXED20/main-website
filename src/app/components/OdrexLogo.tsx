import svgPaths from "../../imports/svg-a5d7jxqgfn";

export function OdrexLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="170 125 265 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={svgPaths.p1de1f00}
        fill="#60A5FA"
      />
      <path
        d="M370.5 159.5H410.5"
        stroke="#5CE1E6"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M370.5 167.5H427.5"
        stroke="#60A5FA"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M370.5 175.5H424.5"
        stroke="#1E40AF"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path d={svgPaths.p26a07100} fill="white" />
    </svg>
  );
}