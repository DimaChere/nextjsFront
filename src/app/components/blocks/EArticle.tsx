import Image from "next/image";
import styles from "../../styles/page.module.css";

// IMAGES
import guy2 from "../../../pictures/images/guy2.png";
import glass from "../../../pictures/images/glass.png";
import nightlife from "../../../pictures/Nightlife.svg";
import phoneorder1 from "../../../pictures/phones/phoneOrder1.svg";
import phoneorder2 from "../../../pictures/phones/phoneOrder2.svg";
//COMPONENTS
import Graphs from "../views/Graphs";
import DownloadLinks from "../views/DownloadLinks";

export default function EArticle() {
  return (
    <>
      <div className="px-4 w-[90%] mb-24">
        <h2 className={styles.headline}>BI Tool Integration</h2>
        <p className="relative text-[3.75vw]">
          We use Business Intelligence Tool that allows you to be updated what
          is happening in your business just by one click. Track revenue and
          profit by one click.
        </p>
      </div>

      <Graphs />

      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black z-20"></div>
        <Image src={guy2} alt="guy" className="z-10" />
        <h2 className="absolute bottom-0 left-0 text-[6vw] font-semibold z-30 ml-4">
          QR code
        </h2>
      </div>
      <div className="px-4 w-[90%] mb-24">
        <p className="relative text-[4.1vw] mt-3">
          No more conflict situations due to wrong order. The guest selects the
          positions, and after that an individual QR code of his order is
          generated
        </p>
      </div>

      <DownloadLinks />

      <div className="relative">
        <div className="relative flex flex-row pl-7 top-7">
          <Image src={nightlife} alt="надпись nightlife" className="" />
          <Image src={glass} alt="стакан на столе" />
        </div>
        <div className="relative bottom-14 flex flex-col justify-center items-center p-9">
          <Image src={phoneorder1} alt="телефон с заказом 1" className="pb-8" />
          <Image src={phoneorder2} alt="телефон с заказом 2" />
        </div>
      </div>
    </>
  );
}
