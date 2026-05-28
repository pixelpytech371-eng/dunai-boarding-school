import { TYPE_COLORS } from "../../data/seedData";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({
  label,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        TYPE_COLORS[label] || "bg-gray-100 text-gray-600"
      } ${className}`}
    >
      {label}
    </span>
  );
}