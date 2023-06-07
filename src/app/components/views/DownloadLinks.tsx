import Link from "next/link";
import Image from "next/image";
import appstore from "../../../pictures/appstore.svg";
import googleplay from "../../../pictures/googleplay.svg";

export default function DownloadLinks() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center text-center w-full">
      <h2 className="font-bold mb-5">DOWNLOAD OUR APP</h2>
      <Link href="/" className="flex items-center justify-center w-[50%] my-3">
        <Image src={appstore} alt="appstore" className="" />
      </Link>
      <Link href="/" className="flex items-center justify-center w-[50%] my-3">
        <Image src={googleplay} alt="appstore" className="" />
      </Link>
    </div>
  );
}
