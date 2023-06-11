interface props {
  content: string;
}

export default function TextWithBorder({ content }: props) {
  return (
    <>
      <h2 className="inline-block text-[10px] max-w-[130px] px-3 py-2 border rounded-lg bg-black border-white sm:rounded-[18px] sm:text-[22px] sm:leading-[27px] sm:font-medium sm:max-w-[285px] sm:px-[26px] sm:py-[30px]">
        {content}
      </h2>
    </>
  );
}
