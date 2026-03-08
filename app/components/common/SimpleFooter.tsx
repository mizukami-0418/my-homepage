import SocialLinks from "./SocialLinks";
import { FooterBrand } from "./FooterBrand";
import { FooterLegal } from "./FooterLegal";
import { FooterCopyright } from "./FooterCopyright";

export function SimpleFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 grid gap-4 md:grid-cols-3 text-center">
        {/* Brand */}
        <FooterBrand />

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
