import styles from "../../styles/page.module.css";

import Link from "next/link";
import Image from "next/image";
import appstore from "../../../pictures/links/appstore.svg";
import appstoreLarge from "../../../pictures/links/appstoreLarge.svg";
import googleplay from "../../../pictures/links/googleplay.svg";
import googleplaylarge from "../../../pictures/links/googleplayLarge.svg";

export default function DownloadLinks() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center text-center w-full sm:justify-between sm:text-left sm:px-[7vw]">
      <h2 className={styles.downloadlinksFirst}>DOWNLOAD OUR APP</h2>
      <div className="flex flex-col sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center h-[60px] my-3 sm:h-[51px] sm:mr-10"
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
            src={googleplaylarge}
            alt="googleplay"
            className="hidden sm:block"
          />
        </Link>
      </div>
    </div>
  );
}
