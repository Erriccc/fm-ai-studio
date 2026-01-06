import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-navy-800/50 border border-navy-700",
    elevated: "bg-navy-800 border border-navy-600 shadow-lg shadow-navy-900/50",
    bordered: "bg-transparent border border-navy-600 hover:border-electric-500/50",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
