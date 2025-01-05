import Image from "next/image";
import target from "../image/Target.webp";

const CircularProgress = ({ value, total }) => {
  const percentage = (value / total) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48 rotate-[210deg]">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          className="stroke-current text-blue-100"
          strokeWidth="25"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          className="stroke-current text-blue-500"
          strokeWidth="25"
          fill="none"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
      {/* Target icon in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 flex items-center justify-center rotate-180">
          <Image src={target} alt="target" />
        </div>
      </div>
    </div>
  );
};
export default CircularProgress;
