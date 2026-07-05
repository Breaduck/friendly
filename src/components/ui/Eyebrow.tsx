import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold tracking-[0.14em] uppercase text-accent mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}
