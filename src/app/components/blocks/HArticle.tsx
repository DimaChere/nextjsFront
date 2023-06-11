import Image from "next/image";
import styles from "../../styles/page.module.css";
// IMAGES
import phonecarpet from "../../../pictures/phones/phoneCarpet.png";
import phonecarpethr from "../../../pictures/phones/phoneCarpetHR.png";
//COMPONENTS
import TextWithBorder from "../TextWithBorder";

export default function HArticle() {
  return (
    <div className="relative">
      <div className="px-4 w-[90%] mb-24 sm:w-[425px] sm:ml-auto sm:mr-[160px] sm:mb-0">
        <h2 className={styles.headline}>
          Easier ordering. <br /> Happier guests.
        </h2>
        <p className={styles.content}>
          NoTab makes it simple for patrons to easily
        </p>
      </div>

      <div className="relative py-16 sm:py-0">
        <div className="absolute rounded-full right-[-45vw] top-[-10vw] w-[90%] h-[90vw] rotate-[5deg] bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-10 blur-2xl sm:w-[286px] sm:h-[267px] sm:-right-[45px] sm:top-0 sm:blur-[75px]"></div>
        <Image
          src={phonecarpet}
          alt="телефон-кавер"
          width={280}
          className="z-20 sm:hidden"
        />
        <Image
          src={phonecarpethr}
          alt="телефон-кавер"
          className="hidden sm:block sm:mx-auto"
        />
        {/* Можно поработать с классами */}
        <div className="absolute top-[0%] left-[11%] sm:top-[204px] sm:left-[786px]">
          <TextWithBorder content="No more lost or forgotten credit cards" />
        </div>
        <div className="absolute top-[17%] right-[5%] sm:top-[359px] sm:right-[868px]">
          <TextWithBorder content="No more lost or forgotten credit cards" />
        </div>
        <div className="absolute bottom-[20%] left-[5%] sm:bottom-[242px] sm:left-[509px]">
          <TextWithBorder content="Skip the line" />
        </div>
        <div className="absolute bottom-0 right-[5%] sm:bottom-[308px] sm:right-[249px]">
          <TextWithBorder content="No more split your tab" />
        </div>
      </div>
    </div>
  );
}
