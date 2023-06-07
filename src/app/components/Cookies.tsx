import Link from "next/link";
import Image from "next/image";

export default function Cookies() {
  return (
    <div className="flex justify-between bg-[#212834] px-2 py-6 items-center">
      <p className="text-[3vw] w-[50%]">
        We use cookie to improve your experience on our site. By using our site
        you consent cookies.
      </p>
      <button>
        <div className="flex border rounded-md justify-center items-center px-7 py-3 bg-[#363d47]">
          <p className="">OK</p>
        </div>
      </button>
    </div>
  );
}
