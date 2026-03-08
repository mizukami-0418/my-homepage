import Link from "next/link";
import Image from "next/image";

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
    </div>
  );
}
