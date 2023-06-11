import Image from "next/image";
import styles from "../../styles/page.module.css";

// IMAGES
import phoneQR from "../../../pictures/phones/phoneQR.svg";
import bgtext from "../../../pictures/bgText.svg";
import arrow from "../../../pictures/arrow.svg";

export default function GArticle() {
  return (
    <div className="sm:flex sm:flex-col">
      <div className="px-4 w-[90%] mb-[70px] sm:order-2 sm:flex sm:justify-between sm:w-full sm:px-[100px]">
        <h2 className={styles.headline}>Generate your QR-code</h2>
        <p className={styles.content}>
          The guest QR code is scanned <br /> by the staff and automatically
          sent
        </p>
      </div>

      <div className="relative flex justify-center items-center pb-20 sm:order-1">
        <Image
          src={bgtext}
          alt="текст на заднем фоне"
          className="absolute w-full"
        />
        <div className="absolute rounded-full bg-gradient-to-t from-[#F101BF] to-[#0066FF] blur-[90px]  w-[90%] h-[85vw] opacity-10 z-10 sm:w-[1022px] sm:h-[952px]"></div>
        <Image
          src={phoneQR}
          alt="phone with QR-code"
          width={160}
          className="z-20 sm:w-[332px]"
        />
        <Image
          src={arrow}
          alt="стрелка"
          className="absolute bottom-7 right-6 sm:bottom-[450px] sm:right-[442px] sm:-rotate-[35deg]"
        />
        <h2 className="headline absolute bottom-0 right-6 font-bold sm:bottom-[428px] sm:right-[315px]">
          Scan QR-code
        </h2>
      </div>
    </div>
  );
}
