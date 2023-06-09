import Image from "next/image";
import Link from "next/link";
import styles from "./styles/page.module.css";

// COMPONENTS
import DownloadLinks from "./components/views/DownloadLinks";
import Cookies from "./components/Cookies";

import TextWithBorder from "./components/TextWithBorder";
import AStart from "./components/blocks/AStart";
import BContacts from "./components/blocks/BContacts";
import CArticle from "./components/blocks/CArticle";
import DArticle from "./components/blocks/DArticle";
import EArticle from "./components/blocks/EArticle";
import FArticle from "./components/blocks/FArticle";
import GArticle from "./components/blocks/GArticle";
import HArticle from "./components/blocks/HArticle";
import QuestionForm from "./components/blocks/QuestionForm";
import PreEnd from "./components/blocks/PreEnd";
import DownloadLinksEnd from "./components/views/DownloadLinksEnd";
// ICONS

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col w-full overflow-x-clip">
        <AStart />
        <DownloadLinks />
        <BContacts />
        <CArticle />
        <Cookies />
        <DArticle />
        <EArticle />
        <FArticle />
        <GArticle />
        <HArticle />
        <PreEnd />
        <QuestionForm />
        <DownloadLinksEnd />
      </main>
    </>
  );
}
