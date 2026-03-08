export function FooterCopyright() {
  return (
    <div className="border-t py-4 text-center text-xs text-muted-foreground">
      <span>
        &copy; {new Date().getFullYear()} tomo Web Studio . All rights
        reserved.
      </span>
    </div>
  );
}
