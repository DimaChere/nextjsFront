export default function Footer() {
  return (
    <>
      <div className="relative flex flex-col text-center pb-[24px] mt-11 sm:flex-row sm:justify-between sm:px-[100px] sm:py-[85px] sm:max-h-[272px]">
        <div className="absolute left-[-20vw] top-20 w-[250px] h-[250px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-30 blur-[120px] z-10 sm:w-[405px] sm:h-[411px] sm:-left-[50px] sm:top-0"></div>
        <div className="flex flex-col mb-[40px] sm:order-2 z-20">
          <a href="/" className="mb-[14px] sm:18px">
            Terms of use
          </a>
          <a href="/" className="sm:18px">
            Privacy policy
          </a>
        </div>
        <div className="sm:order-1 sm:text-left z-20">
          <h1 className="font-extrabold tracking-wider mb-[10px] sm:text-[16px]">
            NOTAB
          </h1>

          <div className="flex flex-row justify-center sm:flex-col sm:justify-start sm:mb-[19.5px]">
            <p className="text-[14px] mb-[9px] sm:18px sm:mb-0">Contact us:</p>
            <a href="/" className="text-[14px] font-semibold sm:18px">
              support@notab.com
            </a>
          </div>

          <div className="flex justify-center sm:justify-start sm:font-extrabold">
            <p className="sm:18px">&copy; 2020 - NoTab</p>
            <p className="text-[20px]">&reg;</p>
          </div>
        </div>
      </div>
    </>
  );
}
