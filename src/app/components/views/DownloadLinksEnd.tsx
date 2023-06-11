import styles from "../../styles/page.module.css";
import Link from "next/link";
import Image from "next/image";
import appstore from "../../../pictures/links/appstore.svg";
import appstoreLarge from "../../../pictures/links/appstoreLarge.svg";
import googleplay from "../../../pictures/links/googleplay.svg";
import googleplaylarge from "../../../pictures/links/googleplayLarge.svg";
export default function DownloadLinksEnd() {
  return (
    <>
      <h2
        className={`${styles.downloadlinksSecond} text-center mb-[45px] sm:mb-[32px]`}
      >
        DOWNLOAD OUR APP
      </h2>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Link
          href="/"
          className="box-border flex items-center justify-center h-[60px] my-3 mt-0 sm:h-[81px] sm:my-0 sm:mr-[28px]"
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
          className="box-border flex items-center justify-center h-[60px] sm:h-[81px] sm:mr-5vw my-3"
        >
          <Image src={googleplay} alt="googleplay" className="sm:hidden" />
          <Image
            src={googleplaylarge}
            alt="googleplay"
            className="hidden sm:block"
          />
        </Link>
      </div>
    </>
  );
}
