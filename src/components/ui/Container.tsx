import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Container({ children, className, wide = false }: ContainerProps) {
  return (
    <div
      className={cn(
        wide ? "max-w-7xl" : "max-w-6xl",
        "mx-auto px-6 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
