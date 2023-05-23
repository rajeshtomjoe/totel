import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      fill={true}
      className="object-contain !h-fit !relative !h-12 !w-auto"
      alt="logo"
    />
  );
}
