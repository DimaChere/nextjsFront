import Image from "next/image";
import styles from "../../styles/page.module.css";
// IMAGES
import phone2 from "../../../pictures/phones/phone2.svg";

export default function CArticle() {
  return (
    <div className="sm:flex sm:flex-row">
      <div className="px-4 w-[90%] mb-24 sm:w-[30vw] sm:order-2 sm:flex sm:flex-col sm:justify-center sm:mb-[24%]">
        <div className="relative left-[-40px] top-16 w-28 h-28 bg-gradient-radial from-[#F101BF] to-black opacity-50 blur-2xl z-0 sm:clear-left sm:left-32 sm:top-[6.5rem]"></div>
        <h2 className={styles.headline}>Our mission and vision</h2>
        <div className="sm:w-[80%]">
          <p className={styles.content}>
            While technology is our sweet spot, we’ve developed our vision
            alongside our customers to ensure your everyday problems are solved
            through simplistic tools. And as your business grows, we’ll grow
            right alongside with you.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative sm:w-[70vw] sm:h-[70vw] sm:order-1 sm:relative sm:left-[-15vw]">
        <Image
          src={phone2}
          alt="phone2"
          className="z-30 sm:rotate-90 sm:w-[70vw]"
        />
      </div>
    </div>
  );
}
