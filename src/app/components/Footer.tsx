export default function Footer() {
  return (
    <>
      <div className="relative flex flex-col text-center pb-[24px] mt-11 overflow-y-clip">
        <div className="absolute left-[-20vw] top-20 rounded-full w-[250px] h-[250px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-30 blur-3xl z-10"></div>
        <a href="/" className="mb-[14px]">
          Terms of use
        </a>
        <a href="/" className="mb-[40px]">
          Privacy policy
        </a>
        <h1 className="font-extrabold tracking-wider mb-[10px]">NOTAB</h1>
        <p className="text-[14px] mb-[9px]">
          Contact us:{" "}
          <a href="/" className="text-[14px] font-semibold">
            support@notab.com
          </a>
        </p>
        <div className="flex justify-center">
          <p className="">&copy; 2020 - NoTab</p>
          <p className="text-[20px]">&reg;</p>
        </div>
      </div>
    </>
  );
}
