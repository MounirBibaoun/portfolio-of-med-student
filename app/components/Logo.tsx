import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <span className="text-pink-700 font-bold text-2xl">Med Student</span>
    </div>
  );
}
