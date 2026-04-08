import { Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const LineIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.12 2 11.2c0 3.13 1.66 5.9 4.24 7.65-.17.63-.62 2.27-.71 2.62-.11.43.16.42.34.31.14-.09 2.26-1.52 3.18-2.14.63.09 1.28.14 1.95.14 5.52 0 10-4.12 10-9.2S17.52 2 12 2z" />
  </svg>
);

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/tomoWebStudio",
    icon: Twitter,
  },
  {
    label: "LINE",
    href: "https://line.me/ti/p/~tomo-web-studio",
    icon: LineIcon,
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
