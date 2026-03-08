import Link from "next/link";

export function FooterLegal() {
  return (
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
  );
}
