import { Instagram, Twitter, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/your-account",
    icon: Twitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/your-account",
    icon: Facebook,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "group flex flex-col items-center gap-1",
            "text-muted-foreground hover:text-foreground",
            "transition-colors duration-200",
          )}
        >
          <div
            className={cn(
              "w-11 h-11 rounded-2xl border border-border bg-card flex items-center justify-center shadow-sm",
              "group-hover:border-primary/40 group-hover:shadow-md group-hover:-translate-y-0.5",
              "transition-all duration-300",
            )}
          >
            <Icon size={20} />
          </div>
          <span className="text-xs">{label}</span>
        </a>
      ))}
    </div>
  );
}
