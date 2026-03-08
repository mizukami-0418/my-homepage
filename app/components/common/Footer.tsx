import SocialLinks from "./SocialLinks";
import { FooterBrand } from "./FooterBrand";
import { FooterLegal } from "./FooterLegal";
import { FooterCopyright } from "./FooterCopyright";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4 text-center">
        {/* Brand */}
        <FooterBrand />

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
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
        <FooterLegal />

        {/* Social Links */}
        <div>
          <SocialLinks />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
