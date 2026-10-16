import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}
