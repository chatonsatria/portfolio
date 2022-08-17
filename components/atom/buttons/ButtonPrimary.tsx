import Link from "next/link";

export default function ButtonPrimary(
  props: Partial<{
    buttonText: string;
    href: string;
    onClick: () => void;
  }>
) {
  const { buttonText, onClick, href = "" } = props;

  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="flex px-4 h-11 bg-[#2F5D62] hover:bg-[#1f3d41] text-white text-md rounded-md transition-all"
      >
        <p className="m-auto">{buttonText}</p>
      </button>
    </Link>
  );
}
