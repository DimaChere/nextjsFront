interface props {
  content: string;
}

export default function TextWithBorder({ content }: props) {
  return (
    <>
      <h2 className="inline-block text-[10px] max-w-[130px] px-3 py-2 border rounded-lg bg-black border-white">
        {content}
      </h2>
    </>
  );
}
