import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [toggle, setToggle] = useState(false);
  const [toggleId, setToggleId] = useState<number>();
  const toggleHandler = (id: number) => {
    if (toggleId === id) {
      setToggle(false);
      setToggleId(0);
    } else {
      setToggle(true);
      setToggleId(id);
    }
  };
  return (
    <section className="flex flex-col items-center gap-y-8">
      {/* contact details */}
      <p
        data-aos="fade-right"
        className="font-semibold text-3xl md:text-5xl mb-8"
      >
        Contact Details
      </p>
      <div data-aos="fade-right" className="w-full shadow-md cursor-pointer">
        {/* email */}
        <div
          onClick={() => toggleHandler(1)}
          className={`${
            toggle && toggleId === 1 ? "h-[170px]" : "h-[106px]"
          } dark:bg-[#172e31] border-b-2 dark:border-[#13282B] transition-height items-center overflow-clip flex flex-col gap-y-4 p-3 rounded-t-md`}
        >
          <p
            className={`${
              toggleId === 1 ? "text-[#2F5D62]" : "text-black dark:text-white"
            } font-semibold text-lg`}
          >
            <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
              <svg
                className="w-10 h-10 m-auto"
                width="24"
                height="24"
                viewBox="0 0 28 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z"
                  fill="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </p>
          <div className="inline-flex gap-x-3 items-center font-semibold text-sm md:text-lg">
            <p>chaton.satria@gmail.com</p>
            <p>|</p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chaton.satria@gmail.com&su=Job Offer&body=Hallo Chaton Satria Yudhystira,
            We Would like to inform you that . . . ."
            >
              <a target="_blank">
                <button>send an e-mail</button>
              </a>
            </Link>
          </div>
        </div>
        {/* phone */}
        <div
          onClick={() => toggleHandler(2)}
          className={`${
            toggle && toggleId === 2 ? "h-[170px]" : "h-[106px]"
          } dark:bg-[#172e31] border-b-2 dark:border-[#13282B] transition-height items-center overflow-clip flex flex-col gap-y-4 p-3`}
        >
          <p
            className={`${
              toggleId === 2 ? "text-[#2F5D62]" : "text-black dark:text-white"
            } font-semibold text-lg`}
          >
            <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
              <svg
                className="w-10 h-10 m-auto"
                width="24"
                height="24"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.55423 5.24101L6.17123 1.33601C5.78123 0.886007 5.06623 0.888007 4.61323 1.34201L1.83123 4.12901C1.00323 4.95801 0.766232 6.18901 1.24523 7.17601C4.10685 13.101 8.88528 17.8861 14.8062 20.756C15.7922 21.235 17.0222 20.998 17.8502 20.169L20.6582 17.356C21.1132 16.901 21.1142 16.182 20.6602 15.792L16.7402 12.427C16.3302 12.075 15.6932 12.121 15.2822 12.533L13.9182 13.899C13.8484 13.9722 13.7565 14.0204 13.6566 14.0363C13.5567 14.0522 13.4543 14.0349 13.3652 13.987C11.1357 12.7031 9.28622 10.8512 8.00523 8.62001C7.95726 8.53076 7.93989 8.42823 7.95578 8.32816C7.97168 8.22809 8.01996 8.136 8.09323 8.06601L9.45323 6.70501C9.86523 6.29101 9.91023 5.65101 9.55423 5.24001V5.24101Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </p>
          <div className="inline-flex gap-x-3 items-center font-semibold text-sm md:text-lg">
            <p>+6289630907280</p>
            <p>|</p>
            <Link
              href="https://wa.me/6289630907280?text=Hallo Chaton Satria Yudhystira,
              We Would like to inform you that . . . ."
            >
              <a target="_blank">
                <button>send a message</button>
              </a>
            </Link>
          </div>
        </div>
        {/* address */}
        <div
          onClick={() => toggleHandler(3)}
          className={`${
            toggle && toggleId === 3 ? "h-[170px]" : "h-[106px]"
          } dark:bg-[#172e31] transition-height items-center overflow-clip flex flex-col gap-y-4 p-3 rounded-b-md`}
        >
          <p
            className={`${
              toggleId === 3 ? "text-[#2F5D62]" : "text-black dark:text-white"
            } font-semibold text-lg`}
          >
            <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
              <svg
                className="w-10 h-10 m-auto"
                width="24"
                height="24"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99994 12.4667C8.99008 12.4667 9.93966 12.0733 10.6398 11.3732C11.3399 10.6731 11.7333 9.72347 11.7333 8.73333C11.7333 7.74319 11.3399 6.7936 10.6398 6.09347C9.93966 5.39333 8.99008 5 7.99994 5C7.00979 5 6.06021 5.39333 5.36007 6.09347C4.65993 6.7936 4.2666 7.74319 4.2666 8.73333C4.2666 9.72347 4.65993 10.6731 5.36007 11.3732C6.06021 12.0733 7.00979 12.4667 7.99994 12.4667ZM7.99994 7.13333C8.42428 7.13333 8.83125 7.3019 9.13131 7.60196C9.43136 7.90202 9.59994 8.30899 9.59994 8.73333C9.59994 9.15768 9.43136 9.56465 9.13131 9.8647C8.83125 10.1648 8.42428 10.3333 7.99994 10.3333C7.57559 10.3333 7.16862 10.1648 6.86856 9.8647C6.56851 9.56465 6.39994 9.15768 6.39994 8.73333C6.39994 8.30899 6.56851 7.90202 6.86856 7.60196C7.16862 7.3019 7.57559 7.13333 7.99994 7.13333Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8.8646C0 13.3905 4.67413 21.0001 8 21.0001C11.3259 21.0001 16 13.3905 16 8.8646C16 4.3782 12.4224 0.733398 8 0.733398C3.5776 0.733398 0 4.3782 0 8.8646ZM13.8667 8.8646C13.8667 12.3633 9.872 18.8667 8 18.8667C6.128 18.8667 2.13333 12.3633 2.13333 8.8646C2.13333 5.54727 4.7648 2.86673 8 2.86673C11.2352 2.86673 13.8667 5.54727 13.8667 8.8646Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </p>
          <p className="mt-2 font-semibold text-sm md:text-lg">
            Yogyakarta, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}
