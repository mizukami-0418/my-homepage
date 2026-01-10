import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4 text-center">
        {/* Brand */}
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

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#strengths">Strengths</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#price">Price</a>
            </li>
            <li>
              <a href="#blog">Qiita Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} tomo Web Studio . All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
