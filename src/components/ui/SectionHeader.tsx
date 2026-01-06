import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  alignment = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        alignment === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-4 text-sm font-mono font-medium tracking-wider text-electric-500 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-50 tracking-tight">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-4 text-lg md:text-xl text-steel-400 max-w-3xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
}
