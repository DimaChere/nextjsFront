import Image from "next/image";
import styles from "../../styles/page.module.css";
// IMAGES
import guy from "../../../pictures/images/guy.png";
import guyHR from "../../../pictures/images/guyHR.png";

import phonver1 from "../../../pictures/phones/phoneVer1.svg";
import phonver2 from "../../../pictures/phones/phoneVer2.svg";

export default function DArticle() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="relative">
          <div className="absolute top-0 left-0 h-[101%] w-full bg-gradient-to-b from-black via-transparent to-black z-20"></div>
          <Image src={guyHR} alt="guy" className="z-10 w-full" />
        </div>
        <div className="relative top-[-10vw] px-4 mb-24 z-30 sm:top-[-10px] sm:w-[24.5%] sm:float-right sm:mx-[150px]">
          <h2 className={styles.headline}>ID SCANER</h2>
          <p className={styles.content}>
            Scan, verify, and collect data on each person that walks through
            your door to humanize your data. You also get a digital 86 list as
            well as a citywide ban list to keep your venue safe.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-9 sm:absolute sm:top-[40%] sm:left-0 sm:flex-row sm:w-[700px] sm:justify-between">
        <Image
          src={phonver1}
          alt="verification1"
          className="mb-20 z-30 sm:h-[50%] sm:mb-0"
        />
        <Image
          src={phonver2}
          alt="verification2"
          className="mb-24 z-30 sm:h-[50%] sm:mb-0"
        />
      </div>
    </div>
  );
}
