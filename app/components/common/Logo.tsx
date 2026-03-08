import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/corporate-logo.png"
        alt="logo"
        width={64}
        height={64}
      />
      <span className="font-bold font-script text-3xl">
        tomo Web Studio
      </span>
    </Link>
  );
}
