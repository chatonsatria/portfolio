export default function DetailTitle(props: {
  title: string;
  date: string;
  tag: string;
}) {
  const { title, date, tag } = props;
  return (
    <section
      data-aos="fade-right"
      className="flex flex-col lg:flex-row justify-between items-center"
    >
      <p className="text-center font-semibold text-4xl md:text-5xl mb-4">
        {title ? title : ""}
      </p>
      <div className="inline-flex gap-x-4 items-center">
        <div className="inline-flex items-center">
          <svg
            className="mr-2 text-[#152C2F] dark:text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 16L12.586 13.586C12.2109 13.211 12.0001 12.7024 12 12.172V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-sm md:text-base">{date ? date : "-"}</p>
        </div>
        <div className="inline-flex items-center">
          <svg
            className="mr-2 text-[#152C2F] dark:text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.244 21.366C15.043 21.567 14.8044 21.7265 14.5418 21.8353C14.2792 21.9441 13.9978 22.0001 13.7135 22.0001C13.4292 22.0001 13.1478 21.9441 12.8852 21.8353C12.6226 21.7265 12.384 21.567 12.183 21.366L3.634 12.817C3.22815 12.4112 3.00009 11.8609 3 11.287V5.163C3 3.97 3.97 3 5.164 3H11.287C11.86 3 12.411 3.228 12.817 3.634L21.366 12.183C21.567 12.384 21.7265 12.6226 21.8353 12.8852C21.9441 13.1478 22.0001 13.4292 22.0001 13.7135C22.0001 13.9978 21.9441 14.2792 21.8353 14.5418C21.7265 14.8044 21.567 15.043 21.366 15.244L15.244 21.366Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 6.5L7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-sm md:text-base">{tag ? tag : "-"}</p>
        </div>
      </div>
    </section>
  );
}
