import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page.module.css";
// IMAGES
import guy2 from "../../../pictures/images/guy2.png";
import glass from "../../../pictures/images/glass.png";
import nightlife from "../../../pictures/Nightlife.svg";
import phoneorder1 from "../../../pictures/phones/phoneOrder1.svg";
import phoneorder2 from "../../../pictures/phones/phoneOrder2.svg";
import appstore from "../../../pictures/links/appstore.svg";
import appstoreLarge from "../../../pictures/links/appstoreLarge.svg";
import googleplay from "../../../pictures/links/googleplay.svg";
import googleplayLarge from "../../../pictures/links/googleplayLarge.svg";

export default function FArticle() {
  return (
    <div className="sm:flex sm:flex-row sm:h-[1300px]">
      <div>
        <div className="relative sm:order-1">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black z-20"></div>
          <Image src={guy2} alt="guy" className="z-10 sm:w-[60vw]" />
        </div>
        <div className="relative px-4 -top-[34px] z-40 sm:w-[400px] sm:left-[181px]">
          <h2 className={styles.headline}>QR code</h2>
          <p className={styles.content}>
            No more conflict situations due to wrong order. The guest selects
            the positions, and after that an individual QR code of his order is
            generated
          </p>
          <div className="flex flex-col items-center justify-center mt-[50px] sm:flex-row">
            <Link
              href="/"
              className="flex items-center justify-center h-[60px] my-3 mt-0 sm:h-[51px] sm:my-0 sm:mr-[28px]"
            >
              <Image src={appstore} alt="appstore" className="sm:hidden" />
              <Image
                src={appstoreLarge}
                alt="appstore"
                className="hidden sm:block"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center h-[60px] sm:h-[51px] sm:mr-5vw my-3"
            >
              <Image src={googleplay} alt="googleplay" className="sm:hidden" />
              <Image
                src={googleplayLarge}
                alt="googleplay"
                className="hidden sm:block"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative order-2">
        <div className="pl-7 top-7 sm:pl-0">
          <Image
            src={nightlife}
            alt="надпись nightlife"
            className="absolute top-[130px] sm:w-[138px] sm:top-0 sm:right-[90px]"
          />
          <Image
            src={glass}
            alt="стакан на столе"
            className="float-right sm:w-[733px]"
          />
        </div>

        <div className="relative bottom-[90px] flex flex-col justify-center items-center px-9 sm:static sm:block">
          <Image
            src={phoneorder1}
            alt="телефон с заказом 1"
            className="pb-8 sm:w-[332px] sm:absolute sm:-left-[150px] sm:top-[200px] z-50"
          />
          <Image
            src={phoneorder2}
            alt="телефон с заказом 2"
            className="sm:w-[332px] sm:absolute sm:right-[56px] sm:top-[566px] z-50"
          />
        </div>
      </div>
    </div>
  );
}
