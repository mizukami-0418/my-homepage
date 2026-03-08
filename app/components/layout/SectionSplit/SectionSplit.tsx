import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
};

export default function SectionSplit({ left, right, reverse = false }: Props) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
      <div className={cn(reverse ? "md:order-2" : "md:order-1")}>{left}</div>
      <div className={cn(reverse ? "md:order-1" : "md:order-2")}>{right}</div>
    </div>
  );
}
