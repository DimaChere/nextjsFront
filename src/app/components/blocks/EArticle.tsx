import Image from "next/image";
import styles from "../../styles/page.module.css";
//COMPONENTS
import Graphs from "../views/Graphs";

export default function EArticle() {
  return (
    <div className="sm:flex sm:flex-row sm:mt-[103px] mb-[36px]">
      <div className="px-4 w-full mb-[30px] sm:w-[33vw] sm:ml-[7vw] sm:mt-[80px]">
        <h2 className={styles.headline}>BI Tool Integration</h2>
        <p className={styles.content}>
          We use Business Intelligence Tool that allows <br /> you to be updated
          what is happening in your <br /> business just by one click. Track
          revenue <br /> and profit by one click.
        </p>
      </div>
      <div className="hidden sm:block absolute bg-gradient-to-t from-[#F101BF] to-[#0066FF] blur-[100px] rotate-[10deg] w-[426px] h-[438px] opacity-10 z-10 -left-[67px]"></div>
      <Graphs />
    </div>
  );
}
