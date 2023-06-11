import styles from "../../styles/page.module.css";

export default function BContacts() {
  return (
    <div className="flex flex-col h-full justify-around items-center mt-10 mb-10 sm:flex-row sm:px-[10vw]">
      <div className="w-[90%] border-2 rounded-2xl border-gray-300 border-opacity-50 px-7 py-7 mb-7 sm:w-[35vw] sm:h-[20vw] sm:mb-0 sm:flex sm:justify-center sm:flex-col">
        <h2 className="font-bold text-[24px] leading-[32px] pb-[30px] sm:text-[30px] sm:leading-[40px]">
          Would like to become a member, please contact us
        </h2>
        <a href="/" className="underline sm:text-[24px]">
          support@notab.com
        </a>
      </div>
      <div className="w-[90%] border-2 rounded-2xl border-gray-300 border-opacity-50 px-7 py-7 sm:w-[35vw] sm:h-[20vw] sm:flex sm:justify-center sm:flex-col">
        <h2 className="font-bold text-[24px] leading-[32px] pb-[30px] sm:text-[30px] sm:leading-[40px]">
          Already a partner?
        </h2>
        <a href="/" className="underline sm:text-[24px]">
          Login
        </a>
      </div>
    </div>
  );
}
