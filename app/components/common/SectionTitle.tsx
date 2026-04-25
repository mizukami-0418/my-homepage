"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/app/hooks/useReveal";

interface SectionTitleProps {
  reveal: ReturnType<typeof useReveal>;
  label?: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  reveal,
  label,
  title,
  description,
  className,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div
      ref={reveal.ref}
      className={cn(
        "text-center transition-all duration-700 ease-out",
        reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className={cn("mt-3 text-sm text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
