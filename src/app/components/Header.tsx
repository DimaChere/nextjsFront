import Image from "next/image";
import Link from "next/link";
import logo from "../../pictures/icons/icon.png";
import user from "../../pictures/icons/user.svg";
export default function Header() {
  return (
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm sm:px-10 ">
      <div className="flex justify-between w-full pb-0 pt-10 px-4 sm:justify-normal">
        <div className="flex items-center">
          <div className="relative w-[52px] h-[52px] sm:w-[80px] sm:h-[80px]">
            <Image src={logo} alt="logo" fill className="z-40" />
          </div>

          <p className="text-xl sm:text-[29px] font-bold sm:font-black z-40">
            NoTab
          </p>
        </div>
        <Image
          className="z-40 ml-[7vw] mr-[10px] hidden sm:block mt-2"
          src={user}
          alt="User"
          width={20}
          height={20}
        />
        <Link
          href="/"
          className="flex items-center underline underline-offset-8 sm:underline-offset-4 text-xl sm:text-[18px] z-40 cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
