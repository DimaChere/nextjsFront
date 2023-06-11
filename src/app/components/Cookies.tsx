import Link from "next/link";
import Image from "next/image";

export default function Cookies() {
  return (
    <div className="flex justify-between bg-[#212834] px-2 py-6 items-center sm:h-[93px]">
      <p className="text-[3vw] w-[50%] sm:text-[14px] sm:w-[70%]">
        We use cookie to improve your experience on our site. By using our site
        you consent cookies.
      </p>
      <button>
        <div className="flex border rounded-md justify-center items-center px-7 py-3 bg-[#363d47] sm:px-11 sm:hover:bg-[#6c7582]">
          <p className="sm:text-[14px]">OK</p>
        </div>
      </button>
    </div>
  );
}
