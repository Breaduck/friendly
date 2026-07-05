import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
}

export function PrimaryButton({
  href,
  onClick,
  children,
  className,
  variant = "solid",
  target,
  rel,
}: PrimaryButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 active:scale-95",
    variant === "solid"
      ? "bg-accent text-white hover:bg-accent-deep"
      : "border-2 border-accent text-accent hover:bg-accent hover:text-white",
    className
  );

  if (href) {
    return (
      <a href={href} className={base} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
