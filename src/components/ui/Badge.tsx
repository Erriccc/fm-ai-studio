import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "electric" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-navy-700 text-steel-300 border border-navy-600",
    electric: "bg-electric-500/10 text-electric-500 border border-electric-500/30",
    outline: "bg-transparent text-steel-400 border border-steel-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
