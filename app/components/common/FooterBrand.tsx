import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="flex justify-center gap-2">
        <Image
          src="/images/corporate-logo.png"
          alt="logo"
          width={64}
          height={64}
        />
        <h3 className="font-bold font-script my-auto text-2xl">
          tomo Web Studio
        </h3>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">
        Web制作・アプリケーション開発なら、ぜひ tomo Web Studio
        にお任せください。
      </p>
      <p className="mt-2 flex items-center gap-2">
        <Phone size={16} /> 080-2243-1037
      </p>
      <p className="flex items-center gap-2">
        <Mail size={16} />{" "}
        <a href="mailto:example@email.com">tomo.web.studio2026@gmail.com</a>
      </p>
    </div>
  );
}
