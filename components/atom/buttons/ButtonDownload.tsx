export default function ButtonDownload(
  props: Partial<{
    buttonText: string;
  }>
) {
  const { buttonText } = props;
  return (
    <button className="flex w-40 h-11 justify-center items-center bg-[#F5F5F5] hover:bg-[#2F5D62] font-semibold text-[#2F5D62] hover:text-white border-2 focus:border-2 focus:border-[#2F5D62] rounded-md transition-all duration-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
        data-v-7563be6a=""
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="8 12 12 16 16 12"></polyline>
        <line x1="12" y1="8" x2="12" y2="16"></line>
      </svg>
      {buttonText}
    </button>
  );
}
