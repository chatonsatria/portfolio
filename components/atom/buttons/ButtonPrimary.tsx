export default function ButtonPrimary(
  props: Partial<{
    buttonText: string;
    onClick: () => void;
  }>
) {
  const { buttonText, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="flex px-4 h-11 bg-[#2F5D62] hover:bg-[#1f3d41] text-white text-md rounded-md transition-all"
    >
      <p className="m-auto">{buttonText}</p>
    </button>
  );
}
