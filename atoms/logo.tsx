import Image from "next/image";
import HibrDigitalLogo from "@/app/assets/hibr.png";
export default function Logo() {
  return (
    <Image
      className="center"
      src={HibrDigitalLogo}
      alt="Hibr Digital Logo حبر رقمي"
      width={256}
      height={256}
      priority
    />
  );
}
