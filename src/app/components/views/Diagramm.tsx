import Image from "next/image";

interface props {
  ssilka: string;
  itHasBorder: boolean;
  shortDesc: string;
}

export default function Diagramm({ ssilka, itHasBorder, shortDesc }: props) {
  return (
    <Image
      src={ssilka}
      alt={shortDesc}
      className={`${
        itHasBorder &&
        "box-content border border-gray-500 rounded-md p-3 bg-black"
      }`}
    />
  );
}
