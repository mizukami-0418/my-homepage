import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function SectionImage({ src, alt }: Props) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-xl aspect-4/3">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
