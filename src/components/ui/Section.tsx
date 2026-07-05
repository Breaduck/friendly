import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  wide?: boolean;
  noContainer?: boolean;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  wide,
  noContainer,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-28 md:py-40 scroll-mt-20", className)}
    >
      {noContainer ? (
        children
      ) : (
        <Container wide={wide} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
