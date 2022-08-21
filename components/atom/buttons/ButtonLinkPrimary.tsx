import Link from "next/link";

export default function ButtonLinkPrimary(
  props: Partial<{
    buttonText: string;
    href: string;
    target_blank: boolean;
    onClick: () => void;
  }>
) {
  const { buttonText, onClick, href = "", target_blank = true } = props;

  return (
    <>
      {href ? (
        <Link href={href}>
          {target_blank ? (
            <a target="_blank">
              <button
                onClick={onClick}
                className="flex px-4 h-8 bg-[#2F5D62] hover:bg-[#1f3d41] text-white text-md rounded-md transition-all"
              >
                <p className="m-auto">{buttonText}</p>
              </button>
            </a>
          ) : (
            <button
              onClick={onClick}
              className="flex px-4 h-11 bg-[#2F5D62] hover:bg-[#1f3d41] text-white text-md rounded-md transition-all"
            >
              <p className="m-auto">{buttonText}</p>
            </button>
          )}
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}
