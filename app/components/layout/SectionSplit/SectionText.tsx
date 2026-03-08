import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description?: string[];
  buttonLabel?: string;
  list?: string[];
  actions?: ReactNode;
};

export default function SectionText({
  title,
  description,
  buttonLabel,
  list,
  actions,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {description?.map((text, i) => (
        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
          {text}
        </p>
      ))}

      {list && (
        <ul className="space-y-2">
          {list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {buttonLabel && (
        <Button variant="default" size="sm">
          {buttonLabel}
        </Button>
      )}

      {actions && <div className="pt-2">{actions}</div>}
    </div>
  );
}
