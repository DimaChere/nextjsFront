import Image from "next/image";
import styles from "../../styles/page.module.css";
// IMAGES
import phone2 from "../../../pictures/phones/phone2.svg";

export default function CArticle() {
  return (
    <>
      <div className="px-4 w-[90%] mb-24">
        <div className="relative left-[-40px] top-16 w-28 h-28 bg-gradient-radial from-[#F101BF] to-black opacity-50 blur-2xl z-0"></div>
        <h2 className={styles.headline}>Our mission an vision</h2>
        <p className="relative text-[4vw]">
          While technology is our sweet spot, we’ve developed our vision
          alongside our customers to ensure your everyday problems are solved
          through simplistic tools. And as your business grows, we’ll grow right
          alongside with you.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Image src={phone2} alt="phone2" className=" z-30" />
      </div>
    </>
  );
}
